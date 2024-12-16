// Process the link provided by the user
function convertToCsvLink(sheetUrl) {
  const regex = /https:\/\/docs\.google\.com\/spreadsheets\/d\/([a-zA-Z0-9-_]+)\/.*gid=([0-9]+)/;
  const match = sheetUrl.match(regex);

  if (match) {
    const sheetId = match[1];
    const gid = match[2];
    return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
  } else {
    throw new Error('Geçersiz Google Sheets linki. Lütfen tam linki girin (gid parametresi ile).');
  }
}

// Fetch CSV data from Google Sheets and convert it to JSON
async function fetchGoogleSheetData(sheetUrl) {
  const response = await fetch(sheetUrl);
  if (!response.ok) {
    throw new Error(`Google Sheets linki hatalı: ${response.statusText}`);
  }
  const csvData = await response.text();

  // Convert CSV to JSON format
  const rows = csvData.split('\n');
  return rows.slice(1).map(row => {
    const [ColumnA, ColumnB] = row.split(',|,');
    return { ColumnA: ColumnA?.trim(), ColumnB: ColumnB?.trim() };
  });
}

// Shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate Quiz 
function generateQuiz(inputList) {
  const quizData = [];

  inputList.forEach((map) => {
    const question = map["ColumnA"];
    const correctAnswer = map["ColumnB"];

    // Set used to select incorrect answers
    const optionsSet = new Set();
    optionsSet.add(correctAnswer);

    // Random incorrect options are being selected
    while (optionsSet.size < 4) {
      const randomEntry = inputList[Math.floor(Math.random() * inputList.length)];
      optionsSet.add(randomEntry["ColumnB"]);
    }

    // Shuffle the options
    const options = Array.from(optionsSet);
    shuffleArray(options);

    // Create the question structure
    quizData.push({
      question: question,
      options: options,
      answer: correctAnswer,
    });
  });

  return quizData;
}

// Process user input to create a quiz and redirect to the next page
document.getElementById('generate-json').addEventListener('click', async () => {
  const sheetLink = document.getElementById('sheet-link').value;

  try {
    // Convert Google Sheets data to JSON
    const csvLink = convertToCsvLink(sheetLink);
    const jsonData = await fetchGoogleSheetData(csvLink);

    // Generate quiz data
    const quizData = generateQuiz(jsonData);

    // Save JSON data to localStorage
    localStorage.setItem('quizData', JSON.stringify(quizData));

    // Redirect the user to the Quiz page
    window.location.href = 'selectQuestion.html';
  } catch (error) {
    alert(`Hata: ${error.message}`);
    console.error('Hata:', error);
  }
});
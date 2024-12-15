// Kullanıcıdan alınan linki işleme
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

// Google Sheets'ten CSV verisini alıp JSON formatına çevirme
async function fetchGoogleSheetData(sheetUrl) {
  const response = await fetch(sheetUrl);
  if (!response.ok) {
    throw new Error(`Google Sheets linki hatalı: ${response.statusText}`);
  }
  const csvData = await response.text();

  // CSV'yi JSON formatına dönüştür
  const rows = csvData.split('\n');
  return rows.slice(1).map(row => {
    const [Türkisch, Deutsch] = row.split(',');
    return { Türkisch: Türkisch?.trim(), Deutsch: Deutsch?.trim() };
  });
}

// Listeyi karıştır
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Quiz oluştur
function generateQuiz(inputList) {
  const quizData = [];

  inputList.forEach((map) => {
    const question = map["Türkisch"];
    const correctAnswer = map["Deutsch"];

    // Yanlış cevapları seçmek için kullanılan set
    const optionsSet = new Set();
    optionsSet.add(correctAnswer);

    // Rastgele yanlış seçenekler seçiliyor
    while (optionsSet.size < 4) {
      const randomEntry = inputList[Math.floor(Math.random() * inputList.length)];
      optionsSet.add(randomEntry["Deutsch"]);
    }

    // Şıkları karıştır
    const options = Array.from(optionsSet);
    shuffleArray(options);

    // Soru yapısını oluştur
    quizData.push({
      question: question,
      options: options,
      answer: correctAnswer,
    });
  });

  return quizData;
}

// Kullanıcıdan alınan verileri işleyip quiz oluştur ve sonraki sayfaya yönlendir
document.getElementById('generate-json').addEventListener('click', async () => {
  const sheetLink = document.getElementById('sheet-link').value;

  try {
    // Google Sheets verilerini JSON'a çevir
    const csvLink = convertToCsvLink(sheetLink);
    const jsonData = await fetchGoogleSheetData(csvLink);

    // Quiz verisini oluştur
    const quizData = generateQuiz(jsonData);

    // JSON verisini localStorage'a kaydet
    localStorage.setItem('quizData', JSON.stringify(quizData));

    // Kullanıcıyı Quiz sayfasına yönlendir
    window.location.href = 'selectQuestion.html';
  } catch (error) {
    alert(`Hata: ${error.message}`);
    console.error('Hata:', error);
  }
});

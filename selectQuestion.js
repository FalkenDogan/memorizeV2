let quizData = []; // JSON verisi buraya yüklenecek

// LocalStorage'dan JSON verisini yükle
document.addEventListener('DOMContentLoaded', () => {
  const storedQuizData = localStorage.getItem('quizData'); // sheetToJson.js tarafından oluşturulan JSON verisi

  if (storedQuizData) {
    try {
      quizData = JSON.parse(storedQuizData); // JSON verisini yükle
      document.getElementById('questionCount').innerText = `Soru sayısı: ${quizData.length}`;
      document.getElementById('endQuestion').max = quizData.length; // Maksimum soru sayısını belirle
    } catch (error) {
      console.error('JSON verisi işlenirken bir hata oluştu:', error);
    }
  } else {
    console.error('JSON verisi bulunamadı. Lütfen sheetToJson.js dosyasının doğru çalıştığından emin olun.');
    document.getElementById('questionCount').innerText = 'Soru sayısı: Veri bulunamadı!';
  }
});

// Quiz başlatma işlemi
document.getElementById('startQuiz').addEventListener('click', function () {
  const startInput = document.getElementById('startQuestion').value;
  const endInput = document.getElementById('endQuestion').value;
  const start = parseInt(startInput) - 1; // Kullanıcı girişini dizinlere uyarlama
  const end = parseInt(endInput);

  if (isNaN(start) || isNaN(end) || start < 0 || end > quizData.length || start >= end) {
    alert('Lütfen geçerli bir başlangıç ve bitiş değeri giriniz.');
    return;
  }

  // Seçilen aralığı localStorage'a kaydet
  localStorage.setItem('startQuestion', start);
  localStorage.setItem('endQuestion', end);

  // Seçilen soruları localStorage'a kaydet
  const selectedQuizData = quizData.slice(start, end);
  localStorage.setItem('selectedQuizData', JSON.stringify(selectedQuizData));

  window.location.href = 'askQuestion.html'; // Soru sorma sayfasına yönlendirme
});
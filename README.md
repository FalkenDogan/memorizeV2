# Quiz App - Memorize V2

[Türkçe](#türkçe) | [English](#english)

---

## Türkçe

### 📚 Açıklama

Quiz App, Google Sheets kullanarak kolayca quiz ve flashcard'ler oluşturmanıza yardımcı olan bir web uygulamasıdır. Hiçbir kurulum gerektirmez ve tamamen tarayıcınızda çalışır.

### 🌐 Canlı Demo

Bu uygulama GitHub Pages üzerinde yayınlanmıştır:
**https://falkendogan.github.io/memorizeV2/**

### ✨ Özellikler

- 📝 Google Sheets ile kolay soru-cevap yönetimi
- 🎯 Quiz modu
- 🃏 Flashcard modu
- 📱 Mobil uyumlu tasarım
- 🔒 Verileriniz güvende (hiçbir veri sunucuda saklanmaz)
- 🌍 Türkçe ve İngilizce dil desteği

### 🚀 Kullanım

1. [Canlı uygulamayı](https://falkendogan.github.io/memorizeV2/) açın
2. Google Sheets'te sorularınızı hazırlayın:
   - **A sütunu**: Sorular
   - **B sütunu**: `|` işareti
   - **C sütunu**: Cevaplar
3. Google Sheets linkini kopyalayın
4. Uygulamaya yapıştırın ve "Send" butonuna tıklayın
5. Soru aralığını seçin ve quiz'e başlayın!

📖 Detaylı kullanım kılavuzu için: [Türkçe Kılavuz](usage_tr.html) | [English Guide](usage_en.html)

### 📋 Örnek Google Sheets

[Örnek Sheet'e buradan ulaşabilirsiniz](https://docs.google.com/spreadsheets/d/1Mk5XUzv9n3gf8g-YPPTsg3AoZdYypntan06YpM00-YY/edit?gid=0#gid=0)

### 🛠️ Yerel Olarak Çalıştırma

```bash
# Repository'yi klonlayın
git clone https://github.com/FalkenDogan/memorizeV2.git

# Klasöre girin
cd memorizeV2

# Herhangi bir HTTP sunucusu ile çalıştırın
# Python ile örnek:
python -m http.server 8000

# veya Node.js ile:
npx http-server
```

Ardından tarayıcınızda `http://localhost:8000` adresini açın.

### 📁 Proje Yapısı

```
memorizeV2/
├── index.html              # Ana sayfa
├── quiz.html               # Quiz modu
├── flashcard.html          # Flashcard modu
├── selectQuestion.html     # Soru seçim sayfası
├── styles.css              # Stil dosyası
├── *.js                    # JavaScript dosyaları
├── pics/                   # Görseller
├── usage_tr.html           # Türkçe kullanım kılavuzu
└── usage_en.html           # İngilizce kullanım kılavuzu
```

### 🔒 Gizlilik

- Bu uygulama tamamen tarayıcıda çalışır
- Hiçbir veri sunucuda saklanmaz
- Kişisel bilgilerinize erişilmez
- Google Sheets verileriniz sadece tarayıcınızda işlenir

### 📝 Lisans

Bu proje açık kaynak kodludur.

### 👤 Geliştirici

[FalkenDogan](https://github.com/FalkenDogan)

---

## English

### 📚 Description

Quiz App is a web application that helps you easily create quizzes and flashcards using Google Sheets. It requires no installation and runs entirely in your browser.

### 🌐 Live Demo

This application is hosted on GitHub Pages:
**https://falkendogan.github.io/memorizeV2/**

### ✨ Features

- 📝 Easy question-answer management with Google Sheets
- 🎯 Quiz mode
- 🃏 Flashcard mode
- 📱 Mobile-friendly design
- 🔒 Your data is safe (no data stored on servers)
- 🌍 Turkish and English language support

### 🚀 Usage

1. Open the [live application](https://falkendogan.github.io/memorizeV2/)
2. Prepare your questions in Google Sheets:
   - **Column A**: Questions
   - **Column B**: `|` character
   - **Column C**: Answers
3. Copy the Google Sheets link
4. Paste it into the application and click "Send"
5. Select question range and start your quiz!

📖 For detailed instructions: [Türkçe Kılavuz](usage_tr.html) | [English Guide](usage_en.html)

### 📋 Example Google Sheet

[Access example sheet here](https://docs.google.com/spreadsheets/d/1Mk5XUzv9n3gf8g-YPPTsg3AoZdYypntan06YpM00-YY/edit?gid=0#gid=0)

### 🛠️ Running Locally

```bash
# Clone the repository
git clone https://github.com/FalkenDogan/memorizeV2.git

# Navigate to the folder
cd memorizeV2

# Run with any HTTP server
# Example with Python:
python -m http.server 8000

# or with Node.js:
npx http-server
```

Then open `http://localhost:8000` in your browser.

### 📁 Project Structure

```
memorizeV2/
├── index.html              # Home page
├── quiz.html               # Quiz mode
├── flashcard.html          # Flashcard mode
├── selectQuestion.html     # Question selection page
├── styles.css              # Stylesheet
├── *.js                    # JavaScript files
├── pics/                   # Images
├── usage_tr.html           # Turkish usage guide
└── usage_en.html           # English usage guide
```

### 🔒 Privacy

- This application runs entirely in your browser
- No data is stored on servers
- No access to your personal information
- Your Google Sheets data is processed only in your browser

### 📝 License

This project is open source.

### 👤 Developer

[FalkenDogan](https://github.com/FalkenDogan)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!

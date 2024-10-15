// script.js

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener("DOMContentLoaded", function() {
    console.log("Sayfa yüklendi!");
    
    // Örnek: Hakkımda kısmına tıklandığında mesaj gösterme
    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('click', function() {
        alert("Hakkımda kısmına hoş geldiniz!");
    });
});

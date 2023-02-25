const gallery = document.querySelector('.Gallery-products');
for (var i = 0; i < 12; i++) {
  const img = new Image(200, 200);
  img.onload = function() {
    // Resim yüklendiğinde yapılacak işlemler
    console.log("Resim yüklendi!");
  };
  img.onerror = function() {
    // Resim yüklenemediğinde yapılacak işlemler
    console.log("Resim yüklenemedi!");
  };
  img.src = `https://source.unsplash.com/random/ ${i + 1}`;
  gallery.appendChild(img);
}

 // Butona tıklandığında resimleri değiştirin
 changeBtn.addEventListener('click', changeImages);
      
 // Sayfa yüklendiğinde bir kere resimleri yükleyin
 changeImages();
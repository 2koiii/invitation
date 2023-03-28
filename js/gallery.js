// Gallery Page
document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () =>{
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
        console.log(document.querySelector('.popup-image img').src)
    }
  });
  
  document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
  }
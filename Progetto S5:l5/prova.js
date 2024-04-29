window.addEventListener('scroll', function() {
    var header = document.getElementById('firstSectionHeader');
    var arrivo = document.getElementById('arrivo');
    
   
    var arrivoPosition = arrivo.getBoundingClientRect().top;
    
    
    if (arrivoPosition < 0) {
      header.classList.add('white');
    } else {
      header.classList.remove('white');
    }
  });

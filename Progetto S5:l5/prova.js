window.addEventListener('scroll', function() {
    var header = document.getElementById('firstSectionHeader');
    var arrivo = document.getElementById('arrivo');
    
   
    var arrivoPosition = arrivo.getBoundingClientRect().top;
    
    // Se la posizione della yellow line è inferiore a 0, aggiungi la classe 'white' al firstsectionheader, altrimenti rimuovila
    if (arrivoPosition < 0) {
      header.classList.add('white');
    } else {
      header.classList.remove('white');
    }
  });
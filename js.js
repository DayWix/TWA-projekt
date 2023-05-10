
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function() {
  dropdown.classList.toggle('clicked');
});


window.addEventListener('click', function(event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('clicked');
  }
});

const zavody = [
    { nazev: "Velká cena Bahrainu", datum: "2023-03-05" },
    { nazev: "Velká cena Saudské Arábie", datum: "2023-03-19" },
    { nazev: "Velká cena Austrálie", datum: "2023-04-02" },
    { nazev: "Velká cena Ázerbájdžánu", datum: "2023-04-30" },
    { nazev: "Velká cena Miami", datum: "2023-05-07" },
    { nazev: "Velká cena Emilia-Romagna", datum: "2023-05-21" },
    { nazev: "Velká cena Monaka", datum: "2023-05-28" },
    { nazev: "Velká cena Španělska", datum: "2023-06-04" },
    { nazev: "Velká cena Kanady", datum: "2023-06-18" },
    { nazev: "Velká cena Rakouska", datum: "2023-07-02" },
    { nazev: "Velká cena Velké Británie", datum: "2023-07-09" },
    { nazev: "Velká cena Maďarska", datum: "2023-07-23" },
    { nazev: "Velká cena Belgie", datum: "2023-07-30" },
    { nazev: "Velká cena Nizozemí", datum: "2023-08-27" },
    { nazev: "Velká cena Itálie", datum: "2023-09-03" },
    { nazev: "Velká cena Singapuru", datum: "2023-09-17" },
    { nazev: "Velká cena Japonska", datum: "2023-19-24" },
    { nazev: "Velká cena Qataru", datum: "2023-10-08" },
    { nazev: "Velká cena USA", datum: "2023-10-22" },
    { nazev: "Velká cena Mexika", datum: "2023-10-29" },
    { nazev: "Velká cena Brazílie", datum: "2023-11-05" },    
    { nazev: "Velká cena Las Vegas ", datum: "2023-11-18" },
    { nazev: "Velká cena Abu Dhabi ", datum: "2023-11-26" },

    
  ];
  

  const nejblizsiZavod = document.getElementById("nejblizsi-zavod");
  
  
  function najdiNejblizsiZavod() {
    
    const dnes = new Date();
  
   
    const zavodyDates = zavody.map((zavod) => new Date(zavod.datum));
  
   
    const nejblizsiDatum = zavodyDates.reduce((nejblizsi, datum) => {
      const rozdil = datum - dnes;
      return (rozdil > 0 && rozdil < nejblizsi) ? rozdil : nejblizsi;
    }, Infinity);
  
    
    const index = zavodyDates.findIndex((datum) => datum - dnes === nejblizsiDatum);
  
    
    const formatter = new Intl.DateTimeFormat('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });
  const nejblizsi = zavody[index];
  const formatovaneDatum = formatter.format(new Date(nejblizsi.datum));
  nejblizsiZavod.innerHTML = `Nejbližší konaný závod je: <br> ${nejblizsi.nazev} konaná dne ${formatovaneDatum}.`; }
  
  
  najdiNejblizsiZavod();
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

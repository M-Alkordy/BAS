// start latest project

let sliderf = document.querySelector('.FQ-sliderf');
let slidesfq = document.querySelectorAll('.slide-FQ');


let activeSlide = 0;

function showSlide(n) {
  if (n < 0) {
    n = 1;
  } else if (n >= slidesfq.length) {
    n = 0;
  }
  
  for (var i = 0; i < slidesfq.length; i++) {
    if (i === n) {
      slidesfq[i].classList.add('active');
    } else {
      slidesfq[i].classList.remove('active');
    }
  }
  
  activeSlide = n;
}

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

  button1.addEventListener("click", function() {
    activeSlide = 0
    showSlide(activeSlide);
    activeBtn()
  });

  button2.addEventListener("click", () => {
    activeSlide = 1
    showSlide(activeSlide);
    activeBtn2()
  });

  function activeBtn() {
      button1.classList.add("btn-activet");
      button2.classList.remove("btn-activet");
    }

  function activeBtn2() {
      button1.classList.remove("btn-activet");
      button2.classList.add("btn-activet");
    }

    setInterval(function() 
    {
      activeSlide = 0
      showSlide(activeSlide);
      activeBtn()
    }, 4000
    );
    setInterval(function() 
    {
      activeSlide = 1
      showSlide(activeSlide);
      activeBtn2()
    }, 8000
    );

    // end latest project
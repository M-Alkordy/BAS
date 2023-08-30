const reviewSlider = document.querySelector(".JI_reviews .JI_reviews_slider")

const myCards = document.querySelectorAll(".JI_reviews .JI_reviews_slider .JI_reviews_slider_card")



let c = 0

let myInt = setInterval(() => {
    if (c > 2) {
        c = 0
    }
    myCards[c].click();
    c++
   
}, 3000);


for (let i = 0; i < myCards.length; i++) {
    myCards[i].addEventListener("click" , () => {
        // console.log(`myCards${i} is click`)
        for (let j = 0; j < myCards.length; j++) {
            myCards.forEach(card => {
                card.classList.remove("active");
                card.classList.remove("next_card");
                card.classList.remove("prev_card");
            });
            if (i == 0) {
                myCards[2].setAttribute("class" , "JI_reviews_slider_card prev_card")
                myCards[0].setAttribute("class" , "JI_reviews_slider_card active")
                myCards[1].setAttribute("class" , "JI_reviews_slider_card next_card")
            }
            else if (i == 1 ) {
                myCards[2].setAttribute("class" , "JI_reviews_slider_card next_card")
                myCards[1].setAttribute("class" , "JI_reviews_slider_card active")
                myCards[0].setAttribute("class" , "JI_reviews_slider_card prev_card")
            }  
            else if (i == 2) {
                myCards[2].setAttribute("class" , "JI_reviews_slider_card active")
                myCards[1].setAttribute("class" , "JI_reviews_slider_card prev_card")
                myCards[0].setAttribute("class" , "JI_reviews_slider_card next_card")
            }
            
        }
    } )
}




let prevPoint ;
let Differ ;
let DifferArray = [];


const startDragging = () => {
    clearInterval(myInt);
    c--;
    if (c < 0) {
        c = 0;
    }
}

const dragging = (e) => {
    DifferArray = [];
    prevPoint = e.pageX || e.touches[0].pageX; 
}
const draggingMove = (e) => {
    Differ = (e.pageX || e.touches[0].pageX) - prevPoint ;
    DifferArray.push(Differ);   
}

const sliding = () => {
    if (DifferArray[0] < DifferArray[DifferArray.length-1]) {
        console.log("smaller")
        c-- ;
        console.log(c)
        if (c < 0) {
            c = 2
        }
        myCards[c].click();
    }
    else  if (DifferArray[0] > DifferArray[DifferArray.length-1]) {
        console.log("bigger")
        c++ ;
        if (c > 2) {
            c = 0 ;
        }
        myCards[c].click();
    }
}

reviewSlider.addEventListener("mouseenter" , startDragging)

reviewSlider.addEventListener("mousedown" , dragging)
reviewSlider.addEventListener("touchstart" , ()=> {
    startDragging
    dragging;
})


reviewSlider.addEventListener("mousemove" , draggingMove)
reviewSlider.addEventListener("touchmove" , draggingMove)


reviewSlider.addEventListener("mouseup", sliding );
reviewSlider.addEventListener("touchend", sliding );



reviewSlider.addEventListener("mouseleave" , () => {
    // console.log("mouse leave")
     myInt = setInterval(() => {
         if (c > 2) {
             c = 0
            }
        myCards[c].click();
        c++
       
    }, 3000);
})

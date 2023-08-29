const reviewSlider = document.querySelector(".JI_reviews .JI_reviews_slider")

const myCards = document.querySelectorAll(".JI_reviews .JI_reviews_slider .JI_reviews_slider_card")



let c = 0

let myInt = setInterval(() => {
    if (c > 2) {
        c = 0
    }
    myCards[c].click();
    c++
   
}, 1000);


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
// let DifferArray = [];
let DifferArray = [];




reviewSlider.addEventListener("touchstart" , (e) => {
    console.log("touch start")
    DifferArray = [];
    prevPoint = e.touches[0].pageX;
    clearInterval(myInt);
})

reviewSlider.addEventListener("touchmove" , (e) => {
    // console.log("touchmove")
    Differ = prevPoint - e.changedTouches[e.changedTouches.length-1].pageX;
    DifferArray.push(Differ);   
})

reviewSlider.addEventListener("touchend" , () => {
    console.log("toushed end")
    if (DifferArray[0] > DifferArray[DifferArray.length-1]) {
        c-- ;
        if (c < 0) {
            c = 2
        }
        myCards[c].click();
    }
    else {
        c++ ;
        if (c > 2) {
            c = 0 ;
        }
        myCards[c].click();
    }

})



reviewSlider.addEventListener("mouseenter" , (e) => {
    clearInterval(myInt);
    console.log("mouse enter");
})


reviewSlider.addEventListener("mousedown" , (e) => {
    console.log("mouse down")
    DifferArray = [];
    prevPoint = e.pageX;
})

reviewSlider.addEventListener("mousemove" , (e) => {
    Differ = prevPoint - e.pageX;
    DifferArray.push(Differ);   
})

reviewSlider.addEventListener("mouseup" , (e) => {
    console.log("mouse up")
    if (DifferArray[0] > DifferArray[DifferArray.length-1]) {
        console.log("equal")
        c-- ;
        if (c < 0) {
            c = 2
        }
        myCards[c].click();
    }
    else {
        c++ ;
        if (c > 2) {
            c = 0 ;
        }
        myCards[c].click();
    }
})


reviewSlider.addEventListener("mouseleave" , () => {
    console.log("mouse leave")
     myInt = setInterval(() => {
         if (c > 2) {
             c = 0
            }
        myCards[c].click();
        c++
       
    }, 1000);
})

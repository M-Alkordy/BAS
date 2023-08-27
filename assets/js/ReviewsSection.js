const reviewSlider = document.querySelector(".JI_reviews .JI_reviews_slider")

const myCards = document.querySelectorAll(".JI_reviews .JI_reviews_slider .JI_reviews_slider_card")



let c = 0

// let myInt = setInterval(() => {
//     myCards[c].click();
//     c++
//     if (c > 2) {
//         c = 0
//     }
// }, 5000);


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



// const sliding = (counter) => {
//     if (counter > 2) {
//         counter = 0 ;
//     } else if (counter < 0){
//         counter = 2 ;
//     } 
//     console.log("counter is " , c)

//     myCards[counter].click()
// }


let prevPoint ;
let Differ ;
let DifferArray = [];

reviewSlider.addEventListener("touchstart" , (e) => {
    DifferArray = []
    prevPoint = e.touches[0].pageX;

})
reviewSlider.addEventListener("touchmove" , (e) => {
    Differ = prevPoint - e.changedTouches[e.changedTouches.length-1].pageX;
    DifferArray.push(Differ);   
})


reviewSlider.addEventListener("touchend" , () => {
    if (DifferArray[0] > DifferArray[DifferArray.length-1]) {
        c-- ;
        if (c < 0) {
            c = 2
        }
        console.log("counter after decrease" , c) 
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



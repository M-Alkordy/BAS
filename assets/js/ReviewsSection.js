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


function startDragging () {
    clearInterval(myInt);
    if (c < 0) {
        c = 0;
    }
}

function dragging (e) {
    DifferArray = [];
    prevPoint = e.pageX || e.touches[0].pageX;  

}

function draggingOnTouch (e) {
    DifferArray = [];
    prevPoint = e.touches[0].pageX;  
    console.log("prevPoint" , prevPoint)
    console.log("touccccccccccccccccccccccccccccccccccccch start")
}

function draggingMove (e) {
    // Differ = prevPoint - (e.pageX || e.touches[e.touches.length-1].pageX);
    Differ = prevPoint - (e.pageX || e.touches[0].pageX);
    DifferArray.push(Differ);   
}

function draggingMoveOnTouch (e) {
    Differ = prevPoint - e.touches[e.touches.length-1].pageX;
    DifferArray.push(Differ);   
}

const sliding = () => {
    // console.log("DifferArray[0]" , DifferArray[0])
    // console.log(" DifferArray[DifferArray.length-1]" ,  DifferArray[DifferArray.length-1])
    if (DifferArray[0] > DifferArray[DifferArray.length-1]) {
        console.log("bigger")
        console.log("counter before " ,c )
        // reviewSlider.click();
        c--;
        console.log("counter after " ,c )
        // playSlider(c);
        if (c < 0) {
            c = 2
        }
        myCards[c].click();
    }  
    else {
        console.log("counter before " ,c )
        // reviewSlider.click();
        c++;
        console.log("counter after " ,c )
        console.log("smaller")
        // playSlider(c);
        if (c > 2) {
            c = 0 ;
        }
        myCards[c].click();

    }
}

reviewSlider.addEventListener("mouseenter" , () => {
    console.log("mouse enter")
    startDragging();
})
reviewSlider.addEventListener("mousedown" , (e) => {
    dragging(e);
    console.log("mouse down")
})

reviewSlider.addEventListener("touchstart" , (e) => {
    console.log("touch start")
    startDragging();
    dragging(e);
})


reviewSlider.addEventListener("mousemove" , (e) => {
    draggingMove(e);
})

reviewSlider.addEventListener("touchmove" , (e) => {
    draggingMove(e);
})

reviewSlider.addEventListener("mouseup", sliding);
reviewSlider.addEventListener("touchend", sliding);



reviewSlider.addEventListener("mouseleave" , () => {
    console.log("mouse leave")
     myInt = setInterval(() => {
         if (c > 2) {
             c = 0
            }
            myCards[c].click();
            c++
       
    }, 3000);
})

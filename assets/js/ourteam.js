const myIndeicatore = document.querySelectorAll(".JI_ourTeam .JI_ourTeam_slider_indicators .JI_ourTeam_slider_indicators_span");
const ourTeamSlider = document.querySelector(".JI_ourTeam .JI_ourTeam_slider");
const cards = document.querySelectorAll(".JI_ourTeam .JI_ourTeam_slider_card")



let rootElement = document.querySelector(':root');
let counter = 0 ;
let myGap ;




const autoPlay = () => {
    counter++;
    if (counter == 4 ) {
        counter = 0 ;
    }
    myIndeicatore[counter].click()
}




let myInterval = setInterval(autoPlay, 2000);

ourTeamSlider.addEventListener("mouseenter" , () => {
    clearInterval(myInterval);
    console.log(":mouse enter")
})
ourTeamSlider.addEventListener("mouseleave" , () => {
    myInterval = setInterval(autoPlay, 2000);
})

let prevPageX ;
let positionDiffer ;
let positionDifferArray = [];

ourTeamSlider.addEventListener("touchstart" , (e) => {
    positionDifferArray = []
    prevPageX = e.touches[0].pageX;
    console.log("start touch")
    clearInterval(myInterval);
})
ourTeamSlider.addEventListener("touchmove" , (e) => {
    positionDiffer = prevPageX - e.changedTouches[e.changedTouches.length-1].pageX;
    positionDifferArray.push(positionDiffer)    
})


const playOnTouch = (counter) => {
    if (counter > 3) {
        counter = 3 ;
    } else if (counter < 0){
        counter = 0 ;
    } 
    myIndeicatore[counter].click()
}

ourTeamSlider.addEventListener("touchend" , () => {
    console.log("end touch")
    if (positionDifferArray[0] > positionDifferArray[positionDifferArray.length-1]) {
        counter -- ;
        playOnTouch(counter)
    }
    else {
        counter ++ ;
        playOnTouch(counter)
    }

})


myIndeicatore.forEach((indicator,index) => {
    indicator.addEventListener("click" , (e)=> {
        counter = index;
        if (document.body.clientWidth  < 400) {
            myGap = ( parseFloat(getComputedStyle(rootElement).getPropertyValue('--gap'))*document.body.clientWidth)/100;
        }
        else {
            myGap = ( parseFloat(getComputedStyle(rootElement).getPropertyValue('--gap'))*document.body.clientWidth)/200;
        }
        let myStep= (indicator.dataset.id)*((cards[index].clientWidth)+myGap)
        ourTeamSlider.style.transform = `translateX(-${myStep}px)`;
        myIndeicatore.forEach((element) => {
        element.classList.remove("active")
    });
    e.target.classList.add("active");
    // clearInterval(myInterval);
    // myInterval = setInterval(autoPlay, 2000);

    }
    
    )
});


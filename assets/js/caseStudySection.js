let myLis = document.querySelectorAll(".JI_caseStudy_Section .JI_caseStudy_Section_categories .JI_caseStudy_Section_categories_li")

let firstLi = document.querySelector(".JI_caseStudy_Section .JI_caseStudy_Section_categories .JI_caseStudy_Section_categories_first_li")

let myCardsContainer = document.querySelector(".JI_caseStudy_Section_cards_container");

let myIndicatorsUl = document.querySelector(".JI_caseStudy_Section__indicators_ul");


firstLi.addEventListener("click" , ()=> {
     firstLi.classList.toggle("active")
    myLis.forEach(li => {
        li.classList.toggle("appear")
    });
    
})

const informember = [
    {
      id:"0",
      image: "caseStudy.png",
      position:"Supplier fraud0",
      cat: "technology"
    },
    {
      id:"1",
      image: "caseStudy.png",
      position:"Supplier fraud1",
      cat: "technology"
    },
    {
      id:"2",
      image: "caseStudy.png",
      position:"Supplier fraud2",
      cat: "technology"
    },
    {
      id:"3",
      image: "caseStudy.png",
      position:"Supplier fraud3",
      cat: "technology"
    },
    {
      id:"4",
      image: "caseStudy.png",
      position:"Supplier fraud4",
      cat: "technology"
    },
    {
      id:"5",
      image: "caseStudy.png",
      position:"Supplier fraud5",
      cat: "technology"
    },
    {
      id:"6",
      image: "caseStudy.png",
      position:"Supplier fraud6",
      cat: "technology"
    },
    {
      id:"7",
      image: "caseStudy.png",
      position:"Supplier fraud7",
      cat: "technology"
    },
    {
      id:"8",
      image: "caseStudy.png",
      position:"Supplier fraud8",
      cat: "technology"
    },
    {
      id:"9",
      image: "caseStudy.png",
      position:"Supplier fraud9",
      cat: "technology"
    },
    {
      id:"10",
      image: "caseStudy.png",
      position:"Supplier fraud10",
      cat: "technology"
    },
    {
      id:"11",
      image: "caseStudy.png",
      position:"Supplier fraud11",
      cat: "technology"
    },
    {
      id:"12",
      image: "caseStudy.png",
      position:"Supplier fraud12",
      cat: "technology"
    },
    {
      id:"13",
      image: "caseStudy.png",
      position:"Supplier fraud13",
      cat: "technology"
    },
    {
      id:"14",
      image: "caseStudy.png",
      position:"Supplier fraud14",
      cat: "technology"
    },
    {
      id:"15",
      image: "caseStudy.png",
      position:"Supplier fraud15",
      cat: "technology"
    },
    {
      id:"16",
      image: "caseStudy.png",
      position:"Supplier fraud16",
      cat: "technology"
    },
    {
      id:"17",
      image: "caseStudy.png",
      position:"Supplier fraud17",
      cat: "technology"
    },
    {
      id:"18",
      image: "caseStudy.png",
      position:"Supplier fraud18",
      cat: "technology"
    },
    {
      id:"19",
      image: "caseStudy.png",
      position:"Supplier fraud19",
      cat: "technology"
    },
    {
      id:"20",
      image: "caseStudy.png",
      position:"Supplier fraud20",
      cat: "technology"
    },
    {
      id:"21",
      image: "caseStudy.png",
      position:"Supplier fraud21",
      cat: "technology"
    },
    {
      id:"22",
      image: "caseStudy.png",
      position:"Supplier fraud22",
      cat: "commercial"
    },
    {
      id:"23",
      image: "caseStudy.png",
      position:"Supplier fraud23",
      cat: "commercial"
    },
    {
      id:"24",
      image: "caseStudy.png",
      position:"Supplier fraud24",
      cat: "commercial"
    },
    {
      id:"25",
      image: "caseStudy.png",
      position:"Supplier fraud25",
      cat: "commercial"
    },
    {
      id:"26",
      image: "caseStudy.png",
      position:"Supplier fraud26",
      cat: "commercial"
    },
    {
      id:"27",
      image: "caseStudy.png",
      position:"Supplier fraud27",
      cat: "commercial"
    },
    {
      id:"28",
      image: "caseStudy.png",
      position:"Supplier fraud28",
      cat: "commercial"
    },
    {
      id:"29",
      image: "caseStudy.png",
      position:"Supplier fraud29",
      cat: "commercial"
    },
    {
      id:"30",
      image: "caseStudy.png",
      position:"Supplier fraud30",
      cat: "commercial"
    },
    {
      id:"31",
      image: "caseStudy.png",
      position:"Supplier fraud31",
      cat: "commercial"
    },
    {
      id:"32",
      image: "caseStudy.png",
      position:"Supplier fraud32",
      cat: "commercial"
    },
    {
      id:"33",
      image: "caseStudy.png",
      position:"Supplier fraud33",
      cat: "commercial"
    },
    {
      id:"34",
      image: "caseStudy.png",
      position:"Supplier fraud34",
      cat: "commercial"
    },
    {
      id:"35",
      image: "caseStudy.png",
      position:"Supplier fraud35",
      cat: "commercial"
    },
    {
      id:"36",
      image: "caseStudy.png",
      position:"Supplier fraud36",
      cat: "commercial"
    },
    {
      id:"37",
      image: "caseStudy.png",
      position:"Supplier fraud37",
      cat: "commercial"
    },
    {
      id:"38",
      image: "caseStudy.png",
      position:"Supplier fraud38",
      cat: "commercial"
    },
    {
      id:"39",
      image: "caseStudy.png",
      position:"Supplier fraud39",
      cat: "commercial"
    },
    {
      id:"40",
      image: "caseStudy.png",
      position:"Supplier fraud40",
      cat: "commercial"
    },
    {
      id:"41",
      image: "caseStudy.png",
      position:"Supplier fraud41",
      cat: "commercial"
    },
    {
      id:"42",
      image: "caseStudy.png",
      position:"Supplier fraud42",
      cat: "commercial"
    },
    {
      id:"43",
      image: "caseStudy.png",
      position:"Supplier fraud43",
      cat: "industrial"
    },
    {
      id:"44",
      image: "caseStudy.png",
      position:"Supplier fraud44",
      cat: "industrial"
    },
    {
      id:"45",
      image: "caseStudy.png",
      position:"Supplier fraud45",
      cat: "industrial"
    },
    {
      id:"46",
      image: "caseStudy.png",
      position:"Supplier fraud46",
      cat: "industrial"
    },
    {
      id:"47",
      image: "caseStudy.png",
      position:"Supplier fraud47",
      cat: "industrial"
    },
    {
      id:"48",
      image: "caseStudy.png",
      position:"Supplier fraud48",
      cat: "industrial"
    },
    {
      id:"49",
      image: "caseStudy.png",
      position:"Supplier fraud49",
      cat: "industrial"
    },
    {
      id:"50",
      image: "caseStudy.png",
      position:"Supplier fraud50",
      cat: "industrial"
    },
    {
      id:"51",
      image: "caseStudy.png",
      position:"Supplier fraud51",
      cat: "industrial"
    },
    {
      id:"52",
      image: "caseStudy.png",
      position:"Supplier fraud52",
      cat: "industrial"
    },
    {
      id:"53",
      image: "caseStudy.png",
      position:"Supplier fraud53",
      cat: "industrial"
    },
    {
      id:"54",
      image: "caseStudy.png",
      position:"Supplier fraud54",
      cat: "industrial"
    },
    {
      id:"55",
      image: "caseStudy.png",
      position:"Supplier fraud55",
      cat: "industrial"
    },
    {
      id:"56",
      image: "caseStudy.png",
      position:"Supplier fraud56",
      cat: "industrial"
    },
    {
      id:"57",
      image: "caseStudy.png",
      position:"Supplier fraud57",
      cat: "industrial"
    },
    {
      id:"58",
      image: "caseStudy.png",
      position:"Supplier fraud58",
      cat: "industrial"
    },
    {
      id:"59",
      image: "caseStudy.png",
      position:"Supplier fraud59",
      cat: "industrial"
    },
    {
      id:"60",
      image: "caseStudy.png",
      position:"Supplier fraud60",
      cat: "industrial"
    },
]

let counterStart = 0 ; 
let counterEnd = 2;
let totalPages = Math.ceil(informember.length/3);
let page = 1 ;
let myFilteredItem = informember;
// console.log(myFilteredItem)
// let mynewArray = myFilteredItem ;
// console.log("mynewArray " , mynewArray )

function fetchData() {
    showData(informember,counterStart);
    showIndicators (totalPages,1,informember)


   
    ;
}






function showData(array,start) {
    myCardsContainer.innerHTML = null;
    console.log(array)
    for (let i = start; i <= counterEnd; i++) {
        myCardsContainer.innerHTML += `
        <div class="JI_caseStudy_Section_card all ${array[i].cat}">
        <div class="JI_caseStudy_Section_card_inner">
          <div class="JI_caseStudy_Section_card_front">
            <div class="JI_caseStudy_Section_card_info">
              <div class="JI_caseStudy_Section_card_img">
                <img  src="./assets/img/${array[i].image}" alt="">
              </div>
              <h1 class="JI_caseStudy_Section_card_h1">louis vuitton</h1>
              </div>
              <div class="JI_caseStudy_Section_card_details">
                  <span class="JI_caseStudy_Section_card_cat">${array[i].cat}</span>
                  <span class="JI_caseStudy_Section_card_sup">${array[i].position}</span>
              </div>
          </div>
          <div class="JI_caseStudy_Section_card_back">
            <h1 class="JI_caseStudy_Section_card_back_h1">louis vuitton</h1>
            <p class="JI_caseStudy_Section_card_back_p">We solved this problem by hiring someone who keeps track of all the accounts with constant auditing.. <a href="" class="JI_caseStudy_Section_card_back_a">read more</a></p>
            <img class="JI_caseStudy_Section_card_back_img" src="./assets/img/heroCourner.png" alt="white corner photo">
          </div>
        </div>
      </div>
        `;
    }
}


function showIndicators (total,pageNumber) {
    let liTag = "";
    let prevPage = pageNumber -1 ;
    let nextPage = pageNumber +1 ;
    let activeLi ;

    if (pageNumber > 1 ) {
            liTag += `<li class="JI_caseStudy_Section__indicators_ul_i" onclick="showIndicators(${total},${pageNumber-1});editCounterByArrow(-3)"><i class="fas fa-angle-left"></i></li>`
    }
    if (pageNumber > 2 ) {
        liTag += `<li class="JI_caseStudy_Section__indicators_ul_numb" onclick="showIndicators(${total},1);editCounterByNum(1)">1</li>`
        if (pageNumber > 3) { 
            liTag += `<li class="JI_caseStudy_Section__indicators_ul_dots">...</li>`
        }
    }


    if (pageNumber == total ) {
        prevPage = prevPage -2 ;
    } else if (pageNumber == total - 1 ) {
        prevPage = prevPage -1 ;
    }

    if (pageNumber == 1 ) {
        nextPage = nextPage +2 ;
    } else if (pageNumber == 2 ) {
        nextPage = nextPage +1 ;
    }


    for (let pageLength = prevPage; pageLength <= nextPage ; pageLength++) {
        if (pageLength > total ) {
            continue
        }
        if (pageLength == 0) {
            pageLength = pageLength +1 ;
        }
        if (pageNumber == pageLength ) {
            activeLi = "active";
        } else {
            activeLi = ""
        }
        liTag += `<li class="JI_caseStudy_Section__indicators_ul_numb ${activeLi}" onclick="showIndicators(${total},${pageLength});editCounterByNum(${pageLength})">${pageLength}</li>`
    }


    if (pageNumber < totalPages -1 ) {
        if (pageNumber < totalPages -2) {
            liTag += `<li class="JI_caseStudy_Section__indicators_ul_dots">...</li>`
        }
        liTag += `<li class="JI_caseStudy_Section__indicators_ul_numb" onclick="showIndicators(${total},${totalPages});editCounterByNum(${totalPages})">${totalPages}</li>`
    }


    if (pageNumber < total ) {
        liTag += `<li class="JI_caseStudy_Section__indicators_ul_i" onclick="showIndicators(${total},${pageNumber+1});editCounterByArrow(3)"><i class="fas fa-angle-right"></i></li>`
    } 
    
    myIndicatorsUl.innerHTML = liTag;
}

function editCounterByNum (num) {
    counterStart = (num-1)*3;
    counterEnd = counterStart + 2;
    if (counterEnd > myFilteredItem.length ) {
        counterEnd = myFilteredItem.length -1
    } 
    // console.log(counterStart)
    showData(myFilteredItem , counterStart)
}
function editCounterByArrow (n) {
    counterStart = counterStart + n
    counterEnd = counterStart + 2;
    if (counterEnd > myFilteredItem.length ) {
        counterEnd = myFilteredItem.length -1
    } 
    showData(myFilteredItem , counterStart)
    // showData(array , counterStart)
}

fetchData();


myLis.forEach(li => {
    li.addEventListener("click" , ()=> {
        myFilteredItem = [];
        myLis.forEach(li => {
            li.classList.remove("active")
        });
        informember.forEach((item) => {
            if (item.cat.includes(li.dataset.cat)) {
              myFilteredItem.push(item);
            } else if (li.dataset.cat === "all") {
              myFilteredItem = informember;
            }
          });
          counterStart = 0 ;
          counterEnd = counterStart +2 ;
        li.classList.add("active");
        myCardsContainer.innerHTML = null;
        console.log("counter is" , counterStart)
        showData(myFilteredItem,counterStart)
        totalPages = Math.ceil(myFilteredItem.length / 3);
        showIndicators(totalPages,1);
        // console.log(myFilteredItem)
    })
});
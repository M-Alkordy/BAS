const myFaqCardsHeaders =  document.querySelectorAll(".JI_faq .JI_faq_container .JI_faq_card .JI_faq_card_head");
myFaqCardsHeaders.forEach(header => {
    header.addEventListener("click" , () => {
        header.classList.toggle("active")
        const cardDesc = header.nextElementSibling;
        if (header.classList.contains("active")) {
            cardDesc.style.maxHeight = `${cardDesc.scrollHeight}px` 
        }
        else {
            cardDesc.style.maxHeight = 0; 
        }
    })
});
let contactHeader = document.querySelector(".JI_contact .JI_contact_form_accordion_head");
let serviceContainer = document.querySelector(".JI_contact .JI_contact_form_accordion_desc")
let serviceContainerChildren = document.querySelectorAll(".JI_contact .JI_contact_form_accordion_desc_p")
contactHeader.addEventListener("click" , ( )=> {
    console.log("helll")
    contactHeader.classList.toggle("active")
    if (contactHeader.classList.contains("active")) {
        serviceContainer.style.maxHeight = `${serviceContainer.scrollHeight}px` 
    }
    else {
        serviceContainer.style.maxHeight = 0; 
    }
    // serviceContainer.style.height = "max-height"
})

serviceContainerChildren.forEach( child => {
    child.addEventListener("click" , () => {
        contactHeader.innerHTML = child.innerHTML;
        contactHeader.classList.remove("active")
        serviceContainer.style.maxHeight = 0; 

    })
    
});
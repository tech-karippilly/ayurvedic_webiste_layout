let bookNowBtn = document.getElementById('book-now-btn')

// let bookConsultationBtn = document.getElementById('bookConsultationForm')

// console.log(bookConsultationBtn);
// // bookConsultationBtn.addEventListener('submit', bookConsultation);



// function bookConsultation(event){
//     console.log('booking Consultation');
//     // alert('booking Consultation')
// }


let modelButton = document.getElementById('model-button')
let downArrowContainer = document.getElementById('down-arrow')

modelButton.addEventListener('click',scrollToSection)

function handleScroll(event) {
    let scrollYValue = window.scrollY;
    console.log(scrollYValue);

    if (scrollYValue > 10){
        downArrowContainer.style="display:none"
    }else{
        downArrowContainer.style="display:flex"
    }

}



function scrollToSection(event){
    
    // event.preventDefault();
    // let section = document.getElementById('form-section');
    // if (section) {
    //     section.scrollIntoView({ behavior: 'smooth' });
    //   }
}
function downArrowClick(){
    window.scrollBy(0,500)
   
}

downArrowContainer.addEventListener('click',downArrowClick)



window.addEventListener('scroll', handleScroll)
let bookNowBtn = document.getElementById('book-now-btn')

// let bookConsultationBtn = document.getElementById('bookConsultationForm')

// console.log(bookConsultationBtn);
// // bookConsultationBtn.addEventListener('submit', bookConsultation);



// function bookConsultation(event){
//     console.log('booking Consultation');
//     // alert('booking Consultation')
// }


let modelButton = document.getElementById('model-button')

modelButton.addEventListener('click',scrollToSection)

function handleScroll(event) {
    let scrollYValue = window.scrollY;
    console.log(scrollYValue);

}

function scrollToSection(event){

    window.scrollTo(0,4017.17)
    // event.preventDefault();
    // let section = document.getElementById('form-section');
    // if (section) {
    //     section.scrollIntoView({ behavior: 'smooth' });
    //   }
}



window.addEventListener('scroll', handleScroll)
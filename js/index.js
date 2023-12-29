let bookNowBtn = document.getElementById('book-now-btn')

let downArrowContainer = document.getElementById('down-arrow')

// modelButton.addEventListener('click',scrollToSection)

function handleScroll(event) {
    let scrollYValue = window.scrollY;
    console.log(scrollYValue);

    if (scrollYValue > 10){
        downArrowContainer.style="display:none"
    }else{
        downArrowContainer.style="display:flex"
    }

}




function downArrowClick(){
    window.scrollBy(0,500)
   
}

downArrowContainer.addEventListener('click',downArrowClick)



window.addEventListener('scroll', handleScroll)
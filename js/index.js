let bookNowBtn = document.getElementById('book-now-btn')

document.getElementById('bookConsultationForm').addEventListener('submit', bookConsultation);



function bookConsultation(event){

    alert('booking Consultation')
}

function bookNow(){
    alert('model show')
}


bookNowBtn.addEventListener('click',bookNow)

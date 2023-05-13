let navbar = document.querySelector('.navbar')

let btn = document.querySelector('.btn1')
let inputNumber = document.getElementById("inputNumber")
let subject = document.getElementById('subject')
let email = document.getElementById('email')
let inputName = document.getElementById('inputName')
let message = document.getElementById('message')


let inputNumberP = document.getElementById("number")
let subjectP = document.getElementById('subjectP')
let emailP = document.getElementById('emailP')
let inputNameP = document.getElementById('name')
let messageP = document.getElementById('messageP')

let btn2 = document.querySelector('.btn2')
let place = document.getElementById('place')
let date = document.getElementById('date')
let time = document.getElementById('time')

btn2.onclick=(e) => {
    e.preventDefault();
       const obj={
           Place:place.value,
           Date: date.value,
           Time: time.value,
   
       }
       console.log(obj)
}


btn.onclick=(e) => {
 e.preventDefault();
    // const obj={
    //     Name:inputName.value,
    //     Email:email.value,
    //     number:+inputNumber.value,
    //     Subject: subject.value,

    // }
    // console.log(obj)

    inputNameP.textContent = ` User name: ${inputName.value}`
    emailP.textContent =       `Email: ${email.value}`
    inputNumberP.textContent = `Number: ${+inputNumber.value}`
    subjectP.textContent =     `Subject: ${subject.value}`
    messageP.textContent =     `Feedback: ${message.value}`

     
}



document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

 

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


// Swiper

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    parallax: true,

    autoplay: {
        delay: 1500,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// Auto text

function autoText() {
    const txt = 'Кухни в Нижневартовске от производителя - недорого и надёжно!'
    const speed = 100
    let i = 0

    const htmlText = document.getElementById("demo")

    function typeWriter() {
        if (i < txt.length) {
            if (i >= 41) {
                htmlText.insertAdjacentHTML('beforeend', `<span style="color:FBD846">${txt[i]}</span>`)
            } else {
                htmlText.textContent += txt.charAt(i)
            }
            i++
            setTimeout(typeWriter, speed)
        }
    }

    htmlText.textContent = ''

    typeWriter()
}

setInterval(autoText, 15000)
autoText()





// Swiper

const quizSwiper = new Swiper(".mySwiper-quiz", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    on: {
        slideChange: function () {
            if (this.activeIndex === 0) {
                document.querySelector('.swiper-button-next__quiz').classList.remove('hidden-quiz__btn');
                document.querySelector('.swiper-button-prev__quiz').classList.add('hidden-quiz__btn');
                
            } else if (this.activeIndex === 5) {
                document.querySelector('.swiper-button-next__quiz').classList.add('hidden-quiz__btn');
                document.querySelector('.swiper-button-prev__quiz').classList.add('hidden-quiz__btn');
            }  else {
                document.querySelector('.swiper-button-next__quiz').classList.remove('hidden-quiz__btn');
                document.querySelector('.swiper-button-prev__quiz').classList.remove('hidden-quiz__btn');
            }
        },
    }
})





// selected card

const cards = document.querySelectorAll('.quiz-card')
const quizRadioButtons = document.querySelectorAll('.quiz-radio__btn')

quizRadioButtons.forEach(button => {
    button.addEventListener('click', () => {
        cards.forEach(card => {
            let currentBtn = button.getAttribute('data-radio-btn')
            card.id === currentBtn ? card.classList.add('quiz-card__select-style') : card.classList.remove('quiz-card__select-style')
        })
    })
})


// output values

function changeValue(value, index) {
    const outputs = document.querySelectorAll('.kitchen-size__output');

    outputs[index].textContent = value;
}




// const budgetCards = document.querySelectorAll('.kitchen-budget__card-into')
// const budgetButtons = document.querySelectorAll('.quiz-budget-radio')


// budgetButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         budgetCards.forEach(card => {
//             let currentBtn = button.getAttribute('data-budget-card')
//             card.id === currentBtn ? card.classList.add('kitchen-budget__card-into__active') : card.classList.remove('kitchen-budget__card-into__active')
//         })
//     })
// })


// не решил проблему






// валидаци формы

const submitInput = document.getElementById('post-data')
const email = document.getElementById('email')
const name = document.getElementById('name')
const number = document.getElementById('number')

const resultEmailText = document.getElementById('result-email')



submitInput.addEventListener('click', (event) => {
    event.preventDefault()


    if (email.value === '' || name.value === '' || number.value === '') {
        email.parentNode.classList.add('red-wrapper__inputs')
        name.parentNode.classList.add('red-wrapper__inputs')
        number.parentNode.classList.add('red-wrapper__inputs')
    }

})



email.addEventListener('input', () => {

    if (email.value.length >= 1) {
        email.parentNode.classList.add('success-wrapper__inputs')
        resultEmailText.textContent = ''
    } else {
        resultEmailText.textContent = 'Нельзя вписать меньше 1 символа'
        resultEmailText.style.color = 'red'
        email.setAttribute('placeholder', 'Нельзя вписать меньше 1 символа')
        email.parentNode.classList.remove('success-wrapper__inputs')
        email.parentNode.classList.add('red-wrapper__inputs')
    }

        submitInput.addEventListener('click', () => {
            if (email.value.includes('@')) {
                ''
            } else {
                email.parentNode.classList.remove('success-wrapper__inputs')
                email.parentNode.classList.add('red-wrapper__inputs')
                resultEmailText.textContent = '@ обязателен!'
                resultEmailText.style.color = 'red'
            }
        })
})



// setAttribute - по типу getAttribute, но можно сразу же присвоить значение
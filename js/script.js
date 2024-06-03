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

function validateQuizForm() {
    function validation(form) {
        let result = true

        function createSuccess(input) {
            const parent = input.parentNode

            if (parent.classList.contains('error-input')) {
                parent.classList.remove('error-input')
                parent.querySelector('.error-label-text').remove()
            }
        }


        function createError(input, text) {
            const parent = input.parentNode
            parent.classList.add('error-input')

            const errorText = document.createElement('label')
            errorText.classList.add('error-label-text')
            errorText.textContent = text

            parent.appendChild(errorText)
        }

        form.querySelectorAll('input').forEach(input => {
            createSuccess(input)

            if (input.value.length === 0) {
                createError(input, 'Заполните поле!')
                result = false
            }
        })

        return result
    }


    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault()

        if (validation(this)) {
            alert('success')
            this.querySelectorAll('input').forEach(input => input.value = '') 
        }
    })   // в данной части кода я создал готовый компонент, который можно переиспользовать за счет ключевого слова this
}

validateQuizForm()





// setAttribute - по типу getAttribute, но можно сразу же присвоить значение (к placeholder например)
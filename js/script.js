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

// wdeewdewdewdwdwedewd


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
                document.querySelector('.swiper-button-next__quiz').classList.toggle('hidden-quiz__btn');
                document.querySelector('.swiper-button-prev__quiz').classList.toggle('hidden-quiz__btn');
            } else {
                document.querySelector('.swiper-button-next__quiz').classList.toggle('hidden-quiz__btn');
                document.querySelector('.swiper-button-prev__quiz').classList.toggle('hidden-quiz__btn');
            }
        },
    },
});





// selected card

const cards = document.querySelectorAll('.quiz-card')
const quizRadioButtons = document.querySelectorAll('.quiz-radio__btn')

quizRadioButtons.forEach(button => {
    button.addEventListener('click', () => {
        cards.forEach(card => {
            let currentBtn = button.getAttribute('data-radio-btn')
            if (card.id === currentBtn) {
                card.classList.add('quiz-card__select-style')
            } else {
                card.classList.remove('quiz-card__select-style')
            }
        })
    })
})


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

            card.id === currentBtn ? card.querySelector('img').style.transform = 'scale(1.1)' : card.querySelector('img').style.transform = 'scale(1.0)'
            card.id === currentBtn ? card.querySelector('img').style.transition = '0.3s linear' : ''
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
            if (input.dataset.minLength) {
                if (input.value.length < input.dataset.minLength) {
                    createSuccess(input)
                    result = false
                    createError(input, `Минимальное кол-во симовлов: ${input.dataset.minLength}`)
                }
            }

            if (input.dataset.maxLength) {
                if (input.value.length > input.dataset.maxLength) {
                    createSuccess(input)
                    result = false
                    createError(input, `Максимальное кол-во симовлов: ${input.dataset.maxLength}`)
                }
            }

            if (input.dataset.required) {
                if (input.value.length === 0) {
                    createSuccess(input)
                    result = false
                    createError(input, 'Заполните поле!')
                }
            }

            result ? input.parentNode.classList.add('success-input') : ''
            result ? input.disabled = true : ''
        })

        return result
    }


    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault()
        if (validation(this)) {
            alert('Форма была успешно отправлена!')
            this.querySelectorAll('input').forEach(input => input.value = '')

            this ? document.querySelector('.form-privacy-policy').remove() : ''
            this ? document.querySelector('.success-submit').style.display = 'block' : ''
            this ? document.querySelector('.get-quote').classList.add('get-quote__transparent') : ''
        }
    })   // в данной части кода я создал готовый компонент, который можно переиспользовать за счет ключевого слова this
}

validateQuizForm()


// setAttribute - по типу getAttribute, но можно сразу же присвоить значение (к placeholder например)









// работа с кликом и выведением конкретных данных

const modalWrapper = document.querySelector('.kitchen-modal-window__overlay-wrapper');

const materialData = {
    'material-card__1': {
        text: 'Кухни из лдсп',
        img: '../img/ldsp-mini.png'
    },
    'material-card__2': {
        text: 'Кухни из мдф',
        img: '../img/mdf-mini.png'
    },
    'material-card__3': {
        text: 'Кухни из эмали',
        img: '../img/emal-mini.png'
    },
    'material-card__4': {
        text: 'Кухни с фурнитурой Blum',
        img: '../img/blum-mini.png'
    },
    'material-card__5': {
        text: 'Кухни с фурнитурой Hettich',
        img: '../img/hettich-mini.png'
    },
    'material-card__6': {
        text: 'Кухни с фурнитурой Boyard',
        img: '../img/boyard-mini.png'
    }
};

function dynamicModal(text, img) {
    modalWrapper.innerHTML = '';

    modalWrapper.insertAdjacentHTML('beforeend', 
        `<section class="kitchen-modal-window__overlay">
            <section class="container kitchen-modal-window">
                <div class="kitchen-modal__inner">
                    <div class="get-sum__container">
                        <p class="get-sum">Рассчитать стоимость</p>
                        <svg class="close-window" width="24.695312" height="24.717773" viewBox="0 0 24.6953 24.7178" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Vector" d="M0.34 0.35L24.34 23.57M24.26 1.05L0.34 24.35" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.000000"/></svg>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Ваше имя:">
                        <input type="text" placeholder="+7(_ _ _) _ _ _-_ _ - _ _ ">
                    </form>
                    <div class="dinamics-data-kitchen">
                        <img src="${img}" alt="">
                        <p>${text}</p>
                    </div>
                    <button class="call-me__btn">Позвоните мне</button>
                    <a id="modal-privacy-poilicy" href="https://t.me/roman_dev_06">Нажимая кнопку “Позвоните мне”, вы соглашаетесь с условиями Политики конфиденциальности</a>
                </div>
            </section>
        </section>`
    );
}

function openModal(material) {
    const data = materialData[material];
    if (data) {
        dynamicModal(data.text, data.img);
    }
}

function clickButton() {
    const calculateCostButtons = document.querySelectorAll('.calculate-cost__btn');

    calculateCostButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const btnAttribute = btn.getAttribute('data-material');
            event.stopPropagation();
            openModal(btnAttribute);

            modalWrapper.querySelectorAll('.close-window').forEach(closeWindow => {
                closeWindow.addEventListener('click', () => modalWrapper.style.display = 'none');
            });

            modalWrapper.style.display = 'block';
            modalWrapper.querySelector('.kitchen-modal-window__overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        });
    });
}

clickButton();


// должен этот код разобрать и повторить с нуля
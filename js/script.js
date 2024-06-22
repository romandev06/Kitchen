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

            card.id === currentBtn ? card.style.transform = 'scale(1.1)' : card.style.transform = 'scale(1.0)'
            card.id === currentBtn ? card.style.transition = '0.3s linear' : ''
        })

    })
})


// output values

function changeValue(value, index) {
    const outputs = document.querySelectorAll('.kitchen-size__output');

    outputs[index].textContent = value;
}




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

function dynamicsMaterials() {

    const modalWrapper = document.querySelector('.kitchen-modal-window__overlay-wrapper')

    const callMeButton = modalWrapper.querySelectorAll('.call-me__btn')
    const modalWrapper2 = document.querySelector('.kitchen-modal-window__overlay-wrapper2')


    let materialData = {
        'material-card__1': {
            text: 'Кухни из лдсп',
            img: './img/ldsp-mini.png'
        },

        'material-card__2': {
            text: 'Кухни из мдф',
            img: './img/mdf-mini.png'
        },

        'material-card__3': {
            text: 'Кухни из эмали',
            img: './img/emal-mini.png'
        },

        'material-card__4': {
            text: 'Кухни с фурнитурой Blum',
            img: './img/blum-mini.png'
        },

        'material-card__5': {
            text: 'Кухни с фурнитурой Hettich',
            img: './img/hettich-mini.png'
        },

        'material-card__6': {
            text: 'Кухни с фурнитурой Boyard',
            img: './img/boyard-mini.png'
        },
    }


    function joinMaterial(dynamic) {
        dynamicModal(materialData[dynamic].text, materialData[dynamic].img)
    }


    function dynamicModal(text, img) {
        document.body.classList.add('modal-scroll-y')

        modalWrapper.innerHTML = ''

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
        )

        modalWrapper.querySelectorAll('.close-window').forEach(close => close.addEventListener('click', () => {
            modalWrapper.classList.add('hidden-modal__wrapper')
            document.body.classList.remove('modal-scroll-y')
        }))

        modalWrapper.classList.remove('hidden-modal__wrapper')
        modalWrapper.querySelector('.kitchen-modal-window').classList.add('transition-modal__wrapper')

        // callMe()   // вызываю здесь, так как после данного модального окна должно пойти следующее модальное окно, которое как раз таки и находистя в callMe()

        // callMe()
    }


    function dataButton() {
        document.querySelectorAll('.calculate-cost__btn').forEach(button => {
            button.addEventListener('click', () => {

                const btnAttribute = button.getAttribute('data-material')
                joinMaterial(btnAttribute)
            })
        })
    }

    dataButton()



    // следующая часть с модалкой



    // function callMe() {

    //     callMeButton.forEach(btn => {
    //         btn.addEventListener('click', () => {
    //             modalWrapper2.insertAdjacentHTML('beforeend', `
    //                 <section class="kitchen-modal-window__overlay">
    //                 <section class="container kitchen-modal-window">
    //                     <div class="kitchen-modal__inner">
    //                         <div class="get-sum__container">
    //                             <p class="get-sum">Заказать звонок</p>
    //                             <svg class="close-window" width="24.695312" height="24.717773" viewBox="0 0 24.6953 24.7178" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Vector" d="M0.34 0.35L24.34 23.57M24.26 1.05L0.34 24.35" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.000000"/></svg>
    //                         </div>
    //                         <div class="about-call">
    //                             <svg width="25.160156" height="25.229492" viewBox="0 0 25.1602 25.2295" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Vector" d="M11.35 21.56L14.64 18.27L20.07 22.06L18.85 23.28C18.04 24.09 16.85 24.39 15.75 24.06C12.39 23.06 9.36 21.22 6.68 18.54C4 15.86 2.16 12.83 1.16 9.47C0.83 8.37 1.13 7.18 1.94 6.37L3.16 5.15L6.95 10.58L3.66 13.87M11.08 9.19C13.74 8.9 16.02 11.08 15.83 13.76L15.79 14.38M11.08 5.46C15.89 4.92 20.01 8.88 19.67 13.71L19.6 14.83M11.08 1.08C18.38 0.26 24.63 6.27 24.12 13.6L24 15.3" stroke="#99CB38" stroke-opacity="1.000000" stroke-width="2.000000"/></svg>
    //                             <p>Вы можете задать любой интересующий Вас вопрос, уточнить цены, вызвать замерщика, проконсультироваться о продукции.</p>
    //                         </div>
    //                         <form action="">
    //                             <input type="text" placeholder="Ваше имя:">
    //                             <input type="text" placeholder="+7(_ _ _) _ _ _-_ _ - _ _ ">
    //                         </form>
    //                         <button class="call-me__btn">Позвоните мне</button>
    //                         <a id="modal-privacy-poilicy" href="https://t.me/roman_dev_06">Нажимая кнопку “Позвоните мне”, вы соглашаетесь с условиями Политики конфиденциальности</a>
    //                     </div>
    //                 </section>
    //             </section>
    //                 `)
    //         })
    //     })
    // }
}

dynamicsMaterials()





var dropZone = document.getElementById('drop_zone')

dropZone.ondragover = function(e) {
    e.preventDefault();
    dropZone.style.border = "2px dashed #000"
}

dropZone.ondragleave = function() {
    dropZone.style.border = "2px dashed #ccc"
}

dropZone.ondrop = function(e) {
    e.preventDefault();
    dropZone.style.border = "2px dashed #ccc"
    var file = e.dataTransfer.files[0];

    if (file.type.match('image.*')) {
        var reader = new FileReader()

        reader.onload = function(e) {
            var img = new Image();
            img.src = e.target.result
            dropZone.innerHTML = ''
            dropZone.appendChild(img)
        }

        reader.readAsDataURL(file)
    } else {
        alert('Пожалуйста, перетащите изображение.')
    }
}

// написать самому в следующий раз похожий код
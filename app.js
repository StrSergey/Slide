//ролучаем кнопки из дерева
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
//получаем кол-во див в слайде
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
//получаем высоту нашего слайда для корректного смещения при анимации
const container = document.querySelector('.container')
//переменная для отслеживания активного слайда
let activeSlideIndex = 0
//сопоставим сайдбар с картинкой в нужном направлении 
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

//смотрим что с кнопками
upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

//функция смены дыижения для кнопок
function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    //проверка что следующий слайд не перевалит за общее кол-во
    if (activeSlideIndex === slidesCount)
    {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    //проверка что следующий слайд не минусовой
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  //добавляем анимации
  //получаем высоту контейнера
  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
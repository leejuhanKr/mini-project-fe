const rabbit = document.querySelector('.rabbit')
const findBtn = document.querySelector('.find-Btn')

findBtn.addEventListener('click', () => {
  const rabbitRect = rabbit.getBoundingClientRect()
  const [x,y] = [rabbitRect.left,rabbitRect.top]
  console.log(x,y)
  window.scrollTo(x, y);
})

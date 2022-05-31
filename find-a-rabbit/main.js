const rabbit = document.querySelector('.rabbit')
const findBtn = document.querySelector('.find-Btn')

findBtn.addEventListener('click', () => {
  const rabbitRect = rabbit.getBoundingClientRect()
  const [x,y] = [rabbitRect.left, rabbitRect.top]
  const windowHeight = window.innerHeight;

  const [targetX, targetY] = [0, parseInt(y - (windowHeight/2) + (rabbit.height)/2)]
  console.log(targetX, targetY)
  window.scrollTo(targetX, targetY)
})

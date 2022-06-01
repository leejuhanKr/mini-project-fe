const targetMark = document.querySelector('.target_ground')
const target = document.querySelector('.target_wrapper')
const coordinate = document.querySelector('.tag')


targetMark.addEventListener('mousemove', event  =>{
    // console.log(event.clientX, event.clientY)
    const [x,y] = [event.clientX, event.clientY]
    target.style.transform = `translate(${x}px, ${y}px)`
    // target.style.left = `${x}px`
    // target.style.top = `${y}px`
    coordinate.textContent = `${x}px, ${y}px`
})


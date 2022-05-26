const targetMark = document.querySelector('.target_ground')
const target = document.querySelector('.target_wrapper')


targetMark.addEventListener('mousemove', event  =>{
    console.log(event.clientX, event.clientY)
    target.style.left = `${event.clientX}px`
    target.style.top = `${event.clientY}px`
})


const mouse = { x: 0, y: 0 }
const $cursor = document.querySelector('#cursor')
const $logo = document.querySelector('#logo')
const $logoMask = document.querySelector('#logoMask')
let light = true

const raf = () => {
  $cursor.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
  const { left, top } = $logoMask.getBoundingClientRect()
  $logoMask.style.clipPath = `circle(calc(var(--cursorSize) * 0.48) at ${mouse.x - left}px ${mouse.y - top}px)`
  requestAnimationFrame(raf)
}
raf()

const handleMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}
window.addEventListener('mousemove', handleMouseMove)

const handleClick = () => {
  light = !light
  document.body.style.setProperty('--textColor', light ? 'black' : 'white')
  document.body.style.setProperty('--bgColor', light ? 'white' : 'black')
  $logo.innerHTML = light ? 'LIGHT' : 'DARK'
  $logoMask.innerHTML = light ? 'DARK' : 'LIGHT'
}
$logo.addEventListener('click', handleClick)

const handleMouseHover = (e) => {
  document.body.style.setProperty('--cursorSize', e.type === 'mouseenter' ? '12vw' : '6vw')
}
$logo.addEventListener('mouseenter', handleMouseHover)
$logo.addEventListener('mouseleave', handleMouseHover)


console.log("ScrollTrigger", ScrollTrigger)
gsap.registerPlugin(ScrollTrigger)
gsap.timeline({
  scrollTrigger: {
    trigger: '.container_img',
    scrub: true,
    start: 'top top',
    end: '+=700',
    pin: true,
  }
})
.to(".img1",2,{
y:10,
ease: Cubic.easeInOut}, 'start')
.to(".img2",2,{
y:10,
ease: Cubic.easeInOut}, 'start')
.to(".img3",2,{
y:20,
ease: Cubic.easeInOut}, 'start')
.to(".img4",2,{
y:-40,
ease: Cubic.easeInOut}, 'start')
.to(".img5",2,{
y:-70,
ease: Cubic.easeInOut}, 'start')
.to(".img6",2,{
y:-120,
ease: Cubic.easeInOut}, 'start')
.to(".img7",2,{
y:-130,
ease: Cubic.easeInOut}, 'start')
.to(".img8",2,{
y:-170,
ease: Cubic.easeInOut,
scaleY: 1}, 'start')
.to(".box",2, {
height: '25vh',
ease: Cubic.easeInOut}, 'start')
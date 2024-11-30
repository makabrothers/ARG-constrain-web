function navAnimation(){
          var nav = document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
          let tl = gsap.timeline()

       tl.to("#nav-part2",{
          height: "10vh",
          
       });
       tl.to("#nav-part2",{
       opacity:"2",
          
       });

       tl.from("#nav-part2",{
         y:20,
          stagger:{
                    amount:0.3,
          },
       });


 });
nav.addEventListener("mouseleave",function(){
          let tl = gsap.timeline()
       tl.to("nav-part2",{
         y:10,
          stagger:{
                    amount:0.2,
          },
          opacity:"0",
       });
     

 });

}
navAnimation();



const items = document.querySelectorAll('.item')

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})

ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})


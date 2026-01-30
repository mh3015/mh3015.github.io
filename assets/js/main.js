
        // Products Background
        // document.addEventListener('DOMContentLoaded', function () {
        // particleground(document.getElementById('particles'), {
        // dotColor: '#385898',
        // lineColor: '#385898'
        // });
        // var intro = document.getElementById('intro');
        // intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
        // }, false);

        // Animation
        // $('.animate').scrolla({
        //         mobile: false,
        //         once: false
        // });

      
      let particleInitialized = false;

      window.addEventListener('load', function () {
        if (particleInitialized) return;
        particleInitialized = true;

        particleground(document.getElementById('particles'), {
          dotColor: '#1446c8',
          lineColor: '#1446c8'
        });
      });


// ScrollTrigger.create({
// 	trigger: 'header',
// 	start: 'top top',
// 	endTrigger: '#otherID',
// 	end: 'bottom 50%+=100px',
// 	onToggle: (self) => console.log('toggled, isActive:', self.isActive),
// 	onUpdate: (self) => {
// 		console.log(
// 			'progress:',
// 			self.progress.toFixed(3),
// 			'direction:',
// 			self.direction,
// 			'velocity',
// 			self.getVelocity()
// 		);
// 	}
// });


// gsap.to('.box', {
// 	scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
// 	x: 500
// });


document.addEventListener('core:ready', function () {
  // 이제 GSAP 사용 가능

});

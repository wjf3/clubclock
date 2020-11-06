		// document.getElementById("phone").play();
		function pad(n, width, z) {
		  z = z || '0';
		  n = n + '';
		  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		}

		frame_slowdown = 2;

		const totalFrames = 238;
		const frameRate = 29.97;
		const animationDuration = (1000 / frameRate) * totalFrames;
		const timePerFrame = animationDuration / totalFrames;
		let timeWhenLastUpdate;
		let timeFromLastUpdate;
		let frameNumber = 0;


		function step(startTime) {
		  // 'startTime' is provided by requestAnimationName function, and we can consider it as current time
		  // first of all we calculate how much time has passed from the last time when frame was update
		 
		  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
		  timeFromLastUpdate = startTime - timeWhenLastUpdate;

		  // then we check if it is time to update the frame
		  if (timeFromLastUpdate > timePerFrame) {
		    $(".phone-animation-" + pad(frameNumber, 5)).show();
		    $('.phone-animation').not(".phone-animation-" + pad(frameNumber, 5)).hide();
		    
		    // reset the last update time
		    timeWhenLastUpdate = startTime;

		    // then increase the frame number or reset it if it is the last frame
		    if (frameNumber >= totalFrames) {
		      frameNumber = 0;
		    } else {
		      frameNumber = frameNumber + frame_slowdown;
		    }        
		  }

		  requestAnimationFrame(step);
		}

		// wait for images to be downloaded and start the animation
		// $(window).on('load', () => {
		// for (i = 0; i <= totalFrames; i++) {
		// 	$('#video-png').append('<img class="video phone-animation phone-animation-' + pad(i, 5) + '" src="assets/phone-flip/Phone Flip_' + pad(i, 5) +'.png" />')
		// }
  // 	    requestAnimationFrame(step);
		// });
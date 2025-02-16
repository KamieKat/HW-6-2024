console.log("JavaScript is running!");


var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

video = document.getElementById("player1");

video.autoplay = false;
console.log ("autoplay is set to false");
video.loop = false;
console.log ("no looping");
video.pause();


	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});

	document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Play slower");
		video.playbackRate /= 1.1; 
		// e.g., 1.0 (normal), 0.5 (slow), 2.0 (fast) 

		});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate *= 1.1;
		console.log("Play faster");
		});
		
	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 < video.duration) {
			video.currentTime += 10;
		} else {
			video.currentTime = video.duration;
			video.pause();
		}
		console.log("skip ahead");
		});
	
	
	let muteButton = document.querySelector("#mute")
	muteButton.addEventListener("click", function() {
		if (video.muted) { video.muted = false; 
			muteButton.textContent = "Mute"; 
			console.log("Video unmuted");
		} else { 
			video.muted = true; 
			muteButton.textContent = "Unmute"; 
			console.log("Video muted"); 
		}
		
		});

		let volumeSlider = document.querySelector("#slider");
		let volumeDisplay = document.querySelector("#volume");
	
		// Initialize volume display
		volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
	
		volumeSlider.addEventListener("input", function() {
			video.volume = volumeSlider.value / 100; 
			volumeDisplay.textContent = `${volumeSlider.value}%`; 
			console.log(`Volume set to: ${video.volume.toFixed(2)}`);
		});


	document.querySelector("#vintage").addEventListener("click", function(){
		video.classList.add("oldSchool");
		console.log("Old school class added");

	})

	document.querySelector("#orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");
        console.log("OldSchool class removed");

	})





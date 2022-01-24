var videoArray = ["fish-video", "koi-video", "koi2-video", "shoal-fish", "candles-video", "clown-fish-video", "grafitti-video", "pinwheel-video", "city-night-video"];


function pickVideo() {
    const vidIndex = Math.floor(Math.random() * (9));
    document.querySelector('video').src = `../../${videoArray[vidIndex]}.mp4`;
}

// pickVideo();



// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "🎥 pause";
    } else {
        video.pause();
        btn.innerHTML = "🎥 play";
    }
}



//Video by Pixabay from Pexels: https://www.pexels.com/video/fish-inside-aquarium-855798/

//Video by Samuel Sobrinho from Pexels: https://www.pexels.com/video/watching-group-of-fish-in-top-view-3582903/

//Video by Pixabay from Pexels: https://www.pexels.com/video/koi-fishes-856951/

//Video by Los Muertos Crew from Pexels: https://www.pexels.com/video/a-shoal-of-fish-in-a-tank-8837878/

//Video by Samphan Korwong from Pexels: https://www.pexels.com/video/burning-candles-on-a-blury-background-6929265/

//Video by Tom Fisk from Pexels: https://www.pexels.com/video/clown-fish-underwater-1534875/

//Video by Pat Whelen from Pexels: https://www.pexels.com/video/a-person-doing-graffiti-art-by-using-a-spray-paint-5621707/

//Video by Bogdan Krupin from Pexels: https://www.pexels.com/video/colorful-paper-weather-vane-4495598/

//Video by George Morina from Pexels: https://www.pexels.com/video/a-street-in-london-filled-with-christmas-decorations-5962700/
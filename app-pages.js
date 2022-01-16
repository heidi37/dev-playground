//use an array to render the page links

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

const pageLinks = ["1", "2", "2-1", "2-2", "2-3", "2-4"];

const progressLinksPages = document.getElementById('progress-links-pages');

for (let i = 0; i < pageLinks.length; i++) {
    progressLinksPages.innerHTML +=
        `<a href="../../days/day-${pageLinks[i]}/day-${pageLinks[i]}.html">${pageLinks[i]}</a>  `
}
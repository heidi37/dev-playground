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

const pageLinks = ["1", "2", "2-1", "2-2", "2-3", "2-4", "2-5", "3", "4"];

const progressLinksPages = document.getElementById('progress-links-pages');

for (let i = 0; i < pageLinks.length; i++) {
  progressLinksPages.innerHTML +=
    `<a href="../../days/day-${pageLinks[i]}/day-${pageLinks[i]}.html">${pageLinks[i]}</a>  `
}

// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const button = document.getElementById("quoteBtn");
  const quote = document.querySelector("blockquote p");
  const cite = document.querySelector("blockquote cite");

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      cite.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

  // Attach an event listener to the `button`
  button.addEventListener("click", updateQuote);

  // call updateQuote once when page loads
  updateQuote();
});

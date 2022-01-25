//import an array to render the page links
import { pageLinks } from './page-array.js';

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
    const hideQuote = document.getElementById("hidequoteBtn");
    const quoteBlock = document.querySelector(".quote");
    const quoteLink = document.getElementById("quoteLink");
    const content = document.querySelector(".content");

    // hide quote

    hideQuote.addEventListener("click", function () {
        quoteBlock.style.display = "none";
        quoteLink.style.display = "none";
        content.classList.add("moveContent");

    })

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


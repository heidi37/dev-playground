//use an array to render the page links
const pageLinks = ["1", "2", "2-1", "2-2", "2-3"];

const progressLinksPages = document.getElementById('progress-links-pages');

for (let i = 0; i < pageLinks.length; i++) {
    progressLinksPages.innerHTML +=
        `<a href="../../days/day-${pageLinks[i]}/day-${pageLinks[i]}.html">${pageLinks[i]}</a>  `

}
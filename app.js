//use an array to render the page links

const pageLinks = ["1", "2", "2-1", "2-2"];

const progressLinksIndex = document.getElementById('progress-links-index');

for (let i = 0; i < pageLinks.length; i++) {
    progressLinksIndex.innerHTML +=
        `<a href="days/day-${pageLinks[i]}/day-${pageLinks[i]}.html">${pageLinks[i]}</a>  `
}

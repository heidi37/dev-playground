// make index meta refresh dynamic to most recent page

//get array of all pages from another javascript file
import { pageLinks } from './page-array.js';

//set the last page in the array as the index of the array that will be used as the link to the "latest" page in the meta refresh
const index = pageLinks.length - 1;

//select the index head and append a new meta refresh tag dynamically
const head = document.querySelector("head");
const meta = document.createElement("meta");

document.head.appendChild(meta);
meta.setAttribute("http-equiv", "Refresh");
meta.setAttribute("content", `0; url='days/${pageLinks[index]}/${pageLinks[index]}.html'`)




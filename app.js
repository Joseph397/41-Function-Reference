// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors() {
    let hasClass = heading.classList.contains('red');
if(hasClass){                                         // adds toggle functional
    heading.classList.remove('red');
} else {
    heading.classList.add('red');
}
}

// btn.addEventListener('click', changeColors()); // must not invoke  no ()

btn.addEventListener('click', changeColors); // Callback function
 

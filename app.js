//RGB WITH COPY TO CLIPBOARD
const button = document.querySelector('#color');
const h1 = document.querySelector('h1')
const copyButton = document.querySelector('#copy');


function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r < 150 && g < 150 && b < 150) {
        h1.style.color = 'white';
        copyButton.style.borderColor = 'white';
        copyButton.style.color = 'white';
    } else {
        h1.style.color = 'black';
        copyButton.style.borderColor = 'black';
        copyButton.style.color = 'black';
    }
    return `rgb(${r} , ${g} , ${b})`;
}


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        const newColor = randomColor();
        document.body.style.backgroundColor = newColor
        h1.innerText = newColor
    }
})

// button.addEventListener('click', () => {
//     const newColor = randomColor();
//     document.body.style.backgroundColor = newColor
//     h1.innerText = newColor
// })

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(document.querySelector("h1").innerText)
})
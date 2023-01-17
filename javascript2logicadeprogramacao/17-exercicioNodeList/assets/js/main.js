const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

const container = document.querySelector('.container');
const bgContainer = getComputedStyle(container);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = bgContainer.backgroundColor;
}
const app = document.getElementById('arbete');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

const wordpress = document.createElement('div');
wordpress.setAttribute('class', 'main-container');

const h1 = document.createElement('h3');
h1.setAttribute('class', 'title')
h1.textContent = "Utbildningar";

const p1 = document.createElement('p');
p1.setAttribute('class', 'paragraph')
p1.textContent = "2010-2014 Grundskolan, Västra Ramlösa Skola, Helsingborg";

const p2 = document.createElement('p');
p2.setAttribute('class', 'paragraph')
p2.textContent = "2014-2017 Nicolaiskolan, Ekonomi - Inriktning Marknadsföring, Helsingborg";

const p3 = document.createElement('p');
p3.setAttribute('class', 'paragraph')
p3.textContent = "2019-2023 Certificate Heta Arbeten";

const p4 = document.createElement('p');
p4.setAttribute('class', 'paragraph')
p4.textContent = "2020 Komvux, Grundläggande programmering";

const h2 = document.createElement('h3');
h2.setAttribute('class', 'title')
h2.textContent = "Anställningar";

const p5 = document.createElement('p');
p5.setAttribute('class', 'paragraph')
p5.textContent = "2016: Thai me up, Köpenhamn - Servitris";

const p6 = document.createElement('p');
p6.setAttribute('class', 'paragraph')
p6.textContent = "2016 till 2019, Gdl Hamn och Stuveri";

const h3 = document.createElement('h3');
h3.setAttribute('class', 'paragraph')
h3.textContent = "Praktiker";

const p7 = document.createElement('p');
p7.setAttribute('class', 'paragraph')
p7.textContent = "2015: Wok Kitchen, Helsingborg";

const p8 = document.createElement('p');
p8.setAttribute('class', 'paragraph')
p8.textContent = "2015: Wok Kitchen, Helsingborg";

container.appendChild(wordpress);
wordpress.appendChild(h1);
wordpress.appendChild(p1);
wordpress.appendChild(p2);
wordpress.appendChild(p3);
wordpress.appendChild(p4);
wordpress.appendChild(h2);
wordpress.appendChild(p5);
wordpress.appendChild(p6);
wordpress.appendChild(h3);
wordpress.appendChild(p7);
wordpress.appendChild(p8);



const app = document.getElementById('kontakt');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

const wordpress = document.createElement('div');
wordpress.setAttribute('class', 'main-container');

const h1 = document.createElement('h3');
h1.setAttribute('class', 'title')
h1.textContent = "Kontakta mig";

const p1 = document.createElement('p');
p1.setAttribute('class', 'paragraph')
p1.textContent = "Nico1998@live.se";

const p2 = document.createElement('p');
p2.setAttribute('class', 'paragraph')
p2.textContent = "+46735160788";

const h2 = document.createElement('h3');
h2.setAttribute('class', 'title')
h2.textContent = "Referenser";

const p5 = document.createElement('p');
p5.setAttribute('class', 'paragraph')
p5.textContent = "Nevzet Kocan, Gdl - Telefonnummer - 073-719 10 93";

const p6 = document.createElement('p');
p6.setAttribute('class', 'paragraph')
p6.textContent = "Niels Barsöe Olsen, Thai me up Take Away - Telefonnummer - +4528871223";


container.appendChild(wordpress);
wordpress.appendChild(h1);
wordpress.appendChild(p1);
wordpress.appendChild(p2);
wordpress.appendChild(h2);
wordpress.appendChild(p5);
wordpress.appendChild(p6);


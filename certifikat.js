const app = document.getElementById('certifikat');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

const wordpress = document.createElement('div');
wordpress.setAttribute('class', 'main-container');

const h1 = document.createElement('h3');
h1.setAttribute('class', 'title')
h1.textContent = "Certifikat";

const p1 = document.createElement('p');
p1.setAttribute('class', 'paragraph')
p1.textContent = "HTML Fundamentals course";

const p2 = document.createElement('p');
p2.setAttribute('class', 'paragraph')
p2.textContent = "CSS Fundamentals course";

const p3 = document.createElement('p');
p3.setAttribute('class', 'paragraph')
p3.textContent = "JavaScript Fundamentals course";

const h2 = document.createElement('h3');
h2.setAttribute('class', 'title')
h2.textContent = "Körkort";

const p5 = document.createElement('p');
p5.setAttribute('class', 'paragraph')
p5.textContent = "B-körkort";

const p6 = document.createElement('p');
p6.setAttribute('class', 'paragraph')
p6.textContent = "C3A Containertruck";

const p7 = document.createElement('p');
p7.setAttribute('class', 'paragraph')
p7.textContent = "D2 Terminal Truck";

const p8 = document.createElement('p');
p8.setAttribute('class', 'paragraph')
p8.textContent = "A-1 till C-1 Truckkort";

const p9 = document.createElement('p');
p9.setAttribute('class', 'paragraph')
p9.textContent = "ADR-Förare, 9-Tanks och 10-Annat Än";

const p10 = document.createElement('p');
p10.setAttribute('class', 'paragraph')
p10.textContent = "Tanks ( 2 till 9 )";

container.appendChild(wordpress);
wordpress.appendChild(h1);
wordpress.appendChild(p1);
wordpress.appendChild(p2);
wordpress.appendChild(p3);
wordpress.appendChild(h2);
wordpress.appendChild(p5);
wordpress.appendChild(p6);
wordpress.appendChild(p7);
wordpress.appendChild(p8);
wordpress.appendChild(p9);
wordpress.appendChild(p10);

 
        
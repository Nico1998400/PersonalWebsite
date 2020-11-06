const app = document.getElementById('info');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

const wordpress = document.createElement('div');
wordpress.setAttribute('class', 'main-container');

const p = document.createElement('p');
p.setAttribute('class', 'title')
p.textContent = "Mitt namn är Nicolai Stahl och jag är 22 år gammal. Bor i Helsingborg tillsammans med min sambo. Jag kommer egentligen från Danmark då alla i min familj är därifrån däremot föddes jag här i Sverige. Det är en väldigt bra fördel då jag både kan prata Svenska, Danska men även Engelska. Mitt stora intresse här i livet är bilar samt att resa mycket och uppleva nya saker. Det som är bra med med mitt bilintresse är att jag har lärt mig väldigt mycket använda händerna och tänka logiskt. Som person är jag väldigt framåtvänd och älskar att lära mig nya saker som jag kan ta del av och använda längre fram livet. Ifall det inte finns en lösning försöker jag alltid att tänka till en extra gång utanför boxen för att uppnå ett resultat. När det kommer till ansvar kan jag ta egna beslut om det skulle behövas, jag är väldigt bra på att märka av situation av vad som är rätt eller fel. Varför ni ska välja mig är föratt jag lägger 100% fokus på arbetet och är väldigt positiv samt försöker göra så att alla ska trivas tillsammans";

container.appendChild(wordpress);
wordpress.appendChild(p);


 
        
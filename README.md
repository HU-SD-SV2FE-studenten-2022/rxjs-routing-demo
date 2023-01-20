# RXJS - Routing demo

De fietscasus uitwerking die we in de lessen behandeld hebben bevatte wat fouten.
Om erachter te komen wat de oorzaak ervan was is dit kleine projectje ontstaan.
Tevens is er code aan toegevoegd om dit project op Github pages te hosten.

Belangrijkste uitkomsten ten opzichte van het fietscasus projectje:

- Er wordt nu niet door elk Lit element een nieuwe instantie van de Service klasse aangemaakt, maar er wordt gebruik gemaakt van een enkele instantie die in de `/src/service/index.js` wordt aangemaakt.
- In de constructor van de `data-service.js` zit een setInterval regel die ervoor zorgt dat er elke seconde opnieuw de localstorage wordt uitgelezen en via de observer wordt verstuurd als de data is veranderd.
- de unsubscribe moet niet op het geobserveerde data toegepast worden, maar op de subscription van de geobserveerde data.
- in de `package.json` file is er een script `preview` bijgekomen (zie vite documentatie https://vitejs.dev/guide/static-deploy.html).
- in de vite.config.js file dien je een `base` variable te zetten die gelijk is aan de naam van je repo. Deze variabele gebruiken we in o.a. de file app.js om de router paden goed te zetten.
- de script `deploy.sh` bevat nu copy statement voor de 404 pagina.
- de script `deploy.sh` maakt dat er een build wordt uitgevoerd en dat alleen de inhoud van via de build aangemaakte `dist` directory vervolgens op github naar de branch gh-pages wordt gepusht. Het is dan ook de root directory van de branch gh-pages die we vanuit github dan moeten gaan hosten (in te stellen via de settings van je github repo).

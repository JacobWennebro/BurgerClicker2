# Bakgrund
Skapa ett nytt klicker spel baserat på 2021s succé Burger Clicker, skapat av Jacob Wennebro, spelat enbart utav Tim Lundtröm (@kloska).

> [Länk till original spel](https://ntig-umea.github.io/clicker-JacobWennebro/)

# Framgång
* [v16] Började spana på olika teknologier och vad som kan användas för projektet.
* [v17] Fixade Next.js & Prisma som bas för mitt spel
* [v18] Börjar med att skapa logik för konton, login, signup etc.
* [v19] Skapa grafik för spelet
* [v20] Hosting & Använd skolans databas
* [v21] Fixa login route och påbörja spel features

# Planering
Saker att skapa och lägga till
* Skapa en ny layout för BC2
* Skapa login
* Optimera BC2 bättre än BC1 för att förhindra lagg
* Skapa achievement system baserat på kalorieinnehåll och burgarens höjd.
* Lägg till fler pålägg, möjligtvis ha kategorier för dem.

Egenskaper för olika pålägg ..
| Primära pålägg | Egenskap
| :---: | :---:
| Beef Patty | 301
| Soy Patty | 301
| Fish Patty | 301
| Chicken Patty | 301
| Cheese | 301
| Lettuce | 301
| Tomato | 301

| Såser | Egenskap
| :---: | :---:
| Ketchup | 301
| Mustard | 301
| Burger Sauce | 301
| BBQ | 301
| Truffle Mayo | 301

# Burger Clicker 2
Syftet med arbetet var att återskapa en nyare version av mitt tidigare spel Burger Clicker som har inloggsfunktion.

## Bakgrund
Burger Clicker är ett spel projekt jag tidigare skapade för lite över ett år sedan. Nu har jag börjat återskapa spelet för att skapa Burger Clicker 2. Detta spel har inloggsfunktion som sparar spelarens framgång i en databas.

Spelet går ut på att man klickar en burgare och på så sätt tjäna pengar som man kan köpa uppgraderingar med, allt för att tjäna mer pengar fortare.

Jag började projektet med att skapa en koppling till databasen med hjälp utav Prisma. Sedan skapade jag min in- och utloggsfunktion som utförs med hjälp utav cookies och JWT.

Sedan klonade jag mitt gamla repository och började implementera spelets gamla layout som bara renderades utav servern ifall användaren är inloggad. Sedan började jag ändra och uppdatera den gamla layouten för en nyare look. Jag skapade även nya sprites för spelets burgare.

## Tester
### W3C CSS Validering
Spelets layout CSS har testats med W3C's CSS valideringstjänst Jigsaw och märkte inte av några problem förutom två deprecated CSS media regler. Något som följt med spelets gamla code base och kan visserligen uppdateras för att vara mer up-to-date, dock pågrund utav tidsbrist förblir dessa media regler i spelets kod för tillfället.
### W3 NU Html Checker
Spelets HTML markup testades även med W3's Nu Html Checker och fann inga fel i sidans syntax.
### WAVE
Eftersom som sidan är låst bakom inlogg användes Wave till att skanna Burger Clicker 1 istället då deras layout, samt färgschema är i stort sätt det samma. Wave fann inga errors för projektet men hade dock en del alerts om inkonsekventa heading element från störst till minst, även att aria attributer saknas. Dock något som jag anser vara onödigt då sidan är ett spel och inte en informativ webbplats.

![a](https://i.imgur.com/mFQEzxF.png)

### A11Y - Color blindness empathy test
Med hjälp utav Chrome extensionen A11Y color blindess empathy test så var det dock enklare att testa den nuvarande sidan. Medan detta test inte automatiskt ger ett svar om sidan har bra eller dålig synlighet så är det klart för mig då jag testade alla olika typer av färgblindhet att sidans största brist är dålig kontrast mellan spelets nya ost element och den gula bakgrunden. Något som inte försekom i den tidigare versionen utav spelet.

### Bilder
Spelet använder sig utav ett fåtal bilder för att till exempel användas som sprites till diverse uppgraderingar i spelet. Dessa bilder är dock alla gjorda i litet pixel art format och håller sig alla under en kB. Spelarens profilbild är dock i SVG format och är 1.8 kB stor. Laddningstiden för dessa bilder är alltså minimal.

## Positiva erfarenheter
Jag har fått en bättre förståelse för både databas ORMn Prisma samt Vercels React-baserade ramverket Next.js och deras hosting plattform vilket har känts som en mycket effektiv stack att jobba i.

## Negativa erfarenheter
Som vanligt så tror jag att jag underskattade hur mycket tid ett sådant projekt tar samt hur mycket tid jag har själv utanför skolan. Men ändå känns det som jag har gjort framgång då det kommer till min apps in- och utloggsfunktion även om själva spelfunktionerna ännu inte är på plats.
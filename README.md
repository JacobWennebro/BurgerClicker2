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
Spelets layout CSS har testats med W3C's CSS valideringstjänst Jigsaw och märkte inte av några problem förutom två deprecated CSS media regler. Något som följt med spelets gamla code base och kan visserligen uppdateras för att vara mer up-to-date, dock pågrund utav tidsbrist förblir dessa media regler i spelets kod för tillfället.

Spelets HTML markup testades även med W3's Nu Html Checker och fann inga fel i sidans syntax.

## Positiva erfarenheter
Jag har fått en bättre förståelse för både databas ORMn Prisma samt Vercels React-baserade ramverket Next.js och deras hosting plattform vilket har känts som en mycket effektiv stack att jobba i.

## Negativa erfarenheter
Som vanligt så tror jag att jag underskattade hur mycket tid ett sådant projekt tar samt hur mycket tid jag har själv utanför skolan. Men ändå känns det som jag har gjort framgång då det kommer till min apps in- och utloggsfunktion även om själva spelfunktionerna ännu inte är på plats.
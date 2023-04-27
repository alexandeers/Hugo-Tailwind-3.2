---
title: "Moderskeppet - Illustrator"
date: 2023-04-27T10:25:14+02:00
draft: false
type: post
description: Min erfarenhet med moderskeppet
tags: [uppgift]
categories: [digitaltskapande]
banner: /images/GLASSY.png
---

# Kurs i Illustrator
Jag valde att se på en kurs som går genom Illustrator, även fast jag använt det tidigare och är bekväm med programmet.
Jag är självlärd i programmet, så jag tänkte att detta var ett bra tillfälle att gå lite djupare i programmet.
Mer specifikt så valde jag avsnittet i kursen jag var minst bekväm med - *geometriska former* - som också är den viktigaste i Illustrator. 

Ett till skäl till varför jag valde att se denna kurs är att Illustrator är vektorbaserat - vilket innebär att grafiken inte är "pixlar", 
utan den beräknas via algoritmer och matematik som sedan rasteriseras till pixlar på skärmen. 
Detta är extremt viktigt för att eftersom grafiken inte är bunden till pixlar så kan den skalas till vilket storlek som helst.

## Review av kursen
Jag lärde mig inte särskilt mycket av kursen, eftersom den är hyfsat nybörjarvänlig och gick genom mycket av det jag redan vet.
Formatet är inte heller perfekt för mig, eftersom det är uppdelat i olika videor (vilket är bra för då vet man exakt vart man ska om man glömt eller vill veta något specifikt), 
och jag vill gärna ha allt kondenserat i en video. Jag föredrar systemet YouTube har - att en video har flera kapitel man kan spola till.

Videorna var av mycket bra kvalité och det skulle vara perfekt för mig när jag började med Illustrator.

Jag har faktiskt lärt mig nya metoder för att göra saker jag redan kan - vilket har effektiviserat mitt arbete en del!
___

# Tillämpning av inlärd information
Jag tänker utnyttja informationen för att designa en layout för en hemsida jag har i Teknikspecialiseringen.  
Vektorbaserad grafik är väldigt vanlig i hemsidor eftersom "vanliga" bilder som .PNG eller .JPEG helt enkelt är för stora.
Då kan man använda .SVG-filer (Scalable Vector Graphics) som inte är1 programmerade i pixlar, utan matematik.  

Hemsidor anpassas för en stor variation av skärmstorlekar, vilket innebär att man måste ha stora 
.PNG bilder för att se till så bilderna ser bra ut på alla skärmstorlekar. Det är dåligt för att sådana bilder är enorma och tar upp mycket plats,
vilket gör att hemsidan tar lång tid att läsa in. 
Istället använder man .SVG, eftersom matematiken och algoritmerna ser till så att bilden ser exakt likadan ut på alla skärmstorlekar och tar mindre plats.
Dessutom är det mycket enklare att ändra färg på vektorbaserad grafik eftersom de oftast inte erhåller färginformation i självaste filen - utan programmeras i CSS.

## Resultat
![Rendered Screenshot V1](/images/GLASSY.png "Render 1")
Här är min hemsida jag designat i Illustrator och sedan programmerat i HTML/CSS med Vue.
Layouten är väldigt minimalistisk, och allt är vektorbaserad grafik - vilket innebär att det skalas perfekt till alla skärmstorlekar.
Alla ikoner är exporterade .SVG-filer, men allt annat som text och former är endast programmerat i HTML/CSS i efterhand eftersom sådana former är onödiga att designa som bilder.

Dessa layouts kallas för "wireframe" och ger en tydlig bild om hur man sedan ska programmera hemsidan efter arbetet i Illustrator.

Glasögonen är inte gjorda i Illustrator, utan de renderades i Blender med mjuka skuggor.

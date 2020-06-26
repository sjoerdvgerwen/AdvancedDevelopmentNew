# Advanced_development

Voor mijn Advanced Development ben ik aan de slag gegaan voor een client die de MQTT data van mijn watersensor op zou vangen. Het is een redelijk complexe opdracht. De opdracht bestaat dus eigenlijk uit 3 delen:

Inlogsyssteem
Connectie met Firebase voor verificatie
MQTT output wordt gedisplayd zodra je bent ingelogd.

Het eerste gedeelte was redelijk snel gemaakt. Ik had 2 div'jes gemaakt met inlog en uitlog, zodra een div geverifieerd was, dat hij was ingelogd, werd een div'je gedisplayd en de andere niet meer. 
De connectie met Firebase was iets moeilijker omdat Stijn de firebase had aangemaakt en ik niet alle juiste credentials had om de verificatie te laten voltooien. Toen hij eenmaal gekoppeld was, werkte het redelijk simpel.
  
De MQTT data was het grootste probleem, dat tot op heden helaas nogsteeds niet is verholpen. De MQTT data zou moeten worden weergegeven zodra de gebruiker was ingelogd.
Het idee hierachter was dat als een gebruiker van ons project inlogde, hij zijn waterverbruik kon zien van zijn douchesessie.
Helaas heb ik hiervoor een hoop libraries moeten downloaden omdat de data van een MQTT-Protocol-server niet zomaar naar een html pagina kan. 

Dit kwam door de websockets, dit zijn de pakketjes waarmee de data van de MQTT wordt verzonden naar de HTML. Deze werden niet zomaar toegestaan. Toen ik uiteindelijk een library had gevonden waarmee ze werden toegestaan liep ik tegen nieuwe andere problemen aan waardoor ik het uiteindelijk maar heb opgegeven. 

Luuk en Erik hadden mijn werk al vaak gezien door alle feedback en vragen die ik ze had gesteld. Hierdoor hadden ze al lang goedkeuring gegeven voor de uitkomst op het einde, ook terwijl hij niet deed wat hij oorspronkelijk wel zou moeten doen. Het ging hen om het leerproces en niet om de eindoplevering.

JE KAN DE FUNCTIONELE INLOGFUNCTIE WEL TESTEN MET:

INLOG = fontys@fontys.nl
WW = fontys

Als je wordt ingelogd zie je helaas de MQTT data NIET verschijnen.

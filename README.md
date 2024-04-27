# Aufgabe 5, Frameworks im Backend (Node.js und Express.js): Einfache Todo-App
Einsendeaufgabencode: B-MUMB01-XX1-N01  
Bearbeiter: Maxim Heibach  
Matrikelnummer: 909442      

## Aufgabe
Implementieren Sie mit einem der in MMI14 genannten Frameworks im Backend eine einfache Todo-App, die wie folgt gestaltet sein soll:

![Aufgabe 5](task5.png)

Die Anwendung startet mit leeren Listen. Ein Klick auf den Button Neues Todo anlegen soll den eingegebenen Text in die Liste der offenen Todos aufnehmen. Sollte das Textfeld bei einem Klick auf den Button leer sein, soll kein neues Todo erstellt werden. Duplikate (d.h. Todos mit gleichem Text) können Sie dabei einfach mehrmals aufnehmen.  
Ein Klick auf Todo erledigt soll das ausgewählte Todo aus den offenen Todos entfernen und in die Liste der erledigten Todos aufnehmen, wobei der Zeitpunkt der Erledigung wie in der Abbildung gezeigt an die Ausgabe angehängt werden soll.  
Eine persistente Speicherung der Todos müssen Sie in dieser Aufgabe nicht implementieren. 

## Anleitung:
Server im Terminal mit 
```sh
node app.js
```
starten und Todo-App im Browser unter 
```sh
localhost:3000 
```
aufrufen.   
  
Todo in Textfeld eintragen.   
Todo wird bei Klick auf Button "Neues Todo erstellen" in der Liste "Offene Todos" gespeichert.   
Wenn man mit Klick auf den Kreis ein oder mehrere Todos auswählt und auf den Button "Todo erledigt"
drückt, werden die markierten Todos mit Zeitstempel in die Liste "Erledigte Todos" transferiert. 

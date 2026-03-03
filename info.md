## 1️⃣ Vorbereitung: Set und HTML-Element

```js
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")
```
usedIndexes → leeres Set, um die Indizes der bereits angezeigten Zitate zu speichern.

Vorteil: Ein Set speichert einzigartige Werte automatisch.

quoteElement → Referenz auf das <p id="quote"> im HTML, wo das Zitat angezeigt wird.

## 2️⃣ Funktion definieren
function generateQuote() {

Wir erstellen eine Funktion, die ein neues zufälliges Zitat auswählt und anzeigt.

Diese Funktion wird z. B. über einen Button im HTML aufgerufen:

``<button onclick="generateQuote()">Generate Quote</button>``

## 3️⃣ Prüfen, ob alle Zitate schon benutzt wurden

```js
if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear()
}
```

usedIndexes.size → Anzahl der bisher angezeigten Zitate.

Wenn diese größer oder gleich der Länge des Zitate-Arrays ist, wurden alle Zitate einmal gezeigt.

usedIndexes.clear() → Set wird geleert, damit Zitate wieder neu ausgewählt werden können.

## 4️⃣ Zufälliges Zitat auswählen
while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)

Math.random() → Zufallszahl zwischen 0 und 1

Math.random() * quotes.length → Zufallszahl zwischen 0 und quotes.length (z. B. 0–19)

Math.floor() → Abrunden, damit wir einen gültigen Array-Index bekommen (0–19)

## 5️⃣ Prüfen, ob Zitat schon verwendet wurde
if (usedIndexes.has(randomIdx)) continue

usedIndexes.has(randomIdx) → Prüft, ob dieser Index schon benutzt wurde.

continue → Springt zurück zum Anfang der while-Schleife und wählt einen neuen Index.

💡 So wird doppelte Anzeige vermieden, bis alle Zitate einmal gezeigt wurden.

## 6️⃣ Zitat anzeigen und Index speichern
const quote = quotes[randomIdx]
quoteElement.innerHTML = quote;

usedIndexes.add(randomIdx)
break

const quote = quotes[randomIdx] → Holt das Zitat aus dem Array.

quoteElement.innerHTML = quote → Zeigt das Zitat im HTML an.

usedIndexes.add(randomIdx) → Fügt den Index dem Set hinzu, damit es nicht erneut angezeigt wird.

break → Verlässt die while(true) Schleife, weil wir ein gültiges Zitat gefunden haben.

## ✅ Zusammenfassung der Logik

Prüfe, ob alle Zitate schon verwendet wurden → Set leeren, wenn ja.

Wähle zufällig ein Zitat aus.

Prüfe, ob das Zitat schon angezeigt wurde → wenn ja, wähle neu.

Zeige das Zitat an und merke den Index.
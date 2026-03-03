const quotes = [
    "Small steps today lead to big results tomorrow.",
    "Create with passion, build with purpose.",
    "Progress, not perfection.",
    "Stay curious. Stay growing.",
    "Dream it. Build it. Share it.",
    "Consistency beats intensity.",
    "Make it simple, but meaningful.",
    "Good things take time.",
    "Your only limit is your mindset.",
    "Focus on what truly matters.",
    "Done is better than perfect.",
    "Ideas grow when you act on them.",
    "Keep learning, keep moving.",
    "Every expert was once a beginner.",
    "Create something you’re proud of.",
    "Believe in steady progress.",
    "Make today count.",
    "Build. Improve. Repeat.",
    "Start where you are.",
    "Stay humble. Work hard. Be kind."
];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;

        usedIndexes.add(randomIdx)
        break

    }
}
// Liste der Hinweise (neutral formuliert)
const hints = [
    "🌳 Dieser Ort liegt in Deutschland und ist von malerischen Wäldern und einem Fluss umgeben.",
    "🏰 Der Ort ist berühmt für seine historische Architektur und ist eines der beliebtesten Ausflugsziele in Rheinland-Pfalz.",
    "🪨 Es handelt sich um ein Bauwerk, das auf einem Felsen thront und fast 900 Jahre alt ist.",
    "⚔️ Dieses Bauwerk wurde nie gewaltsam erobert oder zerstört und gehört zu den am besten erhaltenen seiner Art.",
    "👑 Es ist ein Familiensitz, der seit 33 Generationen im Besitz derselben Adelsfamilie ist.",
    "🎨 Das Bauwerk vereint verschiedene Baustile wie Romanik, Gotik und Renaissance und ist ein beliebtes Motiv für Fotografen.",
    "💰 Dieses Bauwerk war auf dem 500-DM-Schein abgebildet und besitzt eine Schatzkammer mit über 500 Kunstwerken.",
    "🎯 Ziel: Ein historischer Ort mit einer beeindruckenden Geschichte – kannst du ihn erraten?"
];

// Karten initialisieren
const quizContainer = document.getElementById("quiz-container");

hints.forEach((hint, index) => {
    const card = document.createElement("div");
    card.className = "card hidden";
    card.innerHTML = `<h2>Hinweis ${index + 1}</h2><p>🔒 Klicken zum Aufdecken</p>`;
    card.addEventListener("click", () => revealHint(card, hint));
    quizContainer.appendChild(card);
});

// Funktion, um Hinweise aufzudecken
function revealHint(card, hint) {
    card.classList.remove("hidden");
    card.classList.add("revealed");
    card.innerHTML = `<h2>Hinweis ${card.textContent.split(" ")[1]}</h2><p>${hint}</p>`;
}

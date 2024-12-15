const url = 'https://catfact.ninja/facts';
let allFacts = [];

document.addEventListener("DOMContentLoaded", function() {
    loadFacts();
});

function loadFacts() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            allFacts = response.data;
            showFacts(allFacts);
        })
        .catch(error => alert(error));
}

function showFacts(facts) {
    const div = document.getElementById("facts");
    div.innerHTML = '';
    facts.forEach(function(item) {
        const fact = document.createElement("div");
        fact.className = "fact";
        fact.innerHTML = item.fact;
        div.appendChild(fact);
    });
}

function filterFacts() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredFacts = allFacts.filter(item => item.fact.toLowerCase().includes(query));
    showFacts(filteredFacts);
}

function addNewFact() {
    const newFactInput = document.getElementById("newFact");
    const newFactText = newFactInput.value.trim();

    if (newFactText) {
        const newFact = { fact: newFactText };
        allFacts.push(newFact);
        showFacts(allFacts);
        newFactInput.value = '';
    } else {
        alert("Please enter a fact before adding.");
    }
}

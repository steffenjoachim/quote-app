const btn = document.querySelector("button");
btn.addEventListener("click", getQuote);

async function getQuote() {
    let response = await fetch("https://dummy-apis.netlify.app/api/quote");
    let quoteJson = await response.json();
    console.log(quoteJson);
    renderQuote(quoteJson);
}

function renderQuote(quoteJson) {
    const quote = document.querySelector("h2").textContent = quoteJson.quote;
    const author = document.querySelector("p").textContent = "-" + quoteJson.author;
}
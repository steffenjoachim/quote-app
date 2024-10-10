const btn = document.querySelector("button");
btn.addEventListener("click", getQuote);

async function getQuote() {
    try {
        let response = await fetch("https://dummy-apis.netlify.app/api/quote");
        let quoteJson = await response.json();
        renderQuote(quoteJson);
    } catch (err) {
        console.error(err);
    }
}

function renderQuote(quoteJson) {
    const quote = document.querySelector("h2").textContent = quoteJson.quote;
    const author = document.querySelector("p").textContent = "-" + quoteJson.author;
}
// Autore: Nicola Schianchi
function creaCard(){
    let container = document.getElementById("containerImg");
    while (container.hasChildNodes()){
        container.removeChild(container.lastElementChild);
    }
    let msgErrore = document.getElementById("msgErrore");
    msgErrore.style.display = "none";
    let card = document.createElement("div");
    card.className = "card";
    card.style = "margin-top: -3.5%;"
    let img = document.createElement("img");
    img.className = "card-img-top rounded";
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
    .then(
        promise => {
            if (promise.ok){
                return promise.json();
            }
        }
    )
    .catch(
        () => msgErrore.style.display = "block"
    )
    .then(
        json => img.src = json.message
    );
    img.alt = "Cane";
    card.appendChild(img);
    container.appendChild(card);
}
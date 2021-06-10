const requestObject = {
    method : "GET",
    "content-type" : "application/json",
    redirect : "follow"
}

function fetchSogne() {
    fetch('http://localhost:8080/getAllKommuner', requestObject)
        .then(response => response.json())
        .then(kommune => showKommuner(kommune) );
}

fetchSogne()

function showKommuner(kommune){
    kommune.sort(function(a, b){
        return parseFloat(b.coronaIncidens) - parseFloat(a.coronaIncidens)
    });

    const kommuneDiv = document.getElementById("kommuneRow")

    kommune.forEach(kommune => {
        const kommuneElement = document.createElement('div')
        const pTagKommune = document.createElement('p')
        const pTagIndbyggertal = document.createElement('p')
        const pTagCoronaIncidens = document.createElement('p')
        const pTagHundrede = document.createElement('p')

        let hundredek = (kommune.coronaIncidens/kommune.indbyggertal)*100000

        pTagHundrede.innerText = `Smittede pr. 100.000 indbyggere: ${hundredek.toFixed(2)}`


        pTagKommune.innerText = `${kommune.name} kommune`
        pTagIndbyggertal.innerText = `${kommune.indbyggertal} indbyggere`
        pTagCoronaIncidens.innerText = `${kommune.coronaIncidens} smittetilfælde`

        kommuneElement.className = "kommuneElement"

        kommuneElement.append(pTagKommune)
        kommuneElement.append(pTagIndbyggertal)
        kommuneElement.append(pTagCoronaIncidens)
        kommuneElement.append(pTagHundrede)
        kommuneDiv.append(kommuneElement)
    })

}

function redirectSogne(){
    location.href = "/";
}
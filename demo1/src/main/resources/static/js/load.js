const requestObject = {
    method : "GET",
    "content-type" : "application/json",
    redirect : "follow"
}

document.getElementById("whenLockedEdit").style.display = "none"
document.getElementById("editNedlukning").style.display = "none"

function fetchSogne() {
    fetch('http://localhost:8080/getAllSogn', requestObject)
        .then(response => response.json())
        .then(sogn => showSogn(sogn) );
}

fetchSogne()

function showSogn(sogn){
    const sognDiv = document.getElementById("sognRow")

    //sogn attributter:
    //sognekode, sognenavn, kommune, smittetryk, start på nedlukning

    sogn.forEach(sogn => {
        const sognElement = document.createElement('div')
        const infoDiv = document.createElement('div')
        const pTagSognekode = document.createElement('p')
        const pTagSognenavn = document.createElement('p')
        const pTagKommune = document.createElement('p')
        const pTagSmittetryk = document.createElement('p')
        const pTagNedlukning = document.createElement('p')

        pTagSognekode.innerText = `Sognekode:  ${sogn.sognekode}`
        pTagSognenavn.innerText = `${sogn.sognNavn} sogn`
        pTagKommune.innerText = `${sogn.kommune} kommune`
        pTagSmittetryk.innerText = `Smittede i sogn: ${sogn.smittetryk}`
        pTagNedlukning.innerText = sogn.nedlukning

        const deleteBtn = document.createElement('button')
        const updateBtn = document.createElement('button')

        sognElement.className = "sognElement"
        infoDiv.className = "infoDiv"

        deleteBtn.setAttribute("value", sogn.id)
        deleteBtn.id = sogn.id
        deleteBtn.className = "btn btn-outline-success my-2 my-sm-0 deleteBtn"
        deleteBtn.innerHTML = "Slet sogn"

        updateBtn.setAttribute("value", sogn.id)
        updateBtn.id = sogn.id
        updateBtn.className = "btn btn-outline-success my-2 my-sm-0 deleteBtn updateBtn"
        updateBtn.innerHTML = "Rediger sogn"
        updateBtn.setAttribute('data-bs-toggle', "modal")
        updateBtn.setAttribute('data-bs-target', "#editModal")


        infoDiv.append(pTagSognekode)
        infoDiv.append(pTagSognenavn)
        infoDiv.append(pTagKommune)
        infoDiv.append(pTagSmittetryk)
        infoDiv.append(pTagNedlukning)

        sognElement.append(infoDiv)
        sognElement.append(updateBtn)
        sognElement.append(deleteBtn)
        sognDiv.append(sognElement)

        deleteBtn.onclick = function(){
            let sognToDelete = {
                "id" : `${sogn.id}`
            }

            const url = `http://localhost:8080/deleteSogn/${sogn.id}`
            let body = JSON.stringify(sognToDelete)

            const deleteOption = {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "DELETE",
                body: body
            };

            if(confirm("Er du sikker på, at du vil slette dette sogn?")){
                fetch(url, deleteOption)
                    .then(response => response.json())
                    .then(data => {
                        console.log("success", data)
                    })
                    .catch((error) => {
                        console.log("Error:", error)
                    });
                location.reload()
            }
        }

        updateBtn.onclick = function(){
            const editSognekode = document.getElementById("editSognekode")
            const editSognNavn = document.getElementById("editSognNavn")
            const editKommune = document.getElementById("editKommune")
            const editSmittetryk = document.getElementById("editSmittetryk")
            const editNedlukning = document.getElementById("editNedlukning")

            editSognekode.value = sogn.sognekode
            editSognNavn.value = sogn.sognNavn
            editKommune.value = sogn.kommune
            editSmittetryk.value = sogn.smittetryk
            editNedlukning.value = sogn.nedlukning

            const editSognBtn = document.getElementById("editSognBtn")

            editSognBtn.onclick = function (){

                if(editNedlukning.value === "" || editNedlukning.value === null){
                    let editSogn = {
                        "id" : sogn.id,
                        "sognekode" : `${document.getElementById("editSognekode").value}`,
                        "sognNavn" : `${document.getElementById("editSognNavn").value}`,
                        "kommune" : `${document.getElementById("editKommune").value}`,
                        "smittetryk" : `${document.getElementById("editSmittetryk").value}`,
                        "nedlukning" : "Sognet er ikke lukket"
                    };
                    postEditSogn(editSogn)

                }else{
                    let editSogn = {
                        "id" : sogn.id,
                        "sognekode" : `${document.getElementById("editSognekode").value}`,
                        "sognNavn" : `${document.getElementById("editSognNavn").value}`,
                        "kommune" : `${document.getElementById("editKommune").value}`,
                        "smittetryk" : `${document.getElementById("editSmittetryk").value}`,
                        "nedlukning" : `Sognet er lukket fra d. ${document.getElementById("editNedlukning").value}`
                    };

                    postEditSogn(editSogn)
                }

                function postEditSogn(editSogn){
                    const editUrl = "http://localhost:8080/updateSogn"
                    let editBody = JSON.stringify(editSogn);

                    const requestOptions = {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: "POST",
                        body: editBody
                    };

                    fetch(editUrl, requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log("success", data)
                        })
                        .catch((error) => {
                            console.log("Error:", error)
                        });

                    if(confirm("Ændringerne er opdateret")){
                        location.reload()
                    }
                }
            }
        }
    })
}

function checkboxFuncEdit(){
    const checkbox = document.getElementById("checkboxEdit")

    if(checkbox.checked === true){
        document.getElementById("whenLockedEdit").style.display = "block"
        document.getElementById("editNedlukning").style.display = "block"
    }else{
        document.getElementById("whenLockedEdit").style.display = "none"
        document.getElementById("editNedlukning").style.display = "none"
    }
}

function redirectKommuner(){
    location.href = "/kommuner";
}
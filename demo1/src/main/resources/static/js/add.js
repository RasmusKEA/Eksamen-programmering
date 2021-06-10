document.getElementById("whenLocked").style.display = "none"
document.getElementById("nedlukning").style.display = "none"

function addSogn(){
    const sognekode = document.getElementById("sognekode")
    const sognNavn = document.getElementById("sognNavn")
    const kommune = document.getElementById("Kommune")
    const smittetryk = document.getElementById("Smittetryk")
    const nedlukning = document.getElementById("nedlukning")

    if(nedlukning.value === "" || nedlukning.value === null){
        let newSogn = {
            "sognekode" : sognekode.value,
            "sognNavn" : sognNavn.value,
            "kommune" : kommune.value,
            "smittetryk" : smittetryk.value,
            "nedlukning" : "Sognet er ikke lukket"
        }
        postSogn(newSogn)
    }else{
        let newSogn = {
            "sognekode" : sognekode.value,
            "sognNavn" : sognNavn.value,
            "kommune" : kommune.value,
            "smittetryk" : smittetryk.value,
            "nedlukning" : `Sognet er lukket fra d. ${nedlukning.value}`
        }
        postSogn(newSogn)

    }

    function postSogn(newSogn){
        const url = "http://localhost:8080/createSogn"

        let body = JSON.stringify(newSogn)

        const postOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: body
        };

        fetch(url, postOptions)
            .then(response => response.json())
            .then(data => {
                console.log("success", data)
            })
            .catch((error) => {
                console.log("Error:", error)
            });

        alert("Sognet er tilføjet")
        location.reload()
    }
}

function checkboxFunc(){
    const checkbox = document.getElementById("checkboxAdd")

    if(checkbox.checked === true){
        document.getElementById("whenLocked").style.display = "block"
        document.getElementById("nedlukning").style.display = "block"
    }else{
        document.getElementById("whenLocked").style.display = "none"
        document.getElementById("nedlukning").style.display = "none"
    }
}


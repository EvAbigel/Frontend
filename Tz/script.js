function $(id){
    return document.getElementById(id)
}


function kereses(){
    const url = "https://randomuser.me/api/"

    fetch(url)
    .then(response=>{
        return response.json()
    })
    .then(adat =>{
        console.log(adat)
        $("showcase").innerHTML = "";

        megjelenites(`${adat.results[0].name.title} ${adat.results[0].name.last} ${adat.results[0].name.first}`,  
                    adat.results[0].picture.large,
                    `${adat.results[0].location.country}, ${adat.results[0].location.state}, ${adat.results[0].location.street.name} ${adat.results[0].location.street.number}`,
                    adat.results[0].email,
                    adat.results[0].id.value)

    })
    .catch()
}

function megjelenites(name, imageSrc, address, email, id){
    const image = new Image()
    image.src = imageSrc
    image.classList += "kep";

    const p = document.createElement("p");
    p.innerHTML = name
    p.id = "name"

    const p2 = document.createElement("p");
    p2.innerHTML = `Address: ${address}`
    p2.classList += "infok"

    const p3 = document.createElement("p");
    p3.innerHTML = `Email: ${email}`
    p3.classList += "infok"

    const p4 = document.createElement("p");

    if (!id || id === "NaN" || id==="undefined"){
        p4.innerHTML = `ID: -`
    }
    else{
        p4.innerHTML = `ID: ${id}`
    }
    
    p4.classList += "infok"

    $("showcase").appendChild(image);
    $("showcase").appendChild(p);
    $("showcase").appendChild(p2);
    $("showcase").appendChild(p3);
    $("showcase").appendChild(p4);
}

$("button-keresett").addEventListener("click", kereses)
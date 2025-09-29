function $(id){
    return document.getElementById(id);
}

function $$(element){
    return document.createElement(element);
}

function createDivForLiWithText(text){
    const div = $$("div");
    const li = $$("li");
    li.innerHTML = text
    div.appendChild(li)

    return div;
}

function kereses(){

    let keresett = $("input-kereses").value;

    keresett = keresett.trim();
    keresett = keresett.toLowerCase();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${keresett}&appid=deb402aea103b45da0805b99fa6234ad`;
    $("header-data").innerHTML = "";
    $("main-data").innerHTML = "";
    $("feels-data").innerHTML = "";
    $("ect-data").innerHTML = "";

    fetch(url)
    .then(response => 
        response.json()
    )
    .then(adatok =>{
        console.log(adatok)
        generate(adatok)
    })
    .catch()
}

function generate(adatok){
    const span = $$("span")
    span.innerHTML = `${(new Date).toDateString().substring(4,10)}, ${(new Date).getHours()}:${(new Date).getMinutes()}`

    const h2 = $$("h2")
    h2.innerHTML = `${adatok.name}, ${adatok.sys.country}`;


    const img = new Image()
    img.height = 75;
    img.width = 75;
    img.src = ` https://openweathermap.org/img/wn/${adatok.weather[0].icon}@2x.png`
    img.id = "weather-image"

    const span2 = $$("span");
    span2.id = "celsius"
    span2.innerHTML = `${Math.round(adatok.main.temp -273)} C°`;

    const ul = $$("ul");

    ul.appendChild(createDivForLiWithText(`${adatok.wind.speed}m/s NE`));
    ul.appendChild(createDivForLiWithText(`${adatok.main.pressure}hPa`));
    ul.appendChild(createDivForLiWithText(`Humidity: ${adatok.main.humidity}%`));

    $("ect-data").appendChild(ul)

    $("feels-data").innerHTML = `Feels like ${Math.round(adatok.main.feels_like -273)}. ${adatok.weather[0].description.charAt(0).toUpperCase()}${adatok.weather[0].description.slice(1)}. Mainly ${adatok.weather[0].main.toLowerCase()}.`

    $("header-data").appendChild(span);
    $("header-data").appendChild(h2);

    $("main-data").appendChild(img);
    $("main-data").appendChild(span2);
}




$("kereses-gomb").addEventListener("click", kereses)
$("input-kereses").addEventListener("keypress", event =>{
    if (event.key == "Enter"){
        kereses()
    }
})
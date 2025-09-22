function $(str){
    return document.getElementById(str);
}

function kereses(){
    let keresett = $('input-keresett').value;
    //console.log(keresett)
    keresett = keresett.trim();
    keresett = keresett.toLowerCase();

    if (keresett.indexOf(' ') > 0){
        keresett.replaceAll(' ', '+');
    }

    const url = `https://itunes.apple.com/search?term=${keresett}&media=music&limit=200`;

    fetch(url)
    .then( response=>
        response.json()
    )
    .then(adatok =>{
        const zenek = adatok.results;

        $('zenek').innerHTML = '';

        zenek.forEach(element => {
            newRow(element.artistName, element.trackName, element.releaseDate.substring(0,4), element.primaryGenreName, element.trackTimeMillis, element.previewUrl);
        });
    })
    .catch();
}


function newRow(eloado, cim, megjelenes, mufaj, milis, url){
    let tr = document.createElement("tr");
    let eloadoTd = document.createElement("td");
    eloadoTd.innerHTML = eloado;

    let cimTd = document.createElement("td");
    cimTd.innerHTML = cim;
    cimTd.classList += 'td-cim';

    let megjelenesTd = document.createElement("td");
    megjelenesTd.innerHTML = megjelenes;

    let mufajTd = document.createElement("td");
    mufajTd.innerHTML = mufaj;

    let miliTd = document.createElement("td");
    miliTd.innerHTML = calculateTime(milis); //óra, perc, másodperc -> hh:mm:ss

    cimTd.onclick = () =>{
        if ($('lejatszo') != null){
            $('lejatszo'.remove());
        }

        const lejatszo = document.createElement('audio')
        lejatszo.id = 'lejatszo';
        lejatszo.controls = true;
        lejatszo.autoplay = true;

        const src = document.createElement("source");
        src.src = url;

        lejatszo.appendChild(src);
        $('zene-lejatszo').appendChild(lejatszo);
    }


    tr.appendChild(eloadoTd);
    tr.appendChild(cimTd);
    tr.appendChild(megjelenesTd);
    tr.appendChild(mufajTd);
    tr.appendChild(miliTd);

    $("zenek").appendChild(tr);
}

function calculateTime(milisecs){
    const h = Math.floor(milisecs / (60 * 60 *1000));
    milisecs = milisecs - (h * 60 * 60 *1000);

    const m = Math.floor(milisecs /(60 *1000));
    milisecs = milisecs - (m * 60 *1000);

    const s = Math.floor(milisecs /1000);
    milisecs = milisecs - (s * 1000);
    const ms = milisecs % 1000;
    
    let str = '';

    if (h > 0){
        str += h.toString().padStart(2, '0') + ":";
    }

    str += m.toString().padStart(2, '0') + ":";
    str += s.toString().padStart(2, '0') + ":";
    str += ms.toString().padStart(3, '0');

    return str;
}



$("btn-kereses").addEventListener("click", kereses);
$('input-keresett').addEventListener('keypress', event =>{
    if (event.key == 'Enter'){
        kereses();
    }
});
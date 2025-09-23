const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};


function $(item){
    return document.getElementById(item);
}

function randIdGenerate(){
    return Math.floor(Math.random() * 1025);
}

function createTd(innerHtml){
    const td = document.createElement("td")
    td.innerHTML = innerHtml;
    return td;
}

function generalas(){
    //sprites, other,  drinker front default

    const url = `https://pokeapi.co/api/v2/pokemon/${randIdGenerate()}/`

    fetch(url)
    .then( response => 
        response.json())
    .then(pokemonAdat => {
        
        const talalatdiv = $("talalat-megjelenit");
        talalatdiv.innerHTML = "";

        const Hp = document.createElement("p");
        Hp.id = "hp"
        Hp.innerHTML = `Hp ${pokemonAdat.stats[0].base_stat}`;
        talalatdiv.appendChild(Hp);

        const table = document.createElement("table");
        const tbody = document.createElement("tbody")
        const tr = document.createElement("tr")
        table.appendChild(tbody);
        tbody.appendChild(tr);

        talalatdiv.appendChild(table)

        pokemonAdat.types.forEach(element => {
            const pokemonType = document.createElement("td");
            const typeName = element.type.name;

            pokemonType.innerHTML = typeName;
    
            if (typeColors[typeName]) {
                pokemonType.style.backgroundColor = typeColors[typeName];
                pokemonType.style.color = "white";
                talalatdiv.style.backgroundColor = typeColors[typeName];
            }   
            tr.appendChild(pokemonType);
        });

        const pokemonKep = new Image();
        pokemonKep.src = pokemonAdat.sprites.other["showdown"].front_default;
        pokemonKep.height = 100;
        pokemonKep.classList += "kep";

        const pokemonName = document.createElement("p");
        pokemonName.id = "name"
        pokemonName.innerHTML = `${pokemonAdat.name} (Id: ${pokemonAdat.id})`;


        talalatdiv.appendChild(pokemonName)
        talalatdiv.appendChild(pokemonKep);

        const statTable = document.createElement("table");
        statTable.id = "stat-table"
        const stbody = document.createElement("tbody")
        const str = document.createElement("tr")
        statTable.appendChild(stbody);
        stbody.appendChild(str);
        str.appendChild(createTd(`Atk ${pokemonAdat.stats[1].base_stat}`))
        str.appendChild(createTd(`SpAtk ${pokemonAdat.stats[2].base_stat}`))
        str.appendChild(createTd(`Def ${pokemonAdat.stats[3].base_stat}`))
        str.appendChild(createTd(`SpDef ${pokemonAdat.stats[4].base_stat}`))
        str.appendChild(createTd(`Spd ${pokemonAdat.stats[5].base_stat}`))
        
        
        talalatdiv.appendChild(statTable);
        
    });

}


//console.log(randIdGenerate());


$("btn-generalas").addEventListener("click", generalas);

function osszeAd(a, b){
    return a+b;
}

let osszeAd2 = function(a, b){
    return a+b;
}

let osszead3 = (a, b)=>{
    return a + b;
}

let negyzet = (n) =>{return n*n}

let negyzet2 = n => n*n;

console.log(typeof(negyzet));
console.log(typeof(negyzet(2)));

let alkalmazott = {
    nev: "Tóth Géza",
    eletkor: 28,
    beosztas: "pék"
};

console.log(alkalmazott);
console.log(typeof(alkalmazott));
console.log(alkalmazott.nev);
console.log(alkalmazott["nev"]);
console.log(alkalmazott[1]);
console.log("Hello világ");

let a = [2, 9, 11, -2, 4];

console.log(typeof(a));
console.log(a);
console.log(a[3]);

const c = 3;

const obj = {
    nev: "Béla",
    nem: "férfi"
};

obj.nev = "Jani";

function gombNyomas(szin){
    document.body.style.backgroundColor = szin;
}

document.getElementById("btn").addEventListener("click", ()=>{
    gombNyomas("#00ff00");
})

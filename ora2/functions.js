const autok = ["Ford", "Audi", "Mazda", "Toyota", "Lada", "Renault"];
console.log(autok);
console.log(`A tömb elemszáma: ${autok.length}`);

for (let i = 0; i < autok.length; i++){
    console.log(autok[i]);
}

autok.forEach( (value) => {
    console.log(`asd: ${value}`);
});

autok.push("Chevrolet");
autok.push("BMW");

autok.pop();

console.log(autok);

const szurtautok = autok.filter( (value)=> {
    return value.toLocaleLowerCase().includes('a');
})

console.log(szurtautok);

console.log(autok.sort());
console.log(autok.sort().reverse());

console.log(autok.indexOf("Audi"));
console.log(autok.lastIndexOf("BMW"));

console.log(autok.find( (value)=>{
    return value == "Tesla";
}))

console.log(autok.findIndex( (value)=>{
    return value == "Tesla";
}))

// - - - - - - - - 

let szamok = [9, 122, -3, 5, 78]
/*
1.) fűzzünk hozzá a tömbhöz 10 db véletlen számot [-100, +100] intervallumból
2.) új tömbbe pozitív páros számok válogatása
3.) Döntsük el (true/false, h. tartalmaz-e a tömb 100-nál nagyobb számot
4.) Határozzuk meg, h. melyik a legnagyobb értékű elem
5.) Fűzzünk be egy új számot a tömb elejére
*/

//- - - - - - - - - - - 
//1.)
console.log("Feladat 1: ");
for (let i = 0; i < 10; i++){
    szamok.push(Math.floor(Math.random()*201)-100)
}
console.log(szamok);

//- - - - - - - - - - - 
//2.)
console.log("Feladat 2: ");
const kettes = szamok.filter( (value) =>{
    return value % 2 == 0 && value > 0;
})

console.log(kettes);

//- - - - - - - - - - - 
//3.)
console.log("Feladat 3: ");
console.log(  (szamok.filter( (value) =>{
    return value > 100;
})).length > 0);

console.log("Feladat 3 / 2: ");
console.log(szamok.find( value => value >100) != undefined);

//- - - - - - - - - - - 
//4.)
console.log("Feladat 4: ");
/** 
szamok.sort( (a, b) => a > b? 1:-1);
console.log("A legnagyobb elem: " + szamok[0]);
*/

console.log(Math.max(9, 3, 8, 12, 11, -1, 2, 3, 5))
console.log(Math.max(...szamok)) // ... <- spread operátor :)
//- - - - - - - - - - - 
//5.)
console.log("Feladat 5: ");
szamok = [143, ...szamok];
console.log(szamok);

//- - - - - 
let t1 = [1, 2, 3];
let t2 = [4, 5, 6];
let osszefuzott = [...t1, ...t2];

//irjunk egy fuggvenyt ami berhany szamot ad ossze

function osszead(...szamok){ //rest param
    let sum = 0;
    szamok.forEach(value => {sum += value;});
    return sum;
}

console.log(osszead(2, 3))
console.log(osszead(2, 7, 9, 1))

//úgy megyünk a tömb elemein h. azokból új tömböt hozunk létre

const legUjSzamok = szamok.map(value => value*2 + 1);
console.log(legUjSzamok);

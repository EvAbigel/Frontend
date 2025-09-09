// Az osztály != az objektummal


class Szemely{

    constructor(nev, foglalkozas, szuletesiEv){
        this.nev = nev;
        this.beosztas;
        this.foglalkozas = foglalkozas;
        this.szuletesiEv = szuletesiEv;
    }

    hanyEves(){
        return (new Date()).getFullYear() - this.szuletesiEv;
    }
}

class Alkalmazott extends Szemely{
    #belepesiKod = undefined;
    static bonusz = 10;     //10%;

    constructor(nev, foglalkozas, szuletesiEv, fizetes){
        super(nev, foglalkozas, szuletesiEv);
        this.fizetes = fizetes;
    }

    setBelepesiKod(kod){
        if (typeof(kod) == "number"){
            this.#belepesiKod = kod;
        }
    }

    getBelepesiKod(){
        return this.#belepesiKod;
    }

    set belepesiKod(kod){
        if (typeof(kod) == "number"){
            this.#belepesiKod = kod;
        }
    }
    get belepesiKod(){
        return this.#belepesiKod;
    }

    haviFizetes(){
        if ((new Date()).getMonth() == 11)
            return this.fizetes * (1+(Alkalmazott.bonusz /100));
        return this.fizetes;
    }

}


let sz1 = new Szemely("Tök Ödön", "asztalos", 1989);
console.log(sz1);
console.log(`${sz1.nev} ${sz1.hanyEves()} éves.`);

let bea = new Alkalmazott("Kab Bea", "titkárnő", 2003, 600000);
bea.setBelepesiKod(456789);

console.log(bea);

console.log(`${bea.nev} e havi fizetése: ${bea.haviFizetes()} Ft.`);
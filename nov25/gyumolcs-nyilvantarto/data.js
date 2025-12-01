let GYUMOLCSOK = [
    {
        nev: "alma",
        rosttartalom: 3.6,
        cukortartalom: 10.5
    },
    {
        nev: "paradicsom",
        rosttartalom: 1.8,
        cukortartalom: 2.6
    },
    {
        nev: "őszibarack",
        rosttartalom: 2.3,
        cukortartalom: 8.4
    },
]

export function listazGyumi(){
    return GYUMOLCSOK;
}

export function felvesz(ujGyumi){
    if(ujGyumi.nev == "") return;
    if(GYUMOLCSOK.find(gy => gy.nev == ujGyumi.nev)!= undefined) return;

    GYUMOLCSOK = [...GYUMOLCSOK, ujGyumi];
}

export function torol(gyumolcsNev){
    GYUMOLCSOK = GYUMOLCSOK.filter(gy => gy.nev != gyumolcsNev);
}
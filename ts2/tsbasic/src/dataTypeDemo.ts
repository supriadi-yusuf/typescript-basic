export function dataTypeDemo():void {
    
    let nama: string = "supriadi yusuf";
    console.log({nama});

    let isDead: boolean = false;
    console.log({isDead});

    let user: number = 123;
    // user = "herry"; // error
    console.log({user});

    // tipe data any untuk semua jenis data
    let anyThing: any = "hello"; // any-> any data ( it can receive any data type)

    anyThing=100; // ok
    console.log({anyThing});

    anyThing="hello"; // ok
    console.log({anyThing});

    // array biasa
    let arrBiasa: string[];

    arrBiasa = ["ana","ani","anu"];
    console.log({arrBiasa});

    // array tuple
    let arrTuple: [string, number, boolean];

    arrTuple = ["imran",28,true];
    console.log({arrTuple});

}
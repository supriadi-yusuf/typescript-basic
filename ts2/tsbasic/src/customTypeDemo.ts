export function CustomTypeDemo():void {

    // tipe custom

    // alias
    type WanitaType = string;

    let polwan: WanitaType

     polwan = "ana";

    console.log({polwan});

    // union :  gabuang beberapa tipe data
    let vars: string|number; // string dan number

    vars = "hello"; // ok karena data string
    console.log({vars});

    vars = 1; // ok karena data integer
    console.log({vars});

    // object
    type TemanType = {
        nama: string; // bisa pakai koma atau titik koma, required
        umur: number; // required
        menikah?: boolean // ? berarti optional
    };

    let teman: TemanType;

    teman = {
    nama: "ilham",
    umur: 30,
    menikah: true
    };

    console.log({teman});
}
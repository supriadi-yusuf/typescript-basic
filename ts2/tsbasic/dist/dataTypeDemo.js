"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTypeDemo = void 0;
function dataTypeDemo() {
    let nama = "supriadi yusuf";
    console.log({ nama });
    let isDead = false;
    console.log({ isDead });
    let user = 123;
    // user = "herry"; // error
    console.log({ user });
    // tipe data any untuk semua jenis data
    let anyThing = "hello"; // any-> any data ( it can receive any data type)
    anyThing = 100; // ok
    console.log({ anyThing });
    anyThing = "hello"; // ok
    console.log({ anyThing });
    // array biasa
    let arrBiasa;
    arrBiasa = ["ana", "ani", "anu"];
    console.log({ arrBiasa });
    // array tuple
    let arrTuple;
    arrTuple = ["imran", 28, true];
    console.log({ arrTuple });
}
exports.dataTypeDemo = dataTypeDemo;

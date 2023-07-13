"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTypeDemo = void 0;
function CustomTypeDemo() {
    // tipe custom
    let polwan;
    polwan = "ana";
    console.log({ polwan });
    // union :  gabuang beberapa tipe data
    let vars; // string dan number
    vars = "hello"; // ok karena data string
    console.log({ vars });
    vars = 1; // ok karena data integer
    console.log({ vars });
    let teman;
    teman = {
        nama: "ilham",
        umur: 30,
        menikah: true
    };
    console.log({ teman });
}
exports.CustomTypeDemo = CustomTypeDemo;

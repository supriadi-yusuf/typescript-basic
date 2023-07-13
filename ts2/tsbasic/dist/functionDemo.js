"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionDemo = void 0;
function functionDemo() {
    //! Function biasa
    function create() {
        return 10;
    }
    const createResult = create();
    console.log({ createResult });
    //? Arrow function
    const create2 = () => "hello world";
    const create2Result = create2();
    console.log({ create2Result });
    // no return
    function create3() {
        let a = 1; // we declare type or not
        let b = 2;
        let c = a + b;
        console.log("hello create " + c);
    }
    create3();
    function add(a, b) {
        const c = a + b;
        console.log("hasilnya adalah: " + c);
    }
    add(3, 4);
    function jumlah(a, b) {
        return "${a} ditambah ${b} adalah ${a + b}";
    }
    const hslJumlah = jumlah(3, 4);
    console.log({ hslJumlah });
    function jumlah2(a, b) {
        return `${a} ditambah ${b} adalah: ${a + b}`;
    }
    const hslJumlah2 = jumlah2(3, 4);
    console.log({ hslJumlah2 });
    // type AgeRangeType = 2 | 4 | 8 | 16;
    function printAge(age) {
        console.log({ age });
    }
    printAge(8);
}
exports.functionDemo = functionDemo;

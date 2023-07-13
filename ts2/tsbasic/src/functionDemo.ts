export function functionDemo():void {

    //! Function biasa
    function create(): number{
        return 10;
    }
    const createResult = create();
    console.log({createResult});

    //? Arrow function
    const create2 = ():string => "hello world";
    const create2Result = create2();
    console.log({create2Result});

    // no return
    function create3(): void {
        let a = 1; // we declare type or not
        let b = 2;
        let c = a + b;
        console.log("hello create " + c) ;
    }

    create3();

    function add(a: number, b: number): void {
        const c: number = a + b;
        console.log("hasilnya adalah: " + c);
    }

    add(3,4);

    function jumlah(a: number, b: number): string {
        return "${a} ditambah ${b} adalah ${a + b}";
    }

    const hslJumlah = jumlah(3,4);
    console.log({hslJumlah});

    function jumlah2(a: number, b: number): string {
        return `${a} ditambah ${b} adalah: ${a + b}`;
    }

    const hslJumlah2: string = jumlah2(3,4);
    console.log({hslJumlah2});

    // type AgeRangeType = 2 | 4 | 8 | 16;

    function printAge(age: 2 | 4 | 8 | 16): void {
        console.log({age});
    }

    printAge(8);

}
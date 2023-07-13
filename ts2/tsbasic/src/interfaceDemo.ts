export function InterfaceDemo():void {

    // interface 1 ===
    interface IProcessor {
        brand: string;
        baseModel: string;
        modelName: string;        
    }

    // boleh ditambah field langsung setelah di declare
    interface IProcessor {
        clockSpeed: number;
    }

    function createProcessor(processor: IProcessor):void {
        console.log(`
        brand : ${processor.brand},
        baseModel : ${processor.baseModel},
        modelName : ${processor.modelName},
        clockSpeed : ${processor.clockSpeed}`);
    }

    const processor = {
        brand : "intel",
        baseModel : "core i5",
        modelName : "i5-11350F",
        clockSpeed : 5,
    }

    createProcessor(processor);
    
    // inherit dari interface IProcessor
    interface IAmd extends IProcessor{
        precisionBoost: boolean
    }

    function createProcessorAmd(processor: IAmd):void {
        console.log(`
        brand : ${processor.brand},
        baseModel : ${processor.baseModel},
        modelName : ${processor.modelName},
        clockSpeed : ${processor.clockSpeed},
        precisionBoost : ${processor.precisionBoost} `);
    }

    const processorAmd = {
        brand : "intel",
        baseModel : "core i7",
        modelName : "i5-11350G",
        clockSpeed : 10,
        precisionBoost : false
    }

    createProcessorAmd(processorAmd);

    // interface 2 ===
    interface IMemory {
        capacity: 4 | 8 | 16 | 32; // certain value
    }

    function printMemory(memory: IMemory):void {
        console.log({memory});
    }

    // const memory = {
    //     capacity: 16 // error
    // }

    const memory: IMemory = { // karena mengandung certain value jadi harus disebut tipe
        capacity: 16 // ok karena memory tipenya IMemory
    }

    printMemory(memory);

    // tambahkan field yang hanya boleh diisi nilai tertentu ========
    interface IAmdPlus extends IAmd {
        coreTotal: 2 | 4 | 8 | 16 | "dual core" | "quad core"; // bisa pilih salah satu dari bilang ini
    }

    function createProcessorAmdPlus(processor: IAmdPlus):void {
        console.log(`
        brand : ${processor.brand},
        baseModel : ${processor.baseModel},
        modelName : ${processor.modelName},
        clockSpeed : ${processor.clockSpeed},
        precisionBoost : ${processor.precisionBoost},
        coreTotal : ${processor.coreTotal} `);
    }

    const processorAmdPlus: IAmdPlus = {
        brand : "intel Plus",
        baseModel : "core i8",
        modelName : "i5-11350H",
        clockSpeed : 5,
        coreTotal : 4,
        precisionBoost : true,
    }

    createProcessorAmdPlus(processorAmdPlus);

    const processorAmdPlus2: IAmdPlus = {
        brand : "intel multi core",
        baseModel : "core i9",
        modelName : "i5-11350I",
        clockSpeed : 5,
        coreTotal : "quad core",
        precisionBoost : true,
    }

    createProcessorAmdPlus(processorAmdPlus2);

    interface IMemoryNew extends IMemory {
        discount?: number; // tanda ?  berarti optional
    }

    function printMemoryNew(memory: IMemoryNew):void {
        console.log(`
        capacity : ${memory.capacity},
        discount : ${memory.discount ? memory.discount : "tidak ada discount"}`);
    }

    // const memory = {
    //     capacity: 16 // error
    // }

    const memoryNew: IMemoryNew = { // karena mengandung certain value jadi harus disebut tipe
        capacity: 16 // ok karena memory tipenya IMemory
    }

    printMemoryNew(memoryNew);

    const memoryNew2: IMemoryNew = { // karena mengandung certain value jadi harus disebut tipe
        capacity: 32, // ok karena memory tipenya IMemory
        discount: 50,
    }

    printMemoryNew(memoryNew2);    
}
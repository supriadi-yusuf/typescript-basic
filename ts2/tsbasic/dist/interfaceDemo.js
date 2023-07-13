"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceDemo = void 0;
function InterfaceDemo() {
    function createProcessor(processor) {
        console.log(`
        brand : ${processor.brand},
        baseModel : ${processor.baseModel},
        modelName : ${processor.modelName},
        clockSpeed : ${processor.clockSpeed}`);
    }
    const processor = {
        brand: "intel",
        baseModel: "core i5",
        modelName: "i5-11350F",
        clockSpeed: 5,
    };
    createProcessor(processor);
    function createProcessorAmd(processor) {
        console.log(`
        brand : ${processor.brand},
        baseModel : ${processor.baseModel},
        modelName : ${processor.modelName},
        clockSpeed : ${processor.clockSpeed},
        precisionBoost : ${processor.precisionBoost} `);
    }
    const processorAmd = {
        brand: "intel",
        baseModel: "core i7",
        modelName: "i5-11350G",
        clockSpeed: 10,
        precisionBoost: false
    };
    createProcessorAmd(processorAmd);
    function printMemory(memory) {
        console.log({ memory });
    }
    // const memory = {
    //     capacity: 16 // error
    // }
    const memory = {
        capacity: 16 // ok karena memory tipenya IMemory
    };
    printMemory(memory);
    function createProcessorAmdPlus(processor) {
        console.log(`
        brand : ${processor.brand},
        baseModel : ${processor.baseModel},
        modelName : ${processor.modelName},
        clockSpeed : ${processor.clockSpeed},
        precisionBoost : ${processor.precisionBoost},
        coreTotal : ${processor.coreTotal} `);
    }
    const processorAmdPlus = {
        brand: "intel Plus",
        baseModel: "core i8",
        modelName: "i5-11350H",
        clockSpeed: 5,
        coreTotal: 4,
        precisionBoost: true,
    };
    createProcessorAmdPlus(processorAmdPlus);
    const processorAmdPlus2 = {
        brand: "intel multi core",
        baseModel: "core i9",
        modelName: "i5-11350I",
        clockSpeed: 5,
        coreTotal: "quad core",
        precisionBoost: true,
    };
    createProcessorAmdPlus(processorAmdPlus2);
    function printMemoryNew(memory) {
        console.log(`
        capacity : ${memory.capacity},
        discount : ${memory.discount ? memory.discount : "tidak ada discount"}`);
    }
    // const memory = {
    //     capacity: 16 // error
    // }
    const memoryNew = {
        capacity: 16 // ok karena memory tipenya IMemory
    };
    printMemoryNew(memoryNew);
    const memoryNew2 = {
        capacity: 32,
        discount: 50,
    };
    printMemoryNew(memoryNew2);
}
exports.InterfaceDemo = InterfaceDemo;


// // normal way

// // function createPair(v1: number, v2: string): [number, string] {
// //     return [v1, v2];
// // }


// // const example2 = createPair(42, 42) // error
// // const example3 = createPair(42, "test") // no error



// function createPair<v1Type, v2Type>(v1: v1Type, v2: v2Type): [v1Type, v2Type] {
//     return [v1, v2];
// }
// const example1 = createPair<string, number>('hello', 42) // output ['hello', 42]
// const example2 = createPair<number, number>(42, 44)  // output [42, 44]
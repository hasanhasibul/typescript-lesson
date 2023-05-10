//similarity

let a: any;
a = 1;
a = 'Hasibul';
a = true

let b: any;
b = 1;
b = 'Hasibul';
b = true

// different

const sample = (sample: any) => {
    sample() //any ignore any kinds of type checking 
}

const sample2 = (sample: unknown) => {
    if (typeof (sample) === 'function') {
        sample() //unknown force as to check type
    }
}
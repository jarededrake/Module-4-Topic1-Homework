class Hex {
    constructor(number) {
        this.number = number; 
    }
    valueOf() {
        return this.number.toString(16);
    }
    plus(number) {
        
    }
}

let FF = new Hex(255); 
console.log(FF.toString()); 
FF.valueOf() + 1 == 256; 
let a = new Hex(10);
let b = new Hex(5); 
console.log(a.plus(b).toString());



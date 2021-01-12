//Note: Setters must have exactly one formal parameter.
class square {
    constructor(width){
        this.width = width;
        this.height = this.width;
    }
    get area(){
        return this.height * this.width;
    }
    set area(width){
        this.width = width;
        this.height = this.width;
    }
}

let square1 = new square(5);
console.log(square1.area);
console.log(square1.area = 6);
console.log(square1.area);


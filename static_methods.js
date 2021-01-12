// NOte: static methods does'nt has this refrence.
// Note: static methods does'nt take space in instances.
class square {
    constructor(width){
        this.width = width;
        this.height = this.width;
    }
    static isEqual(obj1,obj2){
        return obj1.height * obj1.width == obj2.height * obj2.width ? true : false;
    }
    // area(num){
    //     console.log('area'+num)
    // }
    area(){
        console.log('area');
    }
}

let square1 = new square(5);
let square2 = new square(4);
console.log(square.isEqual(square1,square2));

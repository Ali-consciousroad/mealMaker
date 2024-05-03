const menu = {
    // private key pairs
    _meal: 25,
    _price: 0,

    set meal(mealToCheck){
        if(typeof(mealToCheck) === "string"){
            return this._meal = mealToCheck;
        }
    },

    set price(priceToCheck){
        if(typeof(priceToCheck) === "number"){
            return this._price = priceToCheck;
        }
    }
}

menu.meal = "fesenjoun";
menu.price = 15;

console.log(menu);

// console.log(student.firstName); // Monica

// // change(set) object property using a setter
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah

// student.changeName = "Maria";

// console.log(student.firstName);

// console.log(menu);
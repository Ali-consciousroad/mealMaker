const menu = {
    // private key pairs
    _meal: "",
    _price: 0,

    set meal(mealToCheck){
        if(typeof(mealToCheck) === "string"){
            this._meal = mealToCheck;
        }
    },

    set price(priceToCheck){
        if(typeof(priceToCheck) === "number"){
            this._price = priceToCheck;
        }
    },

    // Don't check other falsy values like undefined, 0, NaN, "" or false!
    /* get todaysSpecial(){
        if(menu._meal != null && menu._price != null){
            return `Today's Special is ${this._meal} for ${this._price}`
        } 
        else {
            return "Meal or price was not set correctly!";
        }
    } */
    get todaysSpecial(){
        if(this._meal && this._price){
            return `Today's Special is ${this._meal} for ${this._price}`
        } 
        else {
            return "Meal or price was not set correctly!";
        }
    }

}

// Test
// Will give an error
// menu.meal = 5;
// menu.price = "test";

menu.meal = "fesenjoun";
menu.price = 25;

console.log(menu.price);
console.log(menu);
console.log(menu.todaysSpecial);

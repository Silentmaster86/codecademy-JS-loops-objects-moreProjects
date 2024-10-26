const menu = {
  _menu: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return this._price = priceToCheck;
    }
  },

get todaysSpecial() {
  if (this._meal && this._price){
    return `Todays's Meal is ${this._meal} for $${this._price}!`
  } else {
    return `Meal or price not set corectly!`
  }
}

};

menu.meal = "Gnochi and Pizza";
menu.price = 18;

console.log(menu.todaysSpecial);
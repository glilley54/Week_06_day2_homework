const Park = function (name, price, dinoCollection){
    this.name = name;
    this.price = price;
    this.dinoCollection = []

};

Park.prototype.addDinosaur = function (dino) {
    this.dinoCollection.push(dino);
};

Park.prototype.removeDinosaur = function (dino) {
    this.dinoCollection.pop(dino);
};

    module.exports = Park;
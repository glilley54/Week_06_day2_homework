const Park = function (name, price, dinoCollection){
    this.name = name;
    this.price = price;
    this.dinoCollection = []

};

Park.prototype.addDinosaur = function (dino) {
    this.dinoCollection.push(dino);
};


    module.exports = Park;
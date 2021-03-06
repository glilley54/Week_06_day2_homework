const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;

  beforeEach(function () {
    park = new Park('Jurassic Park', 80, 'Herbivors');
    dino1 = new Dinosaur('Stegasauruas', 'Veg', 20)
  });

  it('should have a name',function () {
  const actual = park.name;
  assert.strictEqual(actual,'Jurassic Park');
});

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 80);
  });


  it('should have a collection of dinosaurs', function (){
    const expected = [];
    assert.deepStrictEqual(park.dinoCollection, expected);

  });
   

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dino1)
    const expected = [dino1];
    assert.deepStrictEqual(park.dinoCollection, expected);
  });


  it('should be able to remove a dinosaur from its collection', function (){
    park.removeDinosaur(dino1)
    const expected = [];
    assert.deepStrictEqual(park.dinoCollection, expected);
  });


  // xit('should be able to find the dinosaur that attracts the most visitors', function (){
  //   // park.mostPopularDinosaur(dino)

  


  // xit('should be able to find all dinosaurs of a particular species');


  // xit('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year', function () {
    park.totalvisitorsperyear(dino1);
    const expected = 7300;
    assert.strictEqual(park.totalVisitorsPerYear(), expected);
  });


  // xit('should be able to calculate total revenue for one year');

  });

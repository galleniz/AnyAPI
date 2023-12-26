const Bear = require("../animals/bear");
const Bird = require("../animals/bird");
const Cat = require("../animals/cat");
const Dog = require("../animals/dog");
const Fox = require("../animals/fox");
const Koala = require("../animals/koala");

class Animals {
  constructor(authenticator) {
    this.authenticator = authenticator;
  }

  /**
   * Get a bear image and a cool fact
   *
   * @returns {any} bear
   */
  async bear() {
    const _bear = new Bear(this.authenticator);
    return await _bear.GET();
  }

  /**
   * Get a bird image and a cool fact
   *
   * @returns {any} bird
   */
  async bird() {
    const _bird = new Bird(this.authenticator);
    return await _bird.GET();
  }

  /**
   * Get a cat image and a cool fact
   *
   * @returns {any} cat
   */
  async cat() {
    const _cat = new Cat(this.authenticator);
    return await _cat.GET();
  }

  /**
   * Get a dog image and a cool fact
   *
   * @returns {any} dog
   */
  async dog() {
    const _dog = new Dog(this.authenticator);
    return await _dog.GET();
  }

  /**
   * Get a fox image and a cool fact
   *
   * @returns {any} fox
   */
  async fox() {
    const _fox = new Fox(this.authenticator);
    return await _fox.GET();
  }

  /**
   * Get a koala image and a cool fact
   *
   * @returns {any} koala
   */
  async koala() {
    const _koala = new Koala(this.authenticator);
    return await _koala.GET();
  }
}

module.exports = Animals;

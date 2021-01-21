const { setWorldConstructor, World } = require("@cucumber/cucumber");

class CustomWorld extends World {
  variable = 0;

  constructor(options) {
    super(options)
  }   

  async setTo(number) {
    this.variable = number;
  }

  async incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
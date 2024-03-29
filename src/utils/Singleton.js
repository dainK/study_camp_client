export default class Singleton {
  constructor() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = this;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
}

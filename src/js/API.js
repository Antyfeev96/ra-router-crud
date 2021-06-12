export default class API {
  constructor() {
    this.url = 'http://localhost:7070';
  }

  async read() {
    try {
      this.response = await fetch(`${this.url}/posts`);
      this.result = await this.response.json();
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }
  
};

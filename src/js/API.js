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

  async addMessage(id, content) {
    try {
      await fetch(`${this.url}/posts`, {
        method: 'POST',
        body: JSON.stringify({
          id,
          content,
        })
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteMessage(id) {
    try {
      await fetch(`${this.url}/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id,
        })
      });
    } catch (error) {
      console.log(error);
    }
  }
  
};

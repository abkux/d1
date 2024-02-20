import axios from "axios";

class d1 {
  constructor(accountId, token, databaseId) {
    this.accountId = accountId;
    this.token = token;
    this.databaseId = databaseId || null;
  }

  async query(query) {
    try {
      const options = {
        method: "POST",
        url: `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/d1/database/${this.databaseId}/query`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          sql: query,
        },
      };

      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async createDatabase(name) {
    try {
      const options = {
        method: 'POST',
        url: `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/d1/database`,
        headers: {'Content-Type': 'application/json', Authorization:  `Bearer ${this.token}` },
        data: { name: name }
      };

      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async deleteDatabase(databaseId) {
    try {

      const options = {
        method: 'DELETE',
        url: `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/d1/database/${databaseId}`,
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${this.token}`}
      };

      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async getDatabase(databaseId) {
    try {

      const options = {
        method: 'GET',
        url: `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/d1/database/${databaseId}`,
        headers: {'Content-Type': 'application/json', Authorization:  `Bearer ${this.token}`}
      };

      const response = await axios.request(options);
      return response;

    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async listDatabase() {
    try {

      const options = {
        method: 'GET',
        url: `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/d1/database`,
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${this.token}`}
      };

      const response = await axios.request(options);
      return response;

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export { d1 };


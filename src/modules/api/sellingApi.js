import axios from 'axios';

const BASE_URL = '/api/selling';

export class SellingApi {
  static async createSelling(data) {
    try {
      const response = await axios.post(`${BASE_URL}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getSellings() {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async deleteSelling(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

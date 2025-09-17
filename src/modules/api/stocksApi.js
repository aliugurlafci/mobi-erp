import axios from 'axios';

const BASE_URL = '/api/stocks';

// Fetch money prices
export const getMoneyPrices = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/money-prices`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching money prices: ' + error.message);
  }
};

import axios from 'axios';

const BASE_URL = '/api/suppliers';

// Fetch all suppliers
export const getSuppliers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching suppliers: ' + error.message);
  }
};

// Fetch a single supplier by ID
export const getSupplierById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching supplier: ' + error.message);
  }
};

// Create a new supplier
export const createSupplier = async (supplierData) => {
  try {
    const response = await axios.post(`${BASE_URL}`, supplierData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating supplier: ' + error.message);
  }
};

// Update an existing supplier
export const updateSupplier = async (id, supplierData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, supplierData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating supplier: ' + error.message);
  }
};

// Delete a supplier
export const deleteSupplier = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting supplier: ' + error.message);
  }
};

import apiClient from "./api-client";

export class ProductPricesApi {
  static handleApiError(error) {
    const errorMessage = error.response?.data?.message || error.message || "Unknown error occurred";
    console.error("PRODUCT PRICES API Error:", errorMessage);
    return { success: false, error: errorMessage };
  }

  static async getAllPrices(apiKey) {
    try {
      const response = await apiClient.get("/product-prices", {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (typeof response.data === "object") {
        return { success: true, data: response.data };
      } else {
        throw new Error("Invalid response format: Expected JSON");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  static async getPriceById(priceId, apiKey) {
    try {
      const response = await apiClient.get(`/product-prices/${priceId}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (typeof response.data === "object") {
        return { success: true, data: response.data };
      } else {
        throw new Error("Invalid response format: Expected JSON");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  static async createPrice(priceData, apiKey) {
    try {
      const response = await apiClient.post("/product-prices", priceData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (typeof response.data === "object") {
        return { success: true, data: response.data };
      } else {
        throw new Error("Invalid response format: Expected JSON");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  static async updatePrice(priceId, priceData, apiKey) {
    try {
      const response = await apiClient.put(`/product-prices/${priceId}`, priceData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (typeof response.data === "object") {
        return { success: true, data: response.data };
      } else {
        throw new Error("Invalid response format: Expected JSON");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  static async deletePrice(priceId, apiKey) {
    try {
      const response = await apiClient.delete(`/product-prices/${priceId}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (response.status === 204) {
        return { success: true, message: "Price deleted successfully" };
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }
}

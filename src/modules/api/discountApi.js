import apiClient from "./api-client";

export class DiscountApi {
  static handleApiError(error) {
    const errorMessage = error.response?.data?.message || error.message || "Unknown error occurred";
    console.error("DISCOUNT API Error:", errorMessage);
    return { success: false, error: errorMessage };
  }

  static async getAllDiscounts(apiKey) {
    try {
      const response = await apiClient.get("/discounts", {
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

  static async getDiscountById(discountId, apiKey) {
    try {
      const response = await apiClient.get(`/discounts/${discountId}`, {
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

  static async createDiscount(discountData, apiKey) {
    try {
      const response = await apiClient.post("/discounts", discountData, {
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

  static async updateDiscount(discountId, discountData, apiKey) {
    try {
      const response = await apiClient.put(`/discounts/${discountId}`, discountData, {
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

  static async deleteDiscount(discountId, apiKey) {
    try {
      const response = await apiClient.delete(`/discounts/${discountId}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (response.status === 204) {
        return { success: true, message: "Discount deleted successfully" };
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }
}

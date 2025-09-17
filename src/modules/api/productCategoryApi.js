import apiClient from "./api-client";

export class ProductCategoryApi {
  static handleApiError(error) {
    const errorMessage = error.response?.data?.message || error.message || "Unknown error occurred";
    console.error("PRODUCT CATEGORY API Error:", errorMessage);
    return { success: false, error: errorMessage };
  }

  static async getAllCategories(apiKey) {
    try {
      const response = await apiClient.get("/product-categories", {
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

  static async getCategoryById(categoryId, apiKey) {
    try {
      const response = await apiClient.get(`/product-categories/${categoryId}`, {
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

  static async createCategory(categoryData, apiKey) {
    try {
      const response = await apiClient.post("/product-categories", categoryData, {
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

  static async updateCategory(categoryId, categoryData, apiKey) {
    try {
      const response = await apiClient.put(`/product-categories/${categoryId}`, categoryData, {
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

  static async deleteCategory(categoryId, apiKey) {
    try {
      const response = await apiClient.delete(`/product-categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (response.status === 204) {
        return { success: true, message: "Category deleted successfully" };
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }
}

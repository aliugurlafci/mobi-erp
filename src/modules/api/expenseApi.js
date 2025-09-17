import apiClient from "./api-client";

export class ExpenseApi {
  static handleApiError(error) {
    const errorMessage = error.response?.data?.message || error.message || "Unknown error occurred";
    console.error("MASRAFF API Error:", errorMessage);
    return { success: false, error: errorMessage };
  }

  static async getAllExpenses(apiKey) {
    try {
      const response = await apiClient.get("/expenses", {
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

  static async getExpenseById(expenseId, apiKey) {
    try {
      const response = await apiClient.get(`/expenses/${expenseId}`, {
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

  static async createExpense(expenseData, apiKey) {
    try {
      const response = await apiClient.post("/expenses", expenseData, {
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

  static async updateExpense(expenseId, expenseData, apiKey) {
    try {
      const response = await apiClient.put(`/expenses/${expenseId}`, expenseData, {
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

  static async deleteExpense(expenseId, apiKey) {
    try {
      const response = await apiClient.delete(`/expenses/${expenseId}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (response.status === 204) {
        return { success: true, message: "Expense deleted successfully" };
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }
}
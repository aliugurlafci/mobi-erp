import apiClient from "./api-client";

export class StaffApi {
  static handleApiError(error) {
    const errorMessage = error.response?.data?.message || error.message || "Unknown error occurred";
    console.error("STAFF API Error:", errorMessage);
    return { success: false, error: errorMessage };
  }

  static async getAllStaff(apiKey) {
    try {
      const response = await apiClient.get("/staff", {
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

  static async getStaffById(staffId, apiKey) {
    try {
      const response = await apiClient.get(`/staff/${staffId}`, {
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

  static async createStaff(staffData, apiKey) {
    try {
      const response = await apiClient.post("/staff", staffData, {
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

  static async updateStaff(staffId, staffData, apiKey) {
    try {
      const response = await apiClient.put(`/staff/${staffId}`, staffData, {
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

  static async deleteStaff(staffId, apiKey) {
    try {
      const response = await apiClient.delete(`/staff/${staffId}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (response.status === 204) {
        return { success: true, message: "Staff deleted successfully" };
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }
}

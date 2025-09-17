import apiClient from "./api-client";

export class AuthApi {
  static handleApiError(error) {
    const errorMessage = error.response?.data?.message || error.message || "Unknown error occurred";
    console.error("USER API Error:", errorMessage);
    return { success: false, error: errorMessage };
  }

  static async loginUser(username, password, apiKey) {
    try {
      const response = await apiClient.post(
        "/auth-login",
        { username, password },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (typeof response.data === "object") {
        return { success: true, data: response.data };
      } else {
        throw new Error("Invalid response format: Expected JSON");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  static async registerUser(username, password, email, apiKey) {
    try {
      const response = await apiClient.post(
        "/auth-register",
        { username, password, email },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (typeof response.data === "object") {
        return { success: true, data: response.data };
      } else {
        throw new Error("Invalid response format: Expected JSON");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  static async forgotPassword(email, apiKey) {
    try {
      const response = await apiClient.post(
        "/auth-forgot-password",
        { email },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (typeof response.data === "object") {
        return { success: true, data: response.data };
      } else {
        throw new Error("Invalid response format: Expected JSON");
      }
    } catch (error) {
      return this.handleApiError(error);
    }
  }
}




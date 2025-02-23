import { ENDPOINTS } from "../../config/environment";

export const getAuthToken = () => localStorage.getItem("authToken");

export const isAuthenticated = () => !!getAuthToken();

export const signin = async (email, password) => {
  const response = await fetch(ENDPOINTS.SIGN_IN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status == 404) {
    throw new Error("User not exist!");
  }

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Invalid credentials");
  }

  const data = await response.json();

  if (!data.token) {
    throw new Error("No token received from server");
  }
  
  localStorage.setItem("authToken", data.token.split(":")[0]);
  data.token=null;
  localStorage.setItem("user", JSON.stringify(data));

  return data;
};

export const signup = async (name, email, password) => {
  const response = await fetch(ENDPOINTS.SIGN_UP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error signing up");
  }
  window.location.href = "/sign-in";
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  window.location.href = "/sign-in";
};

export const checkAuth = async () => {
  const token = getAuthToken();
  if (!token) return false;

  try {
    const response = await fetch(ENDPOINTS.CHECK_AUTH, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.ok;
  } catch (error) {
    console.error("Authentication verification error:", error);
    return false;
  }
};

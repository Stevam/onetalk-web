import { getAuthToken } from "../auth/authService";
import { ENDPOINTS } from "../../config/environment";

const handleUnauthorized = (response) => {
  if (response.status === 401) {
    window.location.href = "/sign-in";
    return [];
  }
  return null;
};

export const getFriendsList = async () => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await fetch(ENDPOINTS.FRIENDS_LIST, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const unauthorized = handleUnauthorized(response);
    if (unauthorized) return unauthorized;

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error fetching friends list");
    }

    return response.status !== 204 ? await response.json() : [];
  } catch (error) {
    console.error("Error fetching friends:", error);
    return [];
  }
};

export const removeFriend = async (email) => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await fetch(ENDPOINTS.REMOVE_FRIEND(email), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const unauthorized = handleUnauthorized(response);
    if (unauthorized) return unauthorized;

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error removing friend");
    }

  } catch (error) {
    console.error("Error removing friend:", error);
    throw error;
  }
};

export const inviteFriend = async (email) => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await fetch(ENDPOINTS.INVITE_FRIEND(email), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const unauthorized = handleUnauthorized(response);
    if (unauthorized) return unauthorized;

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error sending friend invite");
    }

  } catch (error) {
    console.error("Error sending friend invite:", error);
    throw error;
  }
};

export const acceptRequest = async (email) => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await fetch(ENDPOINTS.ACCEPT_REQUEST(email), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const unauthorized = handleUnauthorized(response);
    if (unauthorized) return unauthorized;

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error accepting friend request");
    }

  } catch (error) {
    console.error("Error accepting friend request:", error);
    throw error;
  }
};

export const declineRequest = async (email) => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await fetch(ENDPOINTS.DECLINE_REQUEST(email), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const unauthorized = handleUnauthorized(response);
    if (unauthorized) return unauthorized;

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error declining friend request");
    }

  } catch (error) {
    console.error("Error declining friend request:", error);
    throw error;
  }
};

export const getInvites = async () => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await fetch(ENDPOINTS.GET_INVITES, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const unauthorized = handleUnauthorized(response);
    if (unauthorized) return unauthorized;

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error fetching friend requests");
    }

    return response.status !== 204 ? await response.json() : [];
  } catch (error) {
    console.error("Error fetching friend requests:", error);
    return [];
  }
};

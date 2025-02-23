import { ENDPOINTS } from "../../config/environment";
import { getAuthToken } from "../auth/authService";

export const saveConversation = async (participant1, participant2) => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  const payload = {
      participant1,
      participant2,
  };

  const response = await fetch(ENDPOINTS.SAVE_CONVERSATION, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
  });

  if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to save conversation");
  }

  const data = await response.json();
  return data;
};

export const getUserConversations = async (userId) => {
    const token = getAuthToken();
    if (!token) throw new Error("User not authenticated");

    const response = await fetch(ENDPOINTS.GET_USER_CONVERSATIONS, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to get conversations of user.");
    }

    const data = await response.json();
    return data;
};

export const getConversation = async (conversationId) => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  const response = await fetch(ENDPOINTS.GET_CONVERSATION(conversationId), {
      method: "GET",
      headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
      },
  });

  if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error on get conversation");
  }

  const data = await response.json();
  return data;
};

export const getConversationByFriend = async (friendId) => {
  const token = getAuthToken();
  if (!token) throw new Error("User not authenticated");

  const response = await fetch(ENDPOINTS.GET_USER_CONVERSATION_BY_FRIEND(friendId), {
      method: "GET",
      headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
      },
  });

  if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error on get friend conversation.");
  }

  if (response.status === 204) {
    return null;
  }

  const data = await response.json();
  return data;
};

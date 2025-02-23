import { ENDPOINTS } from "../../config/environment";
import { getAuthToken } from "../auth/authService";

export const saveMessage = async (message) => {
    const token = getAuthToken();
    if (!token) throw new Error("User not authenticated");

    const response = await fetch(ENDPOINTS.SAVE_MESSAGE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed on save message");
    }
};

export const getMessagesByConversation = async (conversationId) => {
    const token = getAuthToken();
    if (!token) throw new Error("User not authenticated");

    const response = await fetch(ENDPOINTS.GET_MESSAGE_BY_CONVERSATION_ID(conversationId), {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error on get message by conversation.");
    }

    const data = await response.json();
    return data;
};

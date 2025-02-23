const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const WS_URL = import.meta.env.VITE_WS_URL;

export const ENDPOINTS = {
  // FRIENDSHIP
  FRIENDS_LIST: `${API_BASE_URL}/friendship`,
  REMOVE_FRIEND: (email) => `${API_BASE_URL}/friendship/remove-friend?email=${email}`,
  INVITE_FRIEND: (email) => `${API_BASE_URL}/friendship/send-invite?email=${email}`,
  ACCEPT_REQUEST: (email) => `${API_BASE_URL}/friendship/accept-invite?email=${email}`,
  DECLINE_REQUEST: (email) => `${API_BASE_URL}/friendship/reject-invite?email=${email}`,
  // AUTH
  GET_INVITES: `${API_BASE_URL}/friendship/invites`,
  SIGN_IN: `${API_BASE_URL}/auth/sign-in`,
  SIGN_UP: `${API_BASE_URL}/auth/sign-up`,
  CHECK_AUTH: `${API_BASE_URL}/auth/authenticated`,
  // MESSAGE
  SAVE_MESSAGE: `${API_BASE_URL}/message`,
  GET_MESSAGE_BY_CONVERSATION_ID: (conversationId) => `${API_BASE_URL}/message/${conversationId}`,
  // CONVERSATION
  SAVE_CONVERSATION: `${API_BASE_URL}/conversation`,
  GET_USER_CONVERSATIONS: `${API_BASE_URL}/conversation`,
  GET_CONVERSATION: (conversationId) =>  `${API_BASE_URL}/conversation/${conversationId}`,
  GET_USER_CONVERSATION_BY_FRIEND: (friendId) => `${API_BASE_URL}/conversation//friends/${friendId}/conversation`,
  //WEBSOCKET
  WEBSOCKET_URL: `${WS_URL}/chat`,
};

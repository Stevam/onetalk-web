const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  FRIENDS_LIST: `${API_BASE_URL}/friendship`,
  REMOVE_FRIEND: (email) => `${API_BASE_URL}/friendship/remove-friend?email=${email}`,
  INVITE_FRIEND: (email) => `${API_BASE_URL}/friendship/send-invite?email=${email}`,
  ACCEPT_REQUEST: (email) => `${API_BASE_URL}/friendship/accept-invite?email=${email}`,
  DECLINE_REQUEST: (email) => `${API_BASE_URL}/friendship/reject-invite?email=${email}`,
  GET_INVITES: `${API_BASE_URL}/friendship/invites`,
  SIGN_IN: `${API_BASE_URL}/auth/sign-in`,
  SIGN_UP: `${API_BASE_URL}/auth/sign-up`,
  CHECK_AUTH: `${API_BASE_URL}/auth/authenticated`,
};

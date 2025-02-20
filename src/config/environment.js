const API_BASE_URL = "https://onetalk-service.fly.dev";
const API_BASE_URL_LOCAL = "http://localhost:8080";

export const ENDPOINTS = {
  FRIENDS_LIST: `${API_BASE_URL_LOCAL}/friendship`,
  REMOVE_FRIEND: (email) => `${API_BASE_URL_LOCAL}/friendship/remove-friend?email=${email}`,
  INVITE_FRIEND: (email) => `${API_BASE_URL_LOCAL}/friendship/send-invite?email=${email}`,
  ACCEPT_REQUEST: (email) => `${API_BASE_URL_LOCAL}/friendship/accept-invite?email=${email}`,
  DECLINE_REQUEST: (email) => `${API_BASE_URL_LOCAL}/friendship/reject-invite?email=${email}`,
  GET_INVITES: `${API_BASE_URL_LOCAL}/friendship/invites`,
  SIGN_IN: `${API_BASE_URL_LOCAL}/auth/sign-in`,
  SIGN_UP: `${API_BASE_URL_LOCAL}/auth/sign-up`,
  CHECK_AUTH: `${API_BASE_URL_LOCAL}/auth/authenticated`,
};

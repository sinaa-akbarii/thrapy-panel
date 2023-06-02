import axios from "axios";
export const BaseUrl = "https://api.playloh.com/api/admin";
export const AuthBaseUrl = "https://auth.playloh.com/api";
export const playerBaseUrl = "https://api.playloh.com/api";


export const BaseApi = axios.create({
  baseURL: BaseUrl,
});

export const accountBaseApi = axios.create({
  baseURL: AuthBaseUrl,
});

export const playerBaseApi = axios.create({
  baseURL: playerBaseUrl,
});

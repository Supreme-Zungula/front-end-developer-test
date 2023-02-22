import axios from "axios";
import { request } from "./request";

export function getUserList() {
  axios.get("/users");
  return request({
    url: "/users",
    method: "get",
  });
}

export function getUserById(id) {
  return request({
    url: `/users/${id}`,
    method: "get",
  });
}

export function getUserByUsername(username) {
  return request({
    url: `/users`,
    method: "get",
    data: { username },
  });
}

export function createUser(data) {
  return request({
    url: "/users",
    method: "post",
    data: data,
  });
}

export function updateUser(id, data) {
  return request({
    method: "put",
    url: `/users/${id}`,
    data: data,
  });
}

export function deleteUser(id) {
  return request({
    method: "delete",
    url: `/users/${id}`,
  });
}

import axios from "axios";
import { request } from "./request";

export function getTodoList() {
  axios.get("/todos");
  return request({
    url: "/todos",
    method: "get",
  });
}

export function getTodoItem(id) {
  return request({
    url: `/todos/${id}`,
    method: "get",
  });
}

export function createTodoItem(data) {
  return request({
    url: "/todos",
    method: "post",
    data: data,
  });
}

export function updateTodoItem(id, data) {
  return request({
    method: "put",
    url: `/todos/${id}`,
    data: data,
  });
}

export function deleteTodoItem(id) {
  return request({
    method: "delete",
    url: `/todos/${id}`,
  });
}

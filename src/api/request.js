import axios from "axios";

/**
 * Runs a request a to the back-end using the given request data.
 * @param {Object} request request data
 */
export function request(request) {
  if (request && request.method) {
    switch (request.method.toLowerCase()) {
      case "get":
        return getRequest(request);
      case "post":
        return postRequest(request);
      case "put":
        return updateRequest(request);
      case "delete":
        return deleteRequest(request);
      default:
        break;
    }
  } else {
    console.error(`ERROR: Incorrect request.`);
  }
}

// GET request
function getRequest(request) {
  if (request && request.params) {
    return axios.get(request.url, {
      params: request.params,
    });
  }
  return axios.get(request.url);
}

// POST request
function postRequest(request) {
  if (request && request.data) {
    return axios.post(request.url, request.data);
  } else {
    console.error(
      `ERROR: Incorrect on ${request.method} request: ${request.url}`
    );
  }
}

// PUT request
function updateRequest(request) {
  if (request && request.method && request.data) {
    return axios.put(request.url, request.data);
  } else {
    console.error(
      `ERROR: Incorrect on ${request.method} request: ${request.url}`
    );
  }
}

// DELETE request
function deleteRequest(request) {
  if (request) {
    return axios.delete(request.url);
  } else {
    console.error(
      `ERROR: Incorrect on ${request.method} request: ${request.url}`
    );
  }
}

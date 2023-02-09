# To-do List CRUD API

Note: In the parent folder front-end-developer-test run node api/mock.js this will run the api locally on http://localhost:3000/ use this as prefix to all your endpoints given below.

## Endpoints

### Get All To-dos

GET /todos

#### Response

Status: 200 OK
Content-Type: application/json

{
"data": [
{
"id": 1,
"title": "Take out the trash",
"completed": false
},
{
"id": 2,
"title": "Do the dishes",
"completed": true
}
]
}

### Get a To-do

GET /todos/:id

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | integer | The unique identifier of the to-do item |

#### Response

Status: 200 OK
Content-Type: application/json
{
"data": {
"id": 1,
"title": "Take out the trash",
"completed": false
}
}

### Create a To-do

POST /todos

#### Request Body

Content-Type: application/json
{
"title": "Buy groceries",
"completed": false
}

#### Response

Status: 201 Created
Content-Type: application/json
{
"data": {
"id": 3,
"title": "Buy groceries",
"completed": false
}
}

### Update a To-do

PUT /todos/:id

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | integer | The unique identifier of the to-do item |

#### Request Body

Content-Type: application/json
{
"title": "Buy milk",
"completed": false
}

#### Response

Status: 200 OK
Content-Type: application/json
{
"data": {
"id": 3,
"title": "Buy milk",
"completed": false
}
}

### Delete a To-do

DELETE /todos/:id

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | integer | The unique identifier of the to-do item |

#### Response

Status: 200 OK
Content-Type: application/json
{
"data": [
{
"id": 1,
"title": "Take out the trash",
"completed": false
},
{
"id": 2,
"title": "Do the dishes",
"completed": true
}
]
}

This documentation describes the endpoints for the to-do list CRUD API, including the HTTP methods, request parameters, and response formats. The API allows you to perform create, read, update, and delete operations on to-do items.

In the parent folder front-end-developer-test run node api/mock.js this will run the api locally on http://localhost:3000/ use this as prefix to all your endpoints given above.

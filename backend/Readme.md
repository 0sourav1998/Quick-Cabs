# User Registration API

This API endpoint allows users to register by providing their details such as first name, last name, email, and password. It validates input data, checks for existing users, hashes passwords securely, and stores the user information in the database.

---

## Endpoint: `/api/v1/user/register`

---

## Request Body

The API expects a JSON object in the request body with the following fields:

| Field       | Type     | Required | Description                                  |
|-------------|----------|----------|----------------------------------------------|
| `firstName` | `string` | Yes      | User's first name (minimum 3 characters).    |
| `lastName`  | `string` | No       | User's last name (optional).                 |
| `email`     | `string` | Yes      | User's email address (must be unique).       |
| `password`  | `string` | Yes      | User's password (minimum 6 characters).      |

---

## Response

### Success Response

- **Status Code:** `200`
- **Response Body:**
  ```json
  {
    "success": true,
    "message": "User Created Successfully",
    "user": {
      "_id": "unique_user_id",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "user@example.com"
    }
  }


# Login Route Documentation

## Endpoint: `/api/v1/user/login`

This endpoint allows registered users to log in by providing their email and password. Upon successful authentication, the server generates a **JWT token** for session management.

---

## HTTP Method: `POST`

---

## Request Headers

| **Key**        | **Value**           | **Description**             |
|----------------|---------------------|-----------------------------|
| `Content-Type` | `application/json`   | Specifies the request body format |

---

## Request Body

The request body must be in JSON format and contain the following fields:

| **Field**    | **Type**   | **Required** | **Validation**                             | **Description**                         |
|--------------|------------|--------------|--------------------------------------------|-----------------------------------------|
| `email`      | `string`   | Yes          | Must be a valid email                     | The email of the user                   |
| `password`   | `string`   | Yes          | Must be at least 6 characters             | The password of the user                |

### Success Response

- **Status Code:** `200`
- **Response Body:**
  ```json
  {
    "success": true,
    "message": "Logged In Successfully",
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6wdnqfkwifjwsmskmfoiwejfijawwmdlkDA1Zjk2MjIzZWEiLCJpYXQiOjE3MzI3MTk5MjMsImV4cCI6MTczMjcyMzUyM30.cqYsZ2iO50_3KOHUCE8TK9_VV8CBVWi0Qtd_vnuWbxk"
  }


# Get User Profile

This endpoint fetches the profile data of the logged-in user. It requires a valid JWT token for authentication.

---

## Endpoint: `/api/v1/user/me`

### HTTP Method: `GET`

---

## Authentication

- **Required**: A valid JWT token.
- The token should be sent either via:
  - **Cookies**: `token`
  - **Authorization Header**: `Bearer <token>`

---

## Response

### Success Response

- **Status Code**: `200`
- **Response Body**:
  ```json
  {
    "success": true,
    "user": {
      "_id": "user-id-here",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }


# Captain Registration API Documentation


### HTTP Method: `POST`

## Endpoint: `POST api/v1/captain/register`

This endpoint registers a new captain along with their vehicle details.

### Request Body
The request body should contain the following fields:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "color": "red",
  "plate": "ABC1234",
  "capacity": 4,
  "vehicleType": "car"
}

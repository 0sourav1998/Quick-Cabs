# User Registration API

This API endpoint allows users to register by providing their details such as first name, last name, email, and password. It validates input data, checks for existing users, hashes passwords securely, and stores the user information in the database.

---

## Endpoint

### `POST /register`

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

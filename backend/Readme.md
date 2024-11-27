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

### Example Request Body:
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}



### `GET /api/v1/user/me`

- **Description**: Fetches the logged-in user's profile data.
- **Authentication**: Requires a valid JWT token. The token must be sent in the request either via:
  - Cookies: `token`
  - Authorization header: `Bearer <token>`
  
- **Response**:
  - **Success (200)**:
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
    ```

  - **Error (401)**: If the token is missing, expired, or invalid:
    ```json
    {
      "success": false,
      "message": "User Not Authenticated"
    }
    ```

## Middleware

### `isAuthenticated`

- **Description**: A middleware function that checks if the user is authenticated by verifying the JWT token.
- **Usage**: This middleware is used to protect the `/me` route, ensuring only authenticated users can access their profile.

```javascript

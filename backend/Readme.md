# User Registration API

This API endpoint allows users to register by providing their details such as first name, last name, email, and password. It validates input data, checks for existing users, securely hashes passwords, and stores the user information in the database.

## Endpoint: `/api/v1/user/register`

### HTTP Method: `POST`

### Request Body

- **Fields**:
  - **`firstName`**: User's first name (minimum 3 characters, required).
  - **`lastName`**: User's last name (optional).
  - **`email`**: User's email address (unique and required).
  - **`password`**: User's password (minimum 6 characters, required).

### Success Response

- **Status Code**: `200`
- **Message**: *User Created Successfully*.
- **Data**: User details including ID, full name, and email.

---

# User Login API

This API allows registered users to log in by providing their email and password. On successful login, it generates a JWT token for session management.

## Endpoint: `/api/v1/user/login`

### HTTP Method: `POST`

### Request Body

- **Fields**:
  - **`email`**: User's email address (required and valid).
  - **`password`**: User's password (minimum 6 characters, required).

### Success Response

- **Status Code**: `200`
- **Message**: *Logged In Successfully*.
- **Token**: JWT token for authentication.

---

# Get User Profile

Fetches the profile details of the logged-in user. Requires authentication via a valid JWT token.

## Endpoint: `/api/v1/user/me`

### HTTP Method: `GET`

### Authentication

- **Required**: A valid JWT token.
- **Methods**:
  - **Cookies**: Token stored as a cookie.
  - **Authorization Header**: *Bearer <token>*.

### Success Response

- **Status Code**: `200`
- **Message**: *Profile Retrieved Successfully*.
- **Data**: User details including ID, full name, and email.

---

# Captain Registration API

This API registers a new captain along with their vehicle details.

## Endpoint: `/api/v1/captain/register`

### HTTP Method: `POST`

### Request Body

- **Fields**:
  - **`firstName`**: Captain's first name (minimum 3 characters, required).
  - **`lastName`**: Captain's last name (optional).
  - **`email`**: Captain's email address (unique and required).
  - **`password`**: Captain's password (minimum 6 characters, required).
  - **`color`**: Vehicle color (required).
  - **`plate`**: Vehicle plate number (required).
  - **`capacity`**: Vehicle capacity (required).
  - **`vehicleType`**: Type of vehicle (e.g., car, bike; required).

### Success Response

- **Status Code**: `200`
- **Message**: *Captain Created Successfully*.

---

# Captain Login API

Enables captains to log in by providing their email and password. Returns a JWT token upon successful login.

## Endpoint: `/api/v1/captain/login`

### HTTP Method: `POST`

### Request Body

- **Fields**:
  - **`email`**: Captain's email address (required).
  - **`password`**: Captain's password (minimum 6 characters, required).

### Success Response

- **Status Code**: `200`
- **Message**: *Logged In Successfully*.
- **Token**: JWT token for authentication.

---

# Get Captain Profile

Fetches the profile details of the logged-in captain. Requires authentication via a valid JWT token.

## Endpoint: `/api/v1/captain/me`

### HTTP Method: `GET`

### Authentication

- **Required**: A valid JWT token.
- **Methods**:
  - **Cookies**: Token stored as a cookie.
  - **Authorization Header**: *Bearer <token>*.

### Success Response

- **Status Code**: `200`
- **Message**: *Profile Retrieved Successfully*.
- **Data**: Captain details including ID, full name, email, and vehicle details.

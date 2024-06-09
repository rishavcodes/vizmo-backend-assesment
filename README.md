# vizmo-backend-assesment

# Setting Up and Testing the Blog API Project

This guide will walk you through setting up the Blog API project on your local system from GitHub and testing all the API endpoints using Postman.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system
- MongoDB installed and running locally

### Clone the Repository
1. Open a terminal or command prompt.
2. Clone the repository from GitHub using the following command:
```bash
   git clone https://github.com/rishavcodes/vizmo-backend-assesment.git
   ```

### Install Dependencies
1. Navigate to the project directory:
```bash
   cd vizmo-backend-assesment
   ```
2. Install project dependencies using npm:
```bash
   npm install
   ```
### Start the Server
1. Start the backend server using the following command:
```bash
   nodemon server.js
   ```
This will start the server on port 5000 by default.

### Connect to MongoDB
1. Make sure MongoDB is running locally on the default port (27017).
2. If MongoDB is running on a different port or host, update the connection string in the `app.js` file.

## Testing API Endpoints

### Authentication Endpoints
1. **User Registration**
- Method: POST
- URL: http://localhost:5000/api/auth/register
- Body: {"username": "your_username", "email": "your_email@example.com", "password": "your_password"}
- Expected Response: Status 201 Created if successful.

2. **User Login**
- Method: POST
- URL: http://localhost:5000/api/auth/login
- Body: {"email": "your_email@example.com", "password": "your_password"}
- Expected Response: Status 200 OK with a JWT token.

### Blog Post Endpoints
1. **Get All Blog Posts**
- Method: GET
- URL: http://localhost:5000/api/blogs
- Headers: Include the JWT token obtained from the login endpoint as the Authorization header.
- Expected Response: Status 200 OK with a list of blog posts.

2. **Get Details of Single Blog Post**
- Method: GET
- URL: http://localhost:5000/api/blogs/:id (Replace :id with the ID of an existing blog post)
- Headers: Include the JWT token obtained from the login endpoint as the Authorization header.
- Expected Response: Status 200 OK with the details of the specified blog post.

3. **Create a New Blog Post**
- Method: POST
- URL: http://localhost:5000/api/blogs
- Headers: Include the JWT token obtained from the login endpoint as the Authorization header.
- Body: {"title": "New Blog Post", "content": "Your blog content", "images": ["image1.jpg", "image2.jpg"]}
- Expected Response: Status 201 Created if successful.

4. **Update an Existing Blog Post**
- Method: PUT
- URL: http://localhost:5000/api/blogs/:id (Replace :id with the ID of an existing blog post)
- Headers: Include the JWT token obtained from the login endpoint as the Authorization header.
- Body: Include the fields you want to update.
- Expected Response: Status 200 OK if successful.

5. **Delete an Existing Blog Post**
- Method: DELETE
- URL: http://localhost:5000/api/blogs/:id (Replace :id with the ID of an existing blog post)
- Headers: Include the JWT token obtained from the login endpoint as the Authorization header.
- Expected Response: Status 200 OK if successful.

6. **Get Filtered List of Posts**
- Method: GET
- URL: http://localhost:5000/api/blogs/filter?title=keyword&author=authorId
- Headers: Include the JWT token obtained from the login endpoint as the Authorization header.
- Expected Response: Status 200 OK with a filtered list of blog posts.


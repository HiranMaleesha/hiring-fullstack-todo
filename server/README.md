# TODO App Backend

This is the Node.js/Express backend for the TODO application, providing RESTful API endpoints for managing TODO items with MongoDB persistence.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## Features

- ✅ RESTful API for TODO CRUD operations
- 🔄 MongoDB integration with Mongoose schemas
- 🛡️ Error handling and validation
- 🔒 Environment-based configuration
- 📊 Automatic timestamps (createdAt, updatedAt)

## API Endpoints

| Method | Endpoint              | Description                      |
|--------|-----------------------|----------------------------------|
| GET    | `/api/todos`          | Get all TODO items               |
| POST   | `/api/todos`          | Create a new TODO item           |
| PUT    | `/api/todos/:id`      | Update a TODO (title/description)|
| PATCH  | `/api/todos/:id/done` | Toggle the `done` status         |
| DELETE | `/api/todos/:id`      | Delete a TODO                    |

### Request/Response Examples

#### Create Todo
```json
POST /api/todos
{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs"
}
```

#### Update Todo
```json
PUT /api/todos/:id
{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs, cheese"
}
```

#### Toggle Done
```json
PATCH /api/todos/:id/done
{
  "done": true
}
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### MongoDB Setup

#### Option 1: Local MongoDB
1. Install MongoDB Community Server
2. Start MongoDB service
3. Update `.env` file with:
   ```
   MONGODB_URI=mongodb://localhost:27017/todoapp
   ```

#### Option 2: MongoDB Atlas (Cloud)
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Get your connection string
3. Update `.env` file with your Atlas URI:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todoapp?retryWrites=true&w=majority
   ```

### Running the Server

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Server will run on `http://localhost:5000`

## Project Structure

```
server/
├── models/
│   └── Todo.js          # Mongoose schema
├── routes/
│   └── todos.js         # API routes
├── .env                 # Environment variables
├── server.js            # Main server file
└── package.json
```

## Environment Variables

Create a `.env` file in the server directory:

```
MONGODB_URI=mongodb://localhost:27017/todoapp
PORT=5000
```

## Assumptions and Limitations

- Uses default MongoDB port (27017) for local setup
- No authentication implemented (as per requirements)
- Error responses follow REST conventions
- Timestamps are in UTC
- Description field is optional
- Title is required and trimmed
- Concurrent updates may overwrite each other (no versioning)

## Development

- Uses `nodemon` for auto-restart during development
- CORS enabled for frontend communication
- JSON middleware for parsing request bodies
- Mongoose connection with error handling
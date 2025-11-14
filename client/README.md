# TODO App Frontend

This is the React frontend for the TODO application, built with modern tools for a clean and responsive user interface.

## Tech Stack

- **React 19** - Frontend framework
- **Axios** - HTTP client for API requests

## Features

- ✅ View all TODO items in a clean list
- ➕ Add new TODOs with title and optional description
- ✏️ Edit existing TODOs inline
- ✅ Toggle TODO completion status with checkboxes
- ❌ Delete TODOs with confirmation
- 🔄 Optimistic UI updates for smooth interactions
- 📱 Responsive design
- ⚠️ Error handling and loading states

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running (see server README)

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically reload when you make changes.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/           # UI components
│   │   │   ├── button.js
│   │   │   ├── input.js
│   │   │   └── checkbox.js
│   │   ├── TodoForm.js   # Form for adding todos
│   │   ├── TodoItem.js   # Individual todo item
│   │   └── TodoList.js   # List of todos
│   ├── utils/
│   │   └── cn.js         # Utility for class names
│   ├── App.js            # Main app component
│   └── index.js          # App entry point
└── package.json
```

## API Integration

The frontend communicates with the backend via RESTful API endpoints:

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `PATCH /api/todos/:id/done` - Toggle completion
- `DELETE /api/todos/:id` - Delete todo

## Assumptions and Limitations

- backend is running on `http://localhost:5000`
- Uses optimistic updates; errors are handled gracefully
- Form validation ensures title is required
- No authentication implemented (as per requirements)

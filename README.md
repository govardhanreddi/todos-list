<<<<<<< HEAD
# React + Vite

# To-Do List App

## Description

A simple and efficient To-Do list application built with React and Redux. This app allows users to add, view, edit, and delete tasks. Tasks are persisted in local storage to ensure data is saved between sessions.

## Features

- Add new tasks
- View existing tasks
- Edit tasks
- Delete tasks
- Persistent storage using local storage

## Installation

### Prerequisites

- Node.js (>=14.0.0)
- npm (>=6.14.0)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/govardhanreddi/todo-list.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd todo-list
    cd todo
    ```

3. **Install dependencies:**

    ```bash
    npm install

    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

5. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

    Usage
Adding a Task

Enter a task description in the input field and click "Add" or press Enter to add a new task to the list.

Viewing Tasks

All added tasks are displayed in a list format. Each task shows a checkbox for marking completion and buttons for editing or deleting.

Editing a Task

Click the "Edit" button next to a task to modify its description.

Deleting a Task

Click the "Delete" button next to a task to remove it from the list.

File Structure
Here’s a brief overview of the project structure:

index.html: The main HTML file.
src/
  App.jsx: Main application component.
  App.css: Global styles.
  main.jsx: Entry point for the React application.
  components/
      TaskInput.jsx: Component for adding new tasks.
      TaskList.jsx: Component for displaying tasks.
  redux/
     actions.js: Redux actions for managing tasks.
     reducers.js: Redux reducers for handling actions.
     store.js: Configures the Redux store.

## Usage

- **Add Task:** Enter a task in the input field and click "Add" or press Enter.
- **Edit Task:** Click the edit button next to a task to modify its text.
- **Delete Task:** Click the delete button next to a task to remove it from the list.
- **Mark as Completed:** Check the checkbox to mark a task as completed. The text will be struck through.

## Configuration

No special configuration is needed for this app. It uses local storage to persist tasks.

## Testing

To run tests, use:

```bash
npm test


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# todos-list
>>>>>>> origin/main

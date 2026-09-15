# TaskBuddy 📝

TaskBuddy is a simple **Task Management Application** built using React.js. It allows users to create and manage tasks, track their completion progress, and maintain completed task history.

## Features

### 1. Task Input Form

* Add new tasks using an input field and submit button.
* Prevent empty tasks from being added.
* Prevent duplicate tasks from being added.
* Validate user input before creating a task.

### 2. Task List

* Display tasks dynamically.
* Show task names and their completion status.
* Mark tasks as completed.
* Undo completed tasks.
* Delete tasks.
* Completed tasks are visually different from pending tasks.

### 3. Persistent Data

TaskBuddy uses the browser's **localStorage** to store tasks.

This allows tasks to remain available even after:

* Refreshing the browser
* Closing and reopening the browser

### 4. Progress Tracker

A visual progress tracker displays the percentage of completed tasks.

The progress updates automatically whenever a task is:

* Completed
* Marked as pending
* Added
* Deleted

Example:

```text
Progress: 60%
```

### 5. Task History

Completed tasks can be viewed in the task history.

The history allows users to manage previously completed tasks by providing options to:

* Restore a completed task
* Delete a task from history

### 6. Search Tasks

Users can search for tasks using the search field.

The task list updates dynamically based on the search input.

### 7. Dark and Light Mode

TaskBuddy supports both dark and light themes to provide a comfortable user experience.

### 8. Responsive Design

The application is designed to work across different screen sizes, including:

* Desktop
* Tablet
* Mobile

---

## Technologies Used

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React.js     | Frontend framework            |
| JavaScript   | Application logic             |
| HTML         | Application structure         |
| CSS          | Styling and responsive design |
| localStorage | Persistent task storage       |
| Git          | Version control               |
| GitHub       | Source code management        |
| Vite         | Development and build tool    |
| Node.js      | JavaScript runtime            |
| npm          | Package management            |

---

## Project Structure

```text
TaskBuddy/
│
├── public/
│
├── src/
│   ├── Components/
│   │   ├── Taskform.jsx
│   │   ├── TaskList.jsx
│   │   └── ProgressTrack.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## How the Application Works

### Adding a Task

1. Enter a task in the input field.
2. Select the required priority and category.
3. Click the **Add Task** button.
4. The application validates the input.
5. The task is added to the task list.
6. The task is saved to localStorage.

### Completing a Task

Click the **Complete** button to mark a task as completed.

The application then:

* Updates the task status.
* Changes the appearance of the completed task.
* Updates the progress tracker.
* Saves the updated data to localStorage.

### Restoring a Task

A completed task can be restored from task history.

Restoring a task changes its status back to pending.

### Deleting a Task

Users can delete tasks from the task list or remove tasks from task history.

### Searching Tasks

Enter a task name in the search box.

TaskBuddy filters the task list dynamically based on the entered text.

---

## Data Persistence

TaskBuddy uses the browser's `localStorage` API.

Tasks are stored using:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the application loads, the stored tasks are retrieved using:

```javascript
JSON.parse(localStorage.getItem("tasks"));
```

This allows the application to maintain task data between browser sessions.

---

## Installation

### Prerequisites

Make sure the following tools are installed:

* Node.js
* npm
* Git
* A modern web browser
* Visual Studio Code or another preferred code editor

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the Project

```bash
cd TaskBuddy
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start on the local development server.

Open the URL displayed in the terminal in Google Chrome or another modern browser.

---

## Available Commands

### Start Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Git and GitHub

Git is used for version control and GitHub is used to maintain the project's source code.

Basic Git workflow:

```bash
git add .
git commit -m "Add TaskBuddy features"
git push
```

---

## Deployment

The application can be deployed using platforms such as:

* GitHub Pages
* Netlify

After deployment, the live application URL can be added below.

**Live Demo:** `<your-deployed-project-url>`

**GitHub Repository:** `<your-github-repository-url>`


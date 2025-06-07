-- Complete database schema for the planner app
-- Drop tables if they exist (for development)
DROP TABLE IF EXISTS resources;
DROP TABLE IF EXISTS docs;
DROP TABLE IF EXISTS goals;
DROP TABLE IF EXISTS ideas;
DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS users;

-- Users table (for future auth implementation)
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#16A349',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Tasks table
CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  done INTEGER DEFAULT 0,
  due_date TEXT,
  priority INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Notes table
CREATE TABLE notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Ideas table
CREATE TABLE ideas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  starred INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Goals table
CREATE TABLE goals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'planned',
  target_date TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Docs table
CREATE TABLE docs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Resources table
CREATE TABLE resources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  label TEXT NOT NULL,
  url TEXT,
  description TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Insert some sample data
INSERT INTO projects (name, description, color) VALUES 
  ('My First Project', 'A sample project to get started', '#16A349'),
  ('Website Redesign', 'Complete overhaul of company website', '#3B82F6'),
  ('Mobile App', 'Development of new mobile application', '#8B5CF6');

INSERT INTO tasks (project_id, name, description, priority) VALUES 
  (1, 'Set up development environment', 'Install all necessary tools and dependencies', 1),
  (1, 'Create project structure', 'Organize files and folders', 0),
  (2, 'Design wireframes', 'Create initial layout concepts', 2),
  (2, 'Conduct user research', 'Interview potential users', 1);

INSERT INTO notes (project_id, title, content) VALUES 
  (1, 'Getting Started', 'This is my first note in the planner app. Remember to keep track of all important information here.'),
  (2, 'Design Ideas', 'Consider using a modern, minimalist approach with plenty of white space.');

INSERT INTO ideas (project_id, title, description, starred) VALUES 
  (1, 'Add real-time collaboration', 'Allow multiple users to work on the same project simultaneously', 1),
  (2, 'Dark mode support', 'Implement a toggle for dark/light theme', 0),
  (3, 'Offline functionality', 'Enable app to work without internet connection', 1);
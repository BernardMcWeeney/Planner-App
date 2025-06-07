// src/types.ts - Complete type definitions for all data models

export interface User {
  id: number;
  email: string;
  password_hash: string;
  created_at: string;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  color: string;
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: number;
  project_id: number;
  name: string;
  description?: string;
  done: number;
  due_date?: string;
  priority: number; // 0 = low, 1 = medium, 2 = high
  created_at: string;
}

export interface Note {
  id: number;
  project_id: number;
  title?: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Idea {
  id: number;
  project_id: number;
  title: string;
  description?: string;
  starred: number;
  created_at: string;
}

export interface Goal {
  id: number;
  project_id: number;
  title: string;
  description?: string;
  status: 'planned' | 'in_progress' | 'completed';
  target_date?: string;
  created_at: string;
}

export interface Doc {
  id: number;
  project_id: number;
  title: string;
  content: string;
  type?: string;
  created_at: string;
}

export interface Resource {
  id: number;
  project_id: number;
  label: string;
  url?: string;
  description?: string;
  created_at: string;
}

// Utility types for forms
export type CreateProject = Omit<Project, 'id' | 'created_at' | 'updated_at'>;
export type CreateTask = Omit<Task, 'id' | 'created_at'>;
export type CreateNote = Omit<Note, 'id' | 'created_at' | 'updated_at'>;
export type CreateIdea = Omit<Idea, 'id' | 'created_at'>;
export type CreateGoal = Omit<Goal, 'id' | 'created_at'>;
export type CreateDoc = Omit<Doc, 'id' | 'created_at'>;
export type CreateResource = Omit<Resource, 'id' | 'created_at'>;

// Priority helper
export const PRIORITY_LABELS = {
  0: 'Low',
  1: 'Medium', 
  2: 'High'
} as const;

export const PRIORITY_COLORS = {
  0: 'text-green-600',
  1: 'text-yellow-600',
  2: 'text-red-600'
} as const;

// Goal status helper
export const GOAL_STATUS_LABELS = {
  planned: 'Planned',
  in_progress: 'In Progress',
  completed: 'Completed'
} as const;

export const GOAL_STATUS_COLORS = {
  planned: 'bg-gray-100 text-gray-800',
  in_progress: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800'
} as const;
import type { D1Database } from '@cloudflare/workers-types';

type Counts = { projects: number; tasks: number; tasksTodo: number; overdue: number };

export const getCounts = (db: D1Database): Counts => {
  const q = (sql: string) => db.prepare(sql).first<{ c: number }>().c ?? 0;
  return {
    projects:  q('SELECT COUNT(*) AS c FROM projects'),
    tasks:     q('SELECT COUNT(*) AS c FROM tasks'),
    tasksTodo: q('SELECT COUNT(*) AS c FROM tasks WHERE done = 0'),
    overdue:   q(`SELECT COUNT(*) AS c FROM tasks WHERE done = 0 AND due_date IS NOT NULL AND due_date < datetime('now')`)
  };
};

export const getRecentProjects = (db: D1Database, limit = 5) =>
  db.prepare('SELECT * FROM projects ORDER BY updated_at DESC LIMIT ?').bind(limit).all().results;
/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
  try {
    // Get database connection
    const db = platform?.env?.DB;
    
    if (!db) {
      // Return empty data if no database (e.g., during development)
      return {
        stats: {
          totalProjects: 0,
          openTasks: 0,
          completedTasks: 0,
          overdueTasks: 0,
          dueSoon: 0
        },
        recentProjects: [],
        recentTasks: [],
        recentNotes: []
      };
    }

    // Fetch all statistics in parallel
    const [
      projectsResult,
      tasksResult,
      overdueResult,
      dueSoonResult,
      recentProjectsResult,
      recentTasksResult,
      recentNotesResult
    ] = await Promise.all([
      // Total projects
      db.prepare("SELECT COUNT(*) as count FROM projects").first(),
      
      // Task statistics
      db.prepare(`
        SELECT 
          COUNT(*) as total,
          SUM(CASE WHEN done = 1 THEN 1 ELSE 0 END) as completed,
          SUM(CASE WHEN done = 0 THEN 1 ELSE 0 END) as open
        FROM tasks
      `).first(),
      
      // Overdue tasks
      db.prepare(`
        SELECT COUNT(*) as count 
        FROM tasks 
        WHERE done = 0 
          AND due_date IS NOT NULL 
          AND date(due_date) < date('now')
      `).first(),
      
      // Due soon (next 7 days)
      db.prepare(`
        SELECT COUNT(*) as count 
        FROM tasks 
        WHERE done = 0 
          AND due_date IS NOT NULL 
          AND date(due_date) >= date('now')
          AND date(due_date) <= date('now', '+7 days')
      `).first(),
      
      // Recent projects (last 6)
      db.prepare(`
        SELECT p.*, 
          (SELECT COUNT(*) FROM tasks WHERE project_id = p.id) as task_count,
          (SELECT COUNT(*) FROM tasks WHERE project_id = p.id AND done = 0) as open_task_count
        FROM projects p
        ORDER BY p.updated_at DESC, p.created_at DESC
        LIMIT 6
      `).all(),
      
      // Recent tasks with project names
      db.prepare(`
        SELECT t.*, p.name as project_name, p.color as project_color
        FROM tasks t
        LEFT JOIN projects p ON t.project_id = p.id
        ORDER BY t.created_at DESC
        LIMIT 10
      `).all(),
      
      // Recent notes with project info
      db.prepare(`
        SELECT n.*, p.name as project_name
        FROM notes n
        LEFT JOIN projects p ON n.project_id = p.id
        ORDER BY n.updated_at DESC
        LIMIT 5
      `).all()
    ]);

    return {
      stats: {
        totalProjects: projectsResult?.count || 0,
        openTasks: tasksResult?.open || 0,
        completedTasks: tasksResult?.completed || 0,
        overdueTasks: overdueResult?.count || 0,
        dueSoon: dueSoonResult?.count || 0
      },
      recentProjects: recentProjectsResult?.results || [],
      recentTasks: recentTasksResult?.results || [],
      recentNotes: recentNotesResult?.results || []
    };
  } catch (error) {
    console.error('Dashboard load error:', error);
    
    // Return safe defaults on error
    return {
      stats: {
        totalProjects: 0,
        openTasks: 0,
        completedTasks: 0,
        overdueTasks: 0,
        dueSoon: 0
      },
      recentProjects: [],
      recentTasks: [],
      recentNotes: []
    };
  }
}
import { error, fail } from '@sveltejs/kit';

/**
 * Loads all data associated with a single project to create the "workspace".
 * @type {import('./$types').PageServerLoad}
 */
export async function load({ params, platform }) {
  const projectId = params.id;

  // Fetch the main project
  const project = await platform.env.DB.prepare(
    "SELECT * FROM projects WHERE id = ?"
  ).bind(projectId).first();

  if (!project) {
    throw error(404, 'Project not found');
  }

  // Fetch all related items in parallel for efficiency
  const [tasks, notes, ideas, goals, docs, resources] = await Promise.all([
    platform.env.DB.prepare("SELECT * FROM tasks WHERE project_id = ? ORDER BY created_at DESC").bind(projectId).all(),
    platform.env.DB.prepare("SELECT * FROM notes WHERE project_id = ? ORDER BY updated_at DESC").bind(projectId).all(),
    platform.env.DB.prepare("SELECT * FROM ideas WHERE project_id = ? ORDER BY created_at DESC").bind(projectId).all(),
    platform.env.DB.prepare("SELECT * FROM goals WHERE project_id = ? ORDER BY created_at DESC").bind(projectId).all(),
    platform.env.DB.prepare("SELECT * FROM docs WHERE project_id = ? ORDER BY created_at DESC").bind(projectId).all(),
    platform.env.DB.prepare("SELECT * FROM resources WHERE project_id = ? ORDER BY created_at DESC").bind(projectId).all(),
  ]);

  // Return everything as props to the page
  return {
    project,
    tasks: tasks.results,
    notes: notes.results,
    ideas: ideas.results,
    goals: goals.results,
    docs: docs.results,
    resources: resources.results,
  };
}

/**
 * Contains all form actions for the project workspace.
 * Each action is uniquely named to handle different data models.
 * @type {import('./$types').Actions}
 */
export const actions = {
  // =================================================================
  // --- Project Actions ---
  // =================================================================
  updateProject: async ({ request, params, platform }) => {
    const projectId = params.id;
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
      await platform.env.DB.prepare(
        "UPDATE projects SET name = ?, description = ?, color = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
      ).bind(data.name, data.description, data.color, projectId).run();
      return { success: true, message: 'Project updated.' };
    } catch (e) {
      console.error(e);
      return fail(500, { data, error: "Could not update project." });
    }
  },

  // =================================================================
  // --- Task Actions ---
  // =================================================================
  createTask: async ({ request, platform }) => {
    const formData = await request.formData();
    const data = {
        project_id: formData.get('project_id'),
        name: formData.get('name'),
        description: formData.get('description'),
        due_date: formData.get('due_date') || null,
        priority: formData.get('priority'),
    };
    if (!data.name) return fail(400, { data, error: "Task name is required." });

    try {
      await platform.env.DB.prepare(
        "INSERT INTO tasks (project_id, name, description, due_date, priority) VALUES (?, ?, ?, ?, ?)"
      ).bind(data.project_id, data.name, data.description, data.due_date, data.priority).run();
      return { success: true };
    } catch (e) {
      console.error(e);
      return fail(500, { data, error: "Could not create task." });
    }
  },
  updateTask: async ({ request, url, platform }) => {
    const taskId = url.searchParams.get('id');
    const formData = await request.formData();
    const data = {
        name: formData.get('name'),
        description: formData.get('description'),
        done: formData.get('done') ? 1 : 0,
        due_date: formData.get('due_date') || null,
        priority: formData.get('priority'),
    };
    if (!taskId) return fail(400, { data, error: "Task ID not provided." });

    try {
      await platform.env.DB.prepare(
        "UPDATE tasks SET name = ?, description = ?, done = ?, due_date = ?, priority = ? WHERE id = ?"
      ).bind(data.name, data.description, data.done, data.due_date, data.priority, taskId).run();
      return { success: true };
    } catch (e) {
      console.error(e);
      return fail(500, { data, error: "Could not update task." });
    }
  },
  deleteTask: async ({ request, platform }) => {
    const id = (await request.formData()).get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM tasks WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (e) {
      return fail(500, { error: 'Failed to delete task' });
    }
  },
  toggleTask: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');
    const currentStatusIsDone = formData.get('done') === '1';
    
    try {
      await platform.env.DB.prepare(
        "UPDATE tasks SET done = ? WHERE id = ?"
      ).bind(currentStatusIsDone ? 0 : 1, id).run();
      return { success: true, newStatus: !currentStatusIsDone }; 
    } catch (e) {
      console.error(e);
      return fail(500, { error: 'Failed to toggle task status.' });
    }
  },

  // =================================================================
  // --- Note Actions ---
  // =================================================================
  createNote: async ({ request, platform }) => {
    const formData = await request.formData();
    const data = {
        project_id: formData.get('project_id'),
        title: formData.get('title'),
        content: formData.get('content'),
    };
    if (!data.content) return fail(400, { data, error: "Note content cannot be empty." });

    try {
      await platform.env.DB.prepare(
        "INSERT INTO notes (project_id, title, content, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)"
      ).bind(data.project_id, data.title, data.content).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not create note." });
    }
  },
  updateNote: async ({ request, url, platform }) => {
    const noteId = url.searchParams.get('id');
    const formData = await request.formData();
    const data = {
        title: formData.get('title'),
        content: formData.get('content'),
    };
    if (!noteId) return fail(400, { data, error: "Note ID not provided." });

    try {
      await platform.env.DB.prepare(
        "UPDATE notes SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
      ).bind(data.title, data.content, noteId).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not update note." });
    }
  },
  deleteNote: async ({ request, platform }) => {
    const id = (await request.formData()).get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM notes WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (e) {
      return fail(500, { error: 'Failed to delete note' });
    }
  },

  // =================================================================
  // --- Idea Actions ---
  // =================================================================
  createIdea: async ({ request, platform }) => {
    const formData = await request.formData();
    const data = {
        project_id: formData.get('project_id'),
        title: formData.get('title'),
        description: formData.get('description'),
    };
    if (!data.title) return fail(400, { data, error: "Idea title is required." });

    try {
        await platform.env.DB.prepare(
            "INSERT INTO ideas (project_id, title, description) VALUES (?, ?, ?)"
        ).bind(data.project_id, data.title, data.description).run();
        return { success: true };
    } catch(e) {
        return fail(500, { data, error: "Could not create idea." });
    }
  },
  updateIdea: async ({ request, url, platform }) => {
    const ideaId = url.searchParams.get('id');
    const formData = await request.formData();
    const data = {
        title: formData.get('title'),
        description: formData.get('description'),
        starred: formData.get('starred') ? 1 : 0,
    };
    if (!ideaId) return fail(400, { data, error: "Idea ID not provided." });

    try {
      await platform.env.DB.prepare(
        "UPDATE ideas SET title = ?, description = ?, starred = ? WHERE id = ?"
      ).bind(data.title, data.description, data.starred, ideaId).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not update idea." });
    }
  },
  deleteIdea: async ({ request, platform }) => {
    const id = (await request.formData()).get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM ideas WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (e) {
      return fail(500, { error: 'Failed to delete idea' });
    }
  },
  toggleIdeaStarred: async ({ request, platform }) => {
    const formData = await request.formData();
    const id = formData.get('id');
    const currentStatusIsStarred = formData.get('starred') === '1';
    
    try {
      await platform.env.DB.prepare(
        "UPDATE ideas SET starred = ? WHERE id = ?"
      ).bind(currentStatusIsStarred ? 0 : 1, id).run();
      return { success: true }; 
    } catch (e) {
      console.error(e);
      return fail(500, { error: 'Failed to toggle idea star.' });
    }
  },

  // =================================================================
  // --- Goal Actions ---
  // =================================================================
  createGoal: async ({ request, platform }) => {
    const formData = await request.formData();
    const data = {
        project_id: formData.get('project_id'),
        title: formData.get('title'),
        description: formData.get('description'),
        status: formData.get('status'),
        target_date: formData.get('target_date') || null,
    };
    if (!data.title) return fail(400, { data, error: "Goal title is required." });

    try {
      await platform.env.DB.prepare(
        "INSERT INTO goals (project_id, title, description, status, target_date) VALUES (?, ?, ?, ?, ?)"
      ).bind(data.project_id, data.title, data.description, data.status, data.target_date).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not create goal." });
    }
  },
  updateGoal: async ({ request, url, platform }) => {
    const goalId = url.searchParams.get('id');
    const formData = await request.formData();
    const data = {
        title: formData.get('title'),
        description: formData.get('description'),
        status: formData.get('status'),
        target_date: formData.get('target_date') || null,
    };
    if (!goalId) return fail(400, { data, error: "Goal ID not provided." });

    try {
      await platform.env.DB.prepare(
        "UPDATE goals SET title = ?, description = ?, status = ?, target_date = ? WHERE id = ?"
      ).bind(data.title, data.description, data.status, data.target_date, goalId).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not update goal." });
    }
  },
  deleteGoal: async ({ request, platform }) => {
    const id = (await request.formData()).get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM goals WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (e) {
      return fail(500, { error: 'Failed to delete goal' });
    }
  },

  // =================================================================
  // --- Docs Actions ---
  // =================================================================
  createDoc: async ({ request, platform }) => {
    const formData = await request.formData();
    const data = {
        project_id: formData.get('project_id'),
        title: formData.get('title'),
        content: formData.get('content'),
        type: formData.get('type'),
    };
    if (!data.title || !data.content) return fail(400, { data, error: "Doc title and content are required." });

    try {
      await platform.env.DB.prepare(
        "INSERT INTO docs (project_id, title, content, type) VALUES (?, ?, ?, ?)"
      ).bind(data.project_id, data.title, data.content, data.type).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not create doc." });
    }
  },
  updateDoc: async ({ request, url, platform }) => {
    const docId = url.searchParams.get('id');
    const formData = await request.formData();
    const data = {
        title: formData.get('title'),
        content: formData.get('content'),
        type: formData.get('type'),
    };
    if (!docId) return fail(400, { data, error: "Doc ID not provided." });

    try {
      await platform.env.DB.prepare(
        "UPDATE docs SET title = ?, content = ?, type = ? WHERE id = ?"
      ).bind(data.title, data.content, data.type, docId).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not update doc." });
    }
  },
  deleteDoc: async ({ request, platform }) => {
    const id = (await request.formData()).get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM docs WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (e) {
      return fail(500, { error: 'Failed to delete doc' });
    }
  },

  // =================================================================
  // --- Resource Actions ---
  // =================================================================
  createResource: async ({ request, platform }) => {
    const formData = await request.formData();
    const data = {
        project_id: formData.get('project_id'),
        label: formData.get('label'),
        url: formData.get('url'),
        description: formData.get('description'),
    };
    if (!data.label) return fail(400, { data, error: "Resource label is required." });

    try {
      await platform.env.DB.prepare(
        "INSERT INTO resources (project_id, label, url, description) VALUES (?, ?, ?, ?)"
      ).bind(data.project_id, data.label, data.url, data.description).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not create resource." });
    }
  },
  updateResource: async ({ request, url, platform }) => {
    const resourceId = url.searchParams.get('id');
    const formData = await request.formData();
    const data = {
        label: formData.get('label'),
        url: formData.get('url'),
        description: formData.get('description'),
    };
    if (!resourceId) return fail(400, { data, error: "Resource ID not provided." });

    try {
      await platform.env.DB.prepare(
        "UPDATE resources SET label = ?, url = ?, description = ? WHERE id = ?"
      ).bind(data.label, data.url, data.description, resourceId).run();
      return { success: true };
    } catch (e) {
      return fail(500, { data, error: "Could not update resource." });
    }
  },
  deleteResource: async ({ request, platform }) => {
    const id = (await request.formData()).get('id');
    try {
      await platform.env.DB.prepare("DELETE FROM resources WHERE id = ?").bind(id).run();
      return { success: true };
    } catch (e) {
      return fail(500, { error: 'Failed to delete resource' });
    }
  },
};
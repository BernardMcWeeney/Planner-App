<script>
  /** @type {import('./$types').PageData} */
  export let data;
  const { project } = data;
</script>

<div class="container mx-auto p-4">
  <div class="mb-4">
    <a href="/projects" class="text-blue-500 hover:underline">&larr; Back to Projects</a>
  </div>
  <div class="border p-4 rounded-lg shadow-sm">
    <h1 class="text-3xl font-bold mb-2" style="color: {project.color}">{project.name}</h1>
    <p class="text-gray-700 mb-4">{project.description}</p>
    <div class="text-sm text-gray-500">
      <p>Created: {new Date(project.created_at).toLocaleDateString()}</p>
      <p>Last Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
    </div>
     <div class="flex justify-end mt-4">
          <a href="/projects/{project.id}/edit" class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Edit Project</a>
      </div>
  </div>
</div>
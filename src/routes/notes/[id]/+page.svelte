<script>
  /** @type {import('./$types').PageData} */
  export let data;
  const { note } = data;
</script>

<div class="container mx-auto p-4 max-w-2xl">
  <div class="mb-4">
    <a href="/notes" class="text-blue-500 hover:underline">&larr; Back to Notes</a>
  </div>
  <div class="border p-6 rounded-lg shadow-sm bg-white">
    <h1 class="text-3xl font-bold mb-2">{note.title}</h1>
    <div class="text-sm text-gray-500 mb-4">
      <p>Last Updated: {new Date(note.updated_at).toLocaleString()}</p>
    </div>
    <div class="prose max-w-none">
        <p class="whitespace-pre-wrap">{note.content}</p>
    </div>
     <div class="flex justify-end mt-6">
          <a href="/notes/{note.id}/edit" class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Edit Note</a>
      </div>
  </div>
</div>
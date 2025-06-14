<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Edit, Trash2 } from 'lucide-svelte';
	import { marked } from 'marked'; // This will now work after npm install

  export let note: any;
  const dispatch = createEventDispatcher();

	let renderedContent = '';
	$: if (note.content) renderedContent = marked(note.content);
</script>

<div class="bg-surface dark:bg-neutral-900 border border-default rounded-xl p-5 group relative transition-colors duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
	<div class="absolute top-3 right-3 flex items-center gap-1">
		<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-text transition-opacity" on:click={() => dispatch('edit', { note })} title="Edit note">
			<Edit class="w-4 h-4" />
		</button>
		</div>

	<h3 class="font-semibold text-text mb-2">{note.title || 'Untitled Note'}</h3>
	<div class="prose prose-sm dark:prose-invert text-muted max-w-none text-ellipsis overflow-hidden h-20">
		{@html renderedContent}
	</div>
	<p class="text-xs text-muted/70 mt-4 pt-4 border-t border-default">{new Date(note.updated_at).toLocaleString()}</p>
</div>
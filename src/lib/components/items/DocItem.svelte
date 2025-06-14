<script lang="ts">
	import { enhance } from '$app/forms';
	import { Edit, Trash2, FileText } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	export let doc: any;
	const dispatch = createEventDispatcher();
	let showDeleteConfirm = false;
</script>

<div class="flex items-start gap-4 p-4 bg-surface dark:bg-neutral-900 border border-default rounded-xl group transition-colors duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
	<FileText class="w-5 h-5 mt-1 text-muted flex-shrink-0" />
	
	<div class="flex-1 min-w-0">
		<p class="font-medium text-text">{doc.title}</p>
		<p class="text-sm text-muted line-clamp-2">{doc.content}</p>
	</div>

	<div class="flex items-center gap-1">
		{#if doc.type}
			<span class="text-xs px-2 py-0.5 rounded-full font-medium bg-neutral-200 dark:bg-neutral-700 text-muted mr-2 hidden sm:block">
				{doc.type}
			</span>
		{/if}
		{#if showDeleteConfirm}
			<span class="text-xs text-muted mr-2">Sure?</span>
			<form method="POST" action="?/deleteDoc" use:enhance={() => {showDeleteConfirm = false; return async ({update}) => update({reset: false});}}>
				<input type="hidden" name="id" value={doc.id} />
				<button type="submit" class="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg" title="Confirm delete"><Trash2 class="w-4 h-4"/></button>
			</form>
			<button class="p-2 text-muted hover:bg-neutral-500/10 rounded-lg" on:click={() => showDeleteConfirm = false} title="Cancel delete">Cancel</button>
		{:else}
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-text" on:click={() => dispatch('edit', { doc })} title="Edit document">
				<Edit class="w-4 h-4" />
			</button>
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-rose-500" on:click={() => showDeleteConfirm = true} title="Delete document">
				<Trash2 class="w-4 h-4" />
			</button>
		{/if}
	</div>
</div>
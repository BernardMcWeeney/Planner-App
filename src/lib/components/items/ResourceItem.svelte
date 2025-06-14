<script lang="ts">
	import { enhance } from '$app/forms';
	import { Edit, Trash2, Link, ArrowUpRight } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	export let resource: any;
	const dispatch = createEventDispatcher();
	let showDeleteConfirm = false;
</script>

<div class="flex items-start gap-4 p-4 bg-surface dark:bg-neutral-900 border border-default rounded-xl group transition-colors duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
	<Link class="w-5 h-5 mt-1 text-muted flex-shrink-0" />
	
	<div class="flex-1 min-w-0">
		<a href={resource.url} target="_blank" rel="noopener noreferrer" class="font-medium text-text group-hover:text-indigo-600 dark:group-hover:text-indigo-400 inline-flex items-center gap-1">
			<span>{resource.label}</span>
			<ArrowUpRight class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
		</a>
		{#if resource.description}
			<p class="text-sm text-muted line-clamp-1">{resource.description}</p>
		{/if}
	</div>

	<div class="flex items-center gap-1">
		{#if showDeleteConfirm}
			<span class="text-xs text-muted mr-2">Sure?</span>
			<form method="POST" action="?/deleteResource" use:enhance={() => {showDeleteConfirm = false; return async ({update}) => update({reset: false});}}>
				<input type="hidden" name="id" value={resource.id} />
				<button type="submit" class="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg" title="Confirm delete"><Trash2 class="w-4 h-4"/></button>
			</form>
			<button class="p-2 text-muted hover:bg-neutral-500/10 rounded-lg" on:click={() => showDeleteConfirm = false} title="Cancel delete">Cancel</button>
		{:else}
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-text" on:click={() => dispatch('edit', { resource })} title="Edit resource">
				<Edit class="w-4 h-4" />
			</button>
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-rose-500" on:click={() => showDeleteConfirm = true} title="Delete resource">
				<Trash2 class="w-4 h-4" />
			</button>
		{/if}
	</div>
</div>
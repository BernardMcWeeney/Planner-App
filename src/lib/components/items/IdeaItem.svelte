<script lang="ts">
	import { enhance } from '$app/forms';
	import { Edit, Trash2, Lightbulb, Star } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	export let idea: any;
	const dispatch = createEventDispatcher();
	let showDeleteConfirm = false;
</script>

<div class="flex items-start gap-4 p-4 bg-surface dark:bg-neutral-900 border border-default rounded-xl group transition-colors duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
	<Lightbulb class="w-5 h-5 mt-1 text-muted flex-shrink-0" />
	
	<div class="flex-1 min-w-0">
		<p class="font-medium text-text">{idea.title}</p>
		{#if idea.description}
			<p class="text-sm text-muted line-clamp-1">{idea.description}</p>
		{/if}
	</div>

	<div class="flex items-center gap-1">
		<form method="POST" action="?/toggleIdeaStarred" use:enhance>
			<input type="hidden" name="id" value={idea.id} />
			<input type="hidden" name="starred" value={idea.starred} />
			<button type="submit" class="p-2 text-muted hover:text-amber-500 transition-colors" title="Toggle starred">
				<Star class="w-4 h-4" fill={idea.starred ? 'currentColor' : 'none'} />
			</button>
		</form>

		{#if showDeleteConfirm}
			<span class="text-xs text-muted mr-2">Sure?</span>
			<form method="POST" action="?/deleteIdea" use:enhance={() => {showDeleteConfirm = false; return async ({update}) => update({reset: false});}}>
				<input type="hidden" name="id" value={idea.id} />
				<button type="submit" class="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors" title="Confirm delete"><Trash2 class="w-4 h-4"/></button>
			</form>
			<button class="p-2 text-muted hover:bg-neutral-500/10 rounded-lg" on:click={() => showDeleteConfirm = false} title="Cancel delete">Cancel</button>
		{:else}
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-text transition-opacity" on:click={() => dispatch('edit', { idea })} title="Edit idea">
				<Edit class="w-4 h-4" />
			</button>
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-rose-500 transition-opacity" on:click={() => showDeleteConfirm = true} title="Delete idea">
				<Trash2 class="w-4 h-4" />
			</button>
		{/if}
	</div>
</div>
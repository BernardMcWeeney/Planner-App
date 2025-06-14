<script lang="ts">
	import { enhance } from '$app/forms';
	import { Edit, Trash2, Target, Calendar } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	export let goal: any;
	const dispatch = createEventDispatcher();
	let showDeleteConfirm = false;

	const statusMap = {
		'planned': { label: 'Planned', classes: 'bg-neutral-200 dark:bg-neutral-700 text-muted' },
		'in-progress': { label: 'In Progress', classes: 'bg-sky-500/20 text-sky-500' },
		'achieved': { label: 'Achieved', classes: 'bg-emerald-500/20 text-emerald-500' }
	};
</script>

<div class="flex items-start gap-4 p-4 bg-surface dark:bg-neutral-900 border border-default rounded-xl group transition-colors duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
	<Target class="w-5 h-5 mt-1 text-muted flex-shrink-0" />
	
	<div class="flex-1 min-w-0">
		<p class="font-medium text-text">{goal.title}</p>
		{#if goal.description}
			<p class="text-sm text-muted line-clamp-1">{goal.description}</p>
		{/if}
		<div class="flex items-center gap-4 text-xs mt-2">
			<span class="px-2 py-0.5 rounded-full font-medium {statusMap[goal.status]?.classes || statusMap.planned.classes}">
				{statusMap[goal.status]?.label || 'Planned'}
			</span>
			{#if goal.target_date}
				<span class="flex items-center gap-1.5 text-muted"><Calendar class="w-3 h-3" /> {new Date(goal.target_date).toLocaleDateString()}</span>
			{/if}
		</div>
	</div>

	<div class="flex items-center gap-1">
		{#if showDeleteConfirm}
			<span class="text-xs text-muted mr-2">Sure?</span>
			<form method="POST" action="?/deleteGoal" use:enhance={() => {showDeleteConfirm = false; return async ({update}) => update({reset: false});}}>
				<input type="hidden" name="id" value={goal.id} />
				<button type="submit" class="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg" title="Confirm delete"><Trash2 class="w-4 h-4"/></button>
			</form>
			<button class="p-2 text-muted hover:bg-neutral-500/10 rounded-lg" on:click={() => showDeleteConfirm = false} title="Cancel delete">Cancel</button>
		{:else}
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-text" on:click={() => dispatch('edit', { goal })} title="Edit goal">
				<Edit class="w-4 h-4" />
			</button>
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-rose-500" on:click={() => showDeleteConfirm = true} title="Delete goal">
				<Trash2 class="w-4 h-4" />
			</button>
		{/if}
	</div>
</div>
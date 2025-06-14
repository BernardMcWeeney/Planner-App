<script lang="ts">
	import { enhance } from '$app/forms';
	import { Edit, Trash2, Calendar, AlertTriangle } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	export let task: any;
	const dispatch = createEventDispatcher();

	let showDeleteConfirm = false;

	const priorityMap = {
		0: { label: 'Low', color: 'text-sky-500' },
		1: { label: 'Medium', color: 'text-amber-500' },
		2: { label: 'High', color: 'text-rose-500' }
	};
</script>

<div class="flex items-start gap-4 p-4 bg-surface dark:bg-neutral-900 border border-default rounded-xl group">
	<form method="POST" action="?/toggleTask" use:enhance>
		<input type="hidden" name="id" value={task.id} />
		<input type="hidden" name="done" value={task.done} />
		<button type="submit" class="mt-1">
			{#if task.done}
				<div class="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center ring-4 ring-emerald-500/20">
					<svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
				</div>
			{:else}
				<div class="w-5 h-5 rounded-full border-2 border-neutral-300 dark:border-neutral-600 group-hover:border-indigo-500 transition-colors"></div>
			{/if}
		</button>
	</form>

	<div class="flex-1 min-w-0">
		<p class="font-medium text-text {task.done ? 'line-through text-muted' : ''}">{task.name}</p>
		<p class="text-sm text-muted line-clamp-1">{task.description}</p>
		<div class="flex items-center gap-4 text-xs text-muted mt-2">
			{#if task.due_date}
				<span class="flex items-center gap-1.5"><Calendar class="w-3 h-3" /> {new Date(task.due_date).toLocaleDateString()}</span>
			{/if}
			{#if task.priority > 0}
				<span class="flex items-center gap-1.5 {priorityMap[task.priority].color}"><AlertTriangle class="w-3 h-3" /> {priorityMap[task.priority].label}</span>
			{/if}
		</div>
	</div>

	<div class="flex items-center gap-1">
		{#if showDeleteConfirm}
			<span class="text-xs text-muted mr-2">Sure?</span>
			<form method="POST" action="?/deleteTask" use:enhance>
				<input type="hidden" name="id" value={task.id} />
				<button type="submit" class="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"><Trash2 class="w-4 h-4"/></button>
			</form>
			<button class="p-2 text-muted hover:bg-neutral-500/10 rounded-lg" on:click={() => showDeleteConfirm = false}>Cancel</button>
		{:else}
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-text transition-opacity" on:click={() => dispatch('edit', { task })}>
				<Edit class="w-4 h-4" />
			</button>
			<button class="p-2 text-muted opacity-0 group-hover:opacity-100 hover:text-rose-500 transition-opacity" on:click={() => showDeleteConfirm = true}>
				<Trash2 class="w-4 h-4" />
			</button>
		{/if}
	</div>
</div>
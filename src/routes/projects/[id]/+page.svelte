<script lang="ts">
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	// Import ALL forms
	import TaskForm from '$lib/components/TaskForm.svelte';
	import NoteForm from '$lib/components/NoteForm.svelte';
	import IdeaForm from '$lib/components/IdeaForm.svelte';
	import GoalForm from '$lib/components/GoalForm.svelte';
	import DocForm from '$lib/components/DocForm.svelte';
	import ResourceForm from '$lib/components/ResourceForm.svelte';

	// Import ALL New Item Components
	import TaskItem from '$lib/components/items/TaskItem.svelte';
	import NoteCard from '$lib/components/items/NoteCard.svelte';
	import IdeaItem from '$lib/components/items/IdeaItem.svelte';
	import GoalItem from '$lib/components/items/GoalItem.svelte';
	import DocItem from '$lib/components/items/DocItem.svelte';
	import ResourceItem from '$lib/components/items/ResourceItem.svelte';

	import Kpi from '$lib/components/Kpi.svelte';
	import { Home, Edit, Plus, ListTodo, StickyNote, Lightbulb, Target, FileText, Link, CheckCircle2, AlertTriangle, FolderOpen } from 'lucide-svelte';

	export let data: import('./$types').PageData;
	export let form: import('./$types').ActionData;

	let activeTab = 'dashboard';

	// State for managing which item is currently being edited
	let editingTask: any = null;
	let editingNote: any = null;
	let editingIdea: any = null;
	let editingGoal: any = null;
	let editingDoc: any = null;
	let editingResource: any = null;

	// State for showing the "Create New" form
	let showCreateForm: string | null = null;

	// When a form submission is successful, close any open forms
	$: if (form?.success) {
		editingTask = null;
		editingNote = null;
		editingIdea = null;
		editingGoal = null;
		editingDoc = null;
		editingResource = null;
		showCreateForm = null;
	}

	// Calculate stats for the dashboard
	$: totalTasks = data.tasks.length;
	$: completedTasks = data.tasks.filter(t => t.done).length;
	$: overdueTasks = data.tasks.filter(t => !t.done && t.due_date && new Date(t.due_date) < new Date()).length;
	$: upcomingTasks = data.tasks.filter(t => !t.done && t.due_date && new Date(t.due_date) > new Date() && new Date(t.due_date) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)).length;

</script>

<div class="space-y-12">
	<header>
		<div class="text-sm text-muted flex items-center gap-2 mb-2">
			<a href="/projects" class="hover:text-text transition-colors flex items-center gap-1.5">
				<Home class="w-4 h-4" />
				<span>Projects</span>
			</a>
			<span class="text-muted/50">/</span>
			<span class="text-text font-medium truncate">{data.project.name}</span>
		</div>
		<div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
			<div>
				<h1 class="text-3xl font-bold text-text flex items-center gap-3">
					<span class="w-4 h-4 rounded-full" style="background-color: {data.project.color};"></span>
					{data.project.name}
				</h1>
				<p class="text-muted mt-2 max-w-2xl">{data.project.description}</p>
			</div>
			<div class="flex items-center gap-2 flex-shrink-0">
				<a href="/projects/{data.project.id}/edit" class="bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-text font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center gap-2 text-sm">
					<Edit class="w-4 h-4" />
					<span>Edit Project</span>
				</a>
			</div>
		</div>
	</header>

	<section>
		<h2 class="text-2xl font-semibold text-text mb-4">Project Stats</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			<Kpi title="Total Tasks" value={totalTasks} icon={ListTodo} color="indigo" subtitle="{completedTasks} completed" />
			<Kpi title="Completed" value={`${totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%`} icon={CheckCircle2} color="emerald" subtitle="of all tasks" />
			<Kpi title="Upcoming" value={upcomingTasks} icon={FolderOpen} color="sky" subtitle="Due in next 7 days" />
			<Kpi title="Overdue" value={overdueTasks} icon={AlertTriangle} color="rose" subtitle="Require attention" />
		</div>
	</section>


	<main class="pt-6" id="workspace">
		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
			<h2 class="text-2xl font-semibold text-text">Project Workspace</h2>
			{#if activeTab !== 'dashboard'}
				<div class="flex items-center gap-2">
					<button on:click={() => showCreateForm = activeTab} class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center gap-2 text-sm">
						<Plus class="w-4 h-4" />
						<span>Create New</span>
					</button>
				</div>
			{/if}
		</div>

		<div class="border-b border-default">
			<nav class="-mb-px flex space-x-6 overflow-x-auto">
                <button on:click={() => activeTab = 'dashboard'} class:text-text={activeTab === 'dashboard'} class:border-indigo-500={activeTab === 'dashboard'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-muted hover:text-text transition-colors">Overview</button>
				<button on:click={() => activeTab = 'tasks'} class:text-text={activeTab === 'tasks'} class:border-indigo-500={activeTab === 'tasks'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-muted hover:text-text transition-colors"> <ListTodo class="w-4 h-4"/> Tasks ({data.tasks.length}) </button>
				<button on:click={() => activeTab = 'notes'} class:text-text={activeTab === 'notes'} class:border-indigo-500={activeTab === 'notes'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-muted hover:text-text transition-colors"> <StickyNote class="w-4 h-4"/> Notes ({data.notes.length}) </button>
				<button on:click={() => activeTab = 'ideas'} class:text-text={activeTab === 'ideas'} class:border-indigo-500={activeTab === 'ideas'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-muted hover:text-text transition-colors"> <Lightbulb class="w-4 h-4"/> Ideas ({data.ideas.length}) </button>
				<button on:click={() => activeTab = 'goals'} class:text-text={activeTab === 'goals'} class:border-indigo-500={activeTab === 'goals'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-muted hover:text-text transition-colors"> <Target class="w-4 h-4"/> Goals ({data.goals.length}) </button>
				<button on:click={() => activeTab = 'docs'} class:text-text={activeTab === 'docs'} class:border-indigo-500={activeTab === 'docs'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-muted hover:text-text transition-colors"> <FileText class="w-4 h-4"/> Docs ({data.docs.length}) </button>
				<button on:click={() => activeTab = 'resources'} class:text-text={activeTab === 'resources'} class:border-indigo-500={activeTab === 'resources'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-muted hover:text-text transition-colors"> <Link class="w-4 h-4"/> Resources ({data.resources.length}) </button>
			</nav>
		</div>

		<div class="pt-6 min-h-[400px]">
			{#if showCreateForm}
				<div transition:slide={{duration: 300}}>
					{#if showCreateForm === 'tasks'} <TaskForm projectId={data.project.id} on:save={() => showCreateForm = null} on:cancel={() => showCreateForm = null} /> {/if}
					{#if showCreateForm === 'notes'} <NoteForm projectId={data.project.id} on:save={() => showCreateForm = null} on:cancel={() => showCreateForm = null} /> {/if}
					{#if showCreateForm === 'ideas'} <IdeaForm projectId={data.project.id} on:save={() => showCreateForm = null} on:cancel={() => showCreateForm = null} /> {/if}
					{#if showCreateForm === 'goals'} <GoalForm projectId={data.project.id} on:save={() => showCreateForm = null} on:cancel={() => showCreateForm = null} /> {/if}
					{#if showCreateForm === 'docs'} <DocForm projectId={data.project.id} on:save={() => showCreateForm = null} on:cancel={() => showCreateForm = null} /> {/if}
					{#if showCreateForm === 'resources'} <ResourceForm projectId={data.project.id} on:save={() => showCreateForm = null} on:cancel={() => showCreateForm = null} /> {/if}
				</div>
			{/if}

            {#if activeTab === 'dashboard'}
                <div class="text-center py-16 bg-surface dark:bg-neutral-900 border-2 border-dashed border-default rounded-xl">
                    <h3 class="text-lg font-semibold text-text">Project Overview</h3>
                    <p class="text-muted">Select a tab above to view, create, and edit all items for this project.</p>
                </div>
            {/if}

			{#if activeTab === 'tasks'}
				<div class="space-y-3">
					{#each data.tasks as task (task.id)}
						{#if editingTask?.id === task.id}
							<div transition:slide={{duration: 200}}><TaskForm projectId={data.project.id} {task} on:save={() => editingTask = null} on:cancel={() => editingTask = null} /></div>
						{:else}
							<TaskItem {task} on:edit={(e) => editingTask = e.detail.task} />
						{/if}
					{:else}
						<div class="text-center py-16 border-2 border-dashed border-default rounded-xl"><ListTodo class="w-10 h-10 mx-auto text-muted mb-2" /><h3 class="font-semibold text-text">No Tasks Yet</h3><p class="text-sm text-muted">Click "Create New" to add your first task.</p></div>
					{/each}
				</div>
			{/if}
			
			{#if activeTab === 'notes'}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each data.notes as note (note.id)}
						{#if editingNote?.id === note.id}
							<div class="md:col-span-2 lg:col-span-3" transition:slide={{duration: 200}}><NoteForm projectId={data.project.id} {note} on:save={() => editingNote = null} on:cancel={() => editingNote = null} /></div>
						{:else}
							<NoteCard {note} on:edit={(e) => editingNote = e.detail.note} />
						{/if}
					{:else}
						<div class="md:col-span-2 lg:col-span-3 text-center py-16 border-2 border-dashed border-default rounded-xl"><StickyNote class="w-10 h-10 mx-auto text-muted mb-2" /><h3 class="font-semibold text-text">No Notes Yet</h3><p class="text-sm text-muted">Click "Create New" to add your first note.</p></div>
					{/each}
				</div>
			{/if}

			{#if activeTab === 'ideas'}
				<div class="space-y-3">
					{#each data.ideas as idea (idea.id)}
						{#if editingIdea?.id === idea.id}
							<div transition:slide={{duration: 200}}><IdeaForm projectId={data.project.id} {idea} on:save={() => editingIdea = null} on:cancel={() => editingIdea = null} /></div>
						{:else}
							<IdeaItem {idea} on:edit={(e) => editingIdea = e.detail.idea} />
						{/if}
					{:else}
						<div class="text-center py-16 border-2 border-dashed border-default rounded-xl"><Lightbulb class="w-10 h-10 mx-auto text-muted mb-2" /><h3 class="font-semibold text-text">No Ideas Yet</h3><p class="text-sm text-muted">Click "Create New" to add your first idea.</p></div>
					{/each}
				</div>
			{/if}

			{#if activeTab === 'goals'}
				<div class="space-y-3">
					{#each data.goals as goal (goal.id)}
						{#if editingGoal?.id === goal.id}
							<div transition:slide={{duration: 200}}><GoalForm projectId={data.project.id} {goal} on:save={() => editingGoal = null} on:cancel={() => editingGoal = null} /></div>
						{:else}
							<GoalItem {goal} on:edit={(e) => editingGoal = e.detail.goal} />
						{/if}
					{:else}
						<div class="text-center py-16 border-2 border-dashed border-default rounded-xl"><Target class="w-10 h-10 mx-auto text-muted mb-2" /><h3 class="font-semibold text-text">No Goals Yet</h3><p class="text-sm text-muted">Click "Create New" to add your first goal.</p></div>
					{/each}
				</div>
			{/if}
			
			{#if activeTab === 'docs'}
				<div class="space-y-3">
					{#each data.docs as doc (doc.id)}
						{#if editingDoc?.id === doc.id}
							<div transition:slide={{duration: 200}}><DocForm projectId={data.project.id} {doc} on:save={() => editingDoc = null} on:cancel={() => editingDoc = null} /></div>
						{:else}
							<DocItem {doc} on:edit={(e) => editingDoc = e.detail.doc} />
						{/if}
					{:else}
						<div class="text-center py-16 border-2 border-dashed border-default rounded-xl"><FileText class="w-10 h-10 mx-auto text-muted mb-2" /><h3 class="font-semibold text-text">No Documents Yet</h3><p class="text-sm text-muted">Click "Create New" to add your first document.</p></div>
					{/each}
				</div>
			{/if}
			
			{#if activeTab === 'resources'}
				<div class="space-y-3">
					{#each data.resources as resource (resource.id)}
						{#if editingResource?.id === resource.id}
							<div transition:slide={{duration: 200}}><ResourceForm projectId={data.project.id} {resource} on:save={() => editingResource = null} on:cancel={() => editingResource = null} /></div>
						{:else}
							<ResourceItem {resource} on:edit={(e) => editingResource = e.detail.resource} />
						{/if}
					{:else}
						<div class="text-center py-16 border-2 border-dashed border-default rounded-xl"><Link class="w-10 h-10 mx-auto text-muted mb-2" /><h3 class="font-semibold text-text">No Resources Yet</h3><p class="text-sm text-muted">Click "Create New" to add your first resource link.</p></div>
					{/each}
				</div>
			{/if}

		</div>
	</main>
</div>
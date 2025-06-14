<script>
	import { enhance } from '$app/forms';

	// Import your form components
	import TaskForm from '$lib/components/TaskForm.svelte';
	import NoteForm from '$lib/components/NoteForm.svelte';
	import IdeaForm from '$lib/components/IdeaForm.svelte';
	import GoalForm from '$lib/components/GoalForm.svelte';
	import DocForm from '$lib/components/DocForm.svelte';
	import ResourceForm from '$lib/components/ResourceForm.svelte';

	// Import Lucide Icons
	import { Home, Edit, Plus, Star, CheckCircle, ListTodo, Lightbulb, StickyNote, Target, FileText, Link, ArrowRight } from 'lucide-svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	/** @type {import('./$types').ActionData} */
	export let form;

	// Default tab is now 'dashboard', but we can switch to others
	let activeTab = 'dashboard';

	// State to control which creation form is visible
	let showCreateForm = null;

	// Reactive statement to close the form upon successful submission
	$: if (form?.success) {
		showCreateForm = null;
	}

  // Slices of data for the dashboard widgets
  const incompleteTasks = data.tasks.filter(t => !t.done).slice(0, 5);
  const recentNotes = data.notes.slice(0, 3);
  const starredIdeas = data.ideas.filter(i => i.starred).slice(0, 4);
  const activeGoals = data.goals.filter(g => g.status !== 'completed').slice(0, 4);

</script>

<div class="space-y-8">
	<div>
		<div class="text-sm text-neutral-400 flex items-center gap-2 mb-2">
			<a href="/projects" class="hover:text-white transition-colors flex items-center gap-1.5">
				<Home class="w-4 h-4" />
				<span>Projects</span>
			</a>
			<span class="text-neutral-600">/</span>
			<span class="text-white font-medium truncate">{data.project.name}</span>
		</div>
		<div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
			<div>
				<h1 class="text-3xl font-bold text-white flex items-center gap-3">
					<span class="w-4 h-4 rounded-full" style="background-color: {data.project.color};"></span>
					{data.project.name}
				</h1>
				<p class="text-neutral-400 mt-2 max-w-2xl">{data.project.description}</p>
			</div>
			<div class="flex items-center gap-2 flex-shrink-0">
				<a href="/projects/{data.project.id}/edit" class="bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center gap-2 text-sm">
					<Edit class="w-4 h-4" />
					Edit Project
				</a>
			</div>
		</div>
	</div>

	<div>
        <h2 class="text-2xl font-semibold text-white mb-4">Project Overview</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col">
                <h3 class="font-semibold text-white mb-3 flex items-center gap-2"><ListTodo class="w-5 h-5"/> Incomplete Tasks</h3>
                <div class="flex-grow space-y-2">
                    {#each incompleteTasks as task (task.id)}
                        <div class="flex items-center gap-3">
                            <div class="w-4 h-4 rounded-full border-2 border-neutral-600"></div>
                            <span class="text-neutral-300 text-sm">{task.name}</span>
                        </div>
                    {:else}
                        <p class="text-neutral-500 text-sm h-full flex items-center">No incomplete tasks. Well done!</p>
                    {/each}
                </div>
                <button on:click={() => activeTab = 'tasks'} class="text-sm text-neutral-400 hover:text-white mt-4 flex items-center gap-1 self-start">
                    View all tasks <ArrowRight class="w-4 h-4"/>
                </button>
            </div>

            <div class="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col">
                <h3 class="font-semibold text-white mb-3 flex items-center gap-2"><StickyNote class="w-5 h-5"/> Recent Notes</h3>
                <div class="flex-grow space-y-3">
                    {#each recentNotes as note (note.id)}
                        <a href="/notes/{note.id}" class="block group">
                            <h4 class="font-medium text-neutral-200 group-hover:text-white text-sm truncate">{note.title || 'Untitled Note'}</h4>
                            <p class="text-xs text-neutral-400 truncate">{note.content}</p>
                        </a>
                    {:else}
                        <p class="text-neutral-500 text-sm h-full flex items-center">No notes have been added yet.</p>
                    {/each}
                </div>
                 <button on:click={() => activeTab = 'notes'} class="text-sm text-neutral-400 hover:text-white mt-4 flex items-center gap-1 self-start">
                    View all notes <ArrowRight class="w-4 h-4"/>
                </button>
            </div>

            <div class="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col">
                <h3 class="font-semibold text-white mb-3 flex items-center gap-2"><Star class="w-5 h-5"/> Starred Ideas</h3>
                <div class="flex-grow space-y-2">
                    {#each starredIdeas as idea (idea.id)}
                        <div class="flex items-center gap-3">
                            <Star class="w-4 h-4 text-yellow-400" fill="currentColor" />
                            <span class="text-neutral-300 text-sm">{idea.title}</span>
                        </div>
                    {:else}
                        <p class="text-neutral-500 text-sm h-full flex items-center">No starred ideas.</p>
                    {/each}
                </div>
                <button on:click={() => activeTab = 'ideas'} class="text-sm text-neutral-400 hover:text-white mt-4 flex items-center gap-1 self-start">
                    View all ideas <ArrowRight class="w-4 h-4"/>
                </button>
            </div>

            <div class="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col">
                <h3 class="font-semibold text-white mb-3 flex items-center gap-2"><Target class="w-5 h-5"/> Active Goals</h3>
                <div class="flex-grow space-y-2">
                    {#each activeGoals as goal (goal.id)}
                        <div class="flex items-center gap-3">
                           <Target class="w-4 h-4 text-neutral-500"/>
                           <span class="text-neutral-300 text-sm">{goal.title}</span>
                        </div>
                    {:else}
                         <p class="text-neutral-500 text-sm h-full flex items-center">No active goals.</p>
                    {/each}
                </div>
                <button on:click={() => activeTab = 'goals'} class="text-sm text-neutral-400 hover:text-white mt-4 flex items-center gap-1 self-start">
                    View all goals <ArrowRight class="w-4 h-4"/>
                </button>
            </div>
        </div>
    </div>


	<div class="pt-6" id="workspace">
        <h2 class="text-2xl font-semibold text-white mb-4">Project Workspace</h2>
		<div class="border-b border-neutral-800">
			<nav class="-mb-px flex space-x-6 overflow-x-auto">
                <button on:click={() => activeTab = 'dashboard'} class:text-white={activeTab === 'dashboard'} class:border-white={activeTab === 'dashboard'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"> Overview </button>
				<button on:click={() => activeTab = 'tasks'} class:text-white={activeTab === 'tasks'} class:border-white={activeTab === 'tasks'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"> <ListTodo class="w-4 h-4"/> Tasks ({data.tasks.length}) </button>
				<button on:click={() => activeTab = 'notes'} class:text-white={activeTab === 'notes'} class:border-white={activeTab === 'notes'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"> <StickyNote class="w-4 h-4"/> Notes ({data.notes.length}) </button>
				<button on:click={() => activeTab = 'ideas'} class:text-white={activeTab === 'ideas'} class:border-white={activeTab === 'ideas'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"> <Lightbulb class="w-4 h-4"/> Ideas ({data.ideas.length}) </button>
				<button on:click={() => activeTab = 'goals'} class:text-white={activeTab === 'goals'} class:border-white={activeTab === 'goals'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"> <Target class="w-4 h-4"/> Goals ({data.goals.length}) </button>
				<button on:click={() => activeTab = 'docs'} class:text-white={activeTab === 'docs'} class:border-white={activeTab === 'docs'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"> <FileText class="w-4 h-4"/> Docs ({data.docs.length}) </button>
				<button on:click={() => activeTab = 'resources'} class:text-white={activeTab === 'resources'} class:border-white={activeTab === 'resources'} class="flex items-center gap-2 shrink-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"> <Link class="w-4 h-4"/> Resources ({data.resources.length}) </button>
			</nav>
		</div>

		<div class="pt-6 min-h-[300px]">
            {#if activeTab !== 'dashboard'}
                {#if activeTab === 'tasks'}
                    <div>
                        </div>
                {/if}

                {#if activeTab === 'notes'}
                    <div>
                        </div>
                {/if}

                {:else}
                <div class="text-center py-16">
                    <h3 class="text-lg font-semibold text-white">Project Overview</h3>
                    <p class="text-neutral-400">Select a tab above to view all items for a category.</p>
                </div>
            {/if}
		</div>
	</div>
</div>

<style>
	.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
	.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
</style>
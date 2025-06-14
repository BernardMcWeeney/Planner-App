<script>
  import { enhance } from '$app/forms';
  import { ArrowLeft, Save, X, Palette } from 'lucide-svelte';

  const colorOptions = [
    { name: 'Green', value: '#16A349' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Yellow', value: '#F59E0B' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Indigo', value: '#6366F1' },
    { name: 'Cyan', value: '#06B6D4' }
  ];

  let selectedColor = '#16A349';
  let showColorPicker = false;
</script>

<div class="max-w-2xl mx-auto space-y-8">
  <!-- Header -->
  <div class="flex items-center gap-4">
    <a 
      href="/projects" 
      class="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
    >
      <ArrowLeft class="h-5 w-5" />
    </a>
    <div>
      <h1 class="text-3xl font-bold text-white">Create New Project</h1>
      <p class="text-neutral-400 mt-1">Set up a new project to organize your work</p>
    </div>
  </div>

  <!-- Form Card -->
  <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
    <form method="POST" use:enhance class="space-y-6">
      <!-- Project Name -->
      <div class="space-y-2">
        <label for="name" class="block text-sm font-medium text-white">
          Project Name
        </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
          placeholder="Enter project name"
        />
      </div>

      <!-- Project Description -->
      <div class="space-y-2">
        <label for="description" class="block text-sm font-medium text-white">
          Description
        </label>
        <textarea 
          id="description" 
          name="description" 
          rows="4" 
          class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors resize-none"
          placeholder="Describe your project (optional)"
        ></textarea>
      </div>

      <!-- Project Color -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-white">
          Project Color
        </label>
        <div class="flex items-center gap-4">
          <!-- Selected Color Preview -->
          <div class="flex items-center gap-3">
            <div 
              class="w-10 h-10 rounded-lg border-2 border-neutral-600 flex-shrink-0" 
              style="background-color: {selectedColor}"
            ></div>
            <span class="text-sm text-neutral-400">Preview</span>
          </div>

          <!-- Color Options -->
          <div class="grid grid-cols-4 gap-2">
            {#each colorOptions as color}
              <button
                type="button"
                on:click={() => selectedColor = color.value}
                class="w-8 h-8 rounded-lg border-2 transition-all hover:scale-110 {selectedColor === color.value ? 'border-white shadow-lg' : 'border-neutral-600'}"
                style="background-color: {color.value}"
                title={color.name}
              ></button>
            {/each}
          </div>

          <!-- Custom Color Picker Button -->
          <button
            type="button"
            on:click={() => showColorPicker = !showColorPicker}
            class="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
            title="Custom color"
          >
            <Palette class="h-4 w-4" />
          </button>
        </div>

        <!-- Custom Color Picker -->
        {#if showColorPicker}
          <div class="mt-4 p-4 bg-neutral-800 rounded-lg border border-neutral-700">
            <label for="color" class="block text-sm font-medium text-white mb-2">
              Custom Color
            </label>
            <input 
              type="color" 
              id="color" 
              bind:value={selectedColor}
              class="w-full h-12 bg-neutral-800 border border-neutral-700 rounded-lg cursor-pointer"
            />
          </div>
        {/if}

        <!-- Hidden input for form submission -->
        <input type="hidden" name="color" value={selectedColor} />
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-end gap-3 pt-6 border-t border-neutral-800">
        <a 
          href="/projects" 
          class="inline-flex items-center gap-2 px-4 py-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg font-medium transition-colors"
        >
          <X class="h-4 w-4" />
          Cancel
        </a>
        <button 
          type="submit" 
          class="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
        >
          <Save class="h-4 w-4" />
          Create Project
        </button>
      </div>
    </form>
  </div>
</div>
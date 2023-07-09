<script lang="ts">
	import { goto } from '$app/navigation';
	import Loader from '$lib/Loader.svelte';
	import '../app.css';

	let songName = '';
	let loading = false;

	async function onSubmit() {
		loading = true;
		await goto(`/${songName}`);
		loading = false;
	}
</script>

<div class="m-4 space-y-4">
	<div class="flex items-center justify-between">
		<h1 class="text-2xl">
			<a href="/">Bopper</a>
		</h1>
		<div>
			<form on:submit|preventDefault={onSubmit} class="flex space-x-2">
				<input
					bind:value={songName}
					disabled={loading}
					type="text"
					placeholder="Song name"
					class="rounded disabled:bg-gray-200"
				/>
				<button
					disabled={loading}
					type="submit"
					class="w-12 rounded border border-gray-500 p-2 disabled:bg-gray-200"
				>
					{#if loading}
						<Loader />
					{:else}
						Bop
					{/if}
				</button>
			</form>
		</div>
	</div>
	<slot />
</div>

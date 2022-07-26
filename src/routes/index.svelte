<script>
	import InputForm from '$lib/InputForm.svelte';
	import Table from '$lib/Table.svelte';
	import { pets } from '../store';
	const animals_service = `${import.meta.env.VITE_ANIMALS_SERVICE}`;
	console.log('getAnimals');
	const response = fetch(animals_service + 'animals/').then((data) => data.json());
	response.then((data) => $pets = data).catch((error) => console.log(error))
	// response.then((data) => mypets = data)
	function handleNewAnimal(animal) {
		// console.log(animal.detail)
		console.log('New Animal Added ' + animal.detail.name);
		$pets = [...$pets, animal.detail];
	}
</script>

<h1>Welcome to SvelteKit</h1>
<InputForm on:newAnimal={handleNewAnimal} />

{#await response}
	Fetching ..
{:then data}
	<!-- <Table animals={data} /> -->
	<Table animals={$pets} />
{:catch error}
	You have no pets added, Start by adding pets using the form above
{/await}

<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

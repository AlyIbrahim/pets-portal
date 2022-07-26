<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let name = '';
	let type = '';
	let age = 1;

	const animals_service = `${import.meta.env.VITE_ANIMALS_SERVICE}`;

	async function AddAnimal() {
		// console.log(animals_service);
		let response = await fetch(animals_service + 'animals/', {
			method: 'POST',
			headers: new Headers([['Content-Type', 'application/json']]),
			body: JSON.stringify({ name, type, age })
		});
		// console.log(response);
		let data = await response.json()
		dispatch('newAnimal', data
		// {
		// 	name: name,
		// 	type: type,
		// 	age: age
		// }
		);
	}
</script>

<div>
	<label for="name">Name</label>
	<input type="text" id="name" name="name" bind:value={name} placeholder="Pet name.." />

	<label for="type">Type</label>
	<input type="text" id="type" name="type" bind:value={type} placeholder="Cat/Dog" />

	<label for="age">Age</label>
	<input type="number" id="age" name="age" bind:value={age} placeholder="1" />

	<input type="submit" on:click={AddAnimal} value="Add {name}" />
</div>

<style>
	div {
		border-radius: 5px;
		/* background-color: #f2f2f2; */
		padding: 20px;
		/* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; */
	}

	label {
		padding-left: 1%;
		float: left;
	}

	input[type='text'] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	/* input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
} */

	input[type='submit'] {
		width: 100%;
		background-color: #0044ff;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	input[type='submit']:hover {
		background-color: #45a049;
	}
</style>

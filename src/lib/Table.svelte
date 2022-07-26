<script>
	export let animals;
    const animals_service = `${import.meta.env.VITE_ANIMALS_SERVICE}`
	async function handleClick(row) {
		if (!confirm('Are you sure you want to delete the animal: ' + row.name + '?')){
			return
		};
		let response = fetch(animals_service + 'animals/' + row.id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			// body: JSON.stringify({
			// 	name
			// })
		})
        .then((data) => {animals = animals.filter(t => t.id != row.id) })

	}
</script>

<h1>Pets</h1>
{#if animals.length == 0}

You have no animals

{:else}

<!-- {console.log(animals)} -->
<table>
	<thead>
		<tr>
			{#each Object.keys(animals[0]) as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Object.values(animals) as row}
			<tr on:click={handleClick(row)}>
				{#each Object.values(row) as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
{/if}

<style>
	table {
		font-family: Arial, Helvetica, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		border: 1px solid #ddd;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	tr:hover {
		background-color: rgb(255, 0, 0);
	}

	th {
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #e9ac5c;
		background-color: #ff3e00;
		color: white;
	}
</style>

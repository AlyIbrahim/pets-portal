<script>
	import Table from '$lib/Table.svelte';
	const vaccines_service = `${import.meta.env.VITE_VACCINES_SERVICE}`;
	const response = fetch(vaccines_service).then((data) => data.json());
</script>

{#await response}
	Fetching ...
{:then data}
	<Table animals={data.Items} />
{:catch error}
	Couldn't fetch data ..
{/await}

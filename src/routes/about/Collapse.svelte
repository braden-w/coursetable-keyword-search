<script>
	let isOpen = false;
	const toggleIsOpen = () => (isOpen = !isOpen);
</script>

<button
	class="collapse-arrow rounded-box collapse border border-base-300 bg-base-200 text-left text-base-content"
	class:collapse-open={isOpen}
	class:collapse-close={isOpen}
	on:click={toggleIsOpen}
>
	<input type="checkbox" />
	<div class="collapse-title text-2xl font-bold">How it works</div>
	<div class="collapse-content">
		<p>The app makes a graphql query to the Yale CourseTable API:</p>
	</div>
</button>

<style>
	/* Add paragraph styling*/
	p {
		margin: 0.5rem 0;
	}
	/* Add heading styling */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 1rem 0;
	}
</style>

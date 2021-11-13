<script>
    import 'chota';
	import FlowChart from "./FlowChart.svelte";
	import { Button, Row, Col } from "svelte-chota";
</script>

<style>
	main {
		height: 90.5vh;
	}
	header {
		height: 8vh;
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	:global(.app-content){
		height: 100%
	}
</style>

<header class="bg-grey">
	<Button primary>click me</Button>
</header>
<main>
	<Row class="app-content">
		<Col size="2"  class="bd-grey"></Col>
		<Col size="10">
			<FlowChart />
		</Col>
	</Row>
</main>

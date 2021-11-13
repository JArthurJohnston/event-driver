<script>
	import { onMount } from "svelte";
	import { Button } from 'attractions';
	const jq = window.$; //$ is a reserved symbol in svelte

	let chart;

	onMount(() => {

		jq(document).ready(function () {
			var data = {
				operators: {
					operator1: {
						top: 20,
						left: 20,
						properties: {
							title: "Vehicle Service",
							inputs: {
								get: {
									label: 'GET'
								},
								post: {
									label: 'POST'
								}
							},
							outputs: {
								created: {
									label: "CREATED",
								},
								updated: {
									label: 'UPDATED'
								},
								deleted: {
									label: 'DELETED'
								}
							},
						},
					},
					operator2: {
						top: 80,
						left: 300,
						properties: {
							title: "Operator 2",
							inputs: {
								input_1: {
									label: "Input 1",
								},
								input_2: {
									label: "Input 2",
								},
							},
							outputs: {},
						},
					},
				},
			};

			jq(chart).flowchart({
				data: data,
			});
		});
	});
</script>

<div bind:this={chart} id="chart-elm" />

<style>
    div {
        height: 100%
    }
</style>
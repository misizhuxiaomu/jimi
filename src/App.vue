<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import "../src/assets/css/base.css"

	export default {
		name: "App"
	}
</script>

<style scoped>
#app{
	margin: 0 auto;
	overflow-y: hidden;
}
</style>
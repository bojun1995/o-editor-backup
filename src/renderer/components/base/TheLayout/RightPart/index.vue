<template>
	<div class="right-part">
    <top-menu-bar></top-menu-bar>
    <smart-menu-bar></smart-menu-bar>
    <router-view class="page--container"></router-view>
    <status-menu-bar></status-menu-bar>
  </div>
</template>

<script>
// comp
import TopMenuBar from './TopMenuBar/index.vue'
import SmartMenuBar from './SmartMenuBar/index.vue'
import StatusMenuBar from './StatusMenuBar/index.vue'

export default {
	name: 'RightPart',
	components: { TopMenuBar, SmartMenuBar, StatusMenuBar },
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.right-part {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
}
.page--container {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
}
</style>

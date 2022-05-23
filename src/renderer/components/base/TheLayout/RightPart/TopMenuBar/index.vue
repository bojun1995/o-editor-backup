<template>
	<div class="top-menu-bar">TopMenuBar</div>
</template>

<script>
export default {
  name: 'TopMenuBar',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.top-menu-bar {
  -webkit-app-region: drag;
	height: 20px;
	@include background-color('background-color--0');
	@include font-color('font-color--0');
}
</style>

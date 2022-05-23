<template>
	<div class="smart-menu-bar">
		<div class="btn" @click="onThemeChg('matrix')">matrix</div>
		<div class="btn" @click="onThemeChg('sunlight')">sunlight</div>
	</div>
</template>

<script>
export default {
  name: 'SmartMenuBar',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    onThemeChg(themeName) {
      this.$utils.vuex.changeThemeName(themeName)
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.smart-menu-bar {
	height: 30px;
	display: flex;
	flex-direction: row;
  -webkit-app-region: drag;
	@include background-color('background-color--0');
}
.btn {
	margin-left: 10px;
	height: 18px;
	width: 60px;
	cursor: pointer;
  text-align: center;
	border: 1px solid #02AA61;
  border-radius: 5px;
	background-color: #02AA61;
  color: white;
	margin-top: 5px;
  user-select: none;
}
</style>
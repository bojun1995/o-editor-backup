<template>
	<div class="the-logo">
		<div class="circle--outer">
			<div class="circle--inner"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheLogo',
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
.the-logo {
	height: 50px;
	width: 50px;
}
.circle--outer {
	$circleOuterWidth: 34px;
	height: $circleOuterWidth;
	width: $circleOuterWidth;
	border-radius: $circleOuterWidth;
	position: relative;
	left: 8px;
	top: 8px;
  @include background-color('theme-color--0');
}
.circle--inner {
	$circleInnerWidth: 22px;
	height: $circleInnerWidth;
	width: $circleInnerWidth;
	border-radius: $circleInnerWidth;
	position: relative;
	left: 6px;
	top: 6px;
	@include background-color('background-color--2');
}
</style>

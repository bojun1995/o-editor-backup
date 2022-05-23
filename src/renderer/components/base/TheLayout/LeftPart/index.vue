<template>
	<div class="leftPart">
		<top-part></top-part>
	</div>
</template>

<script>
// comp
import TopPart from './TopPart/index.vue'

export default {
  name: 'LeftPart',
  components : { TopPart },
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
.leftPart {
	@include background-color('background-color--2');
	width: 200px;
}
</style>

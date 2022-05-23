<template>
  <div class="top-part">
    <the-logo></the-logo>
  </div>
</template>

<script>
// comp
import TheLogo from './TheLogo/index.vue'

export default {
  name: 'TopPart',
  components: { TheLogo },
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
.top-part {
  height: 50px;
  display: flex;
  flex-direction: row;
}
</style>
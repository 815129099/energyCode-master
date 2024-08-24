<template>
  <div>
    <Chart :cdata="dataList" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  props:{
    dataList:Array
  },
  data () {
    return {
    }
  },
  components: {
    Chart,
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
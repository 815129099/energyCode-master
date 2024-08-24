<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="6.5rem"
      width="10.2rem"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          color: [
            "#8378ea"
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
   
          legend: {
            orient: "vertical",
            data: newData.xData,
            left:"left"
          },
          series: [
            {
              name: "电表电量占比",
              type: "pie",
              radius: [20, 130],
              roseType: "area",
              center: ["50%", "40%"],
              data: newData.seriesData
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
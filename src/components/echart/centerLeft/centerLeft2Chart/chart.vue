<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft2Chart"
      height="4.625rem"
      width="4.125rem"
    ></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Array,
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          title: {
            text: "显示当天峰平谷电量占比",
            left: "right",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: ["峰", "平", "谷"],
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "45%",
              center: ["50%", "60%"],
              data: newData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
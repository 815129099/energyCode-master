<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="6.25rem"
      width="100%"
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
          title: {
            text: "",
          },
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(255,255,255,0.1)",
            axisPointer: {
              type: "shadow",
              label: {
                show: true,
                backgroundColor: "#7B7DDC"
              }
            }
          },
          legend: {
            data: ["谷","平", "峰", "峰占比"],
            textStyle: {
              color: "#B4B4B4"
            },
            top: "0%"
          },
          grid: {
            x: "8%",
            width: "88%",
            y: "4%"
          },
          xAxis: {
            data: newData.name,
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: [
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },

              axisLabel: {
                formatter: "{value} "
              }
            },
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },
              axisLabel: {
                formatter: "{value} "
              }
            }
          ],
          series: [
            {
              name: "峰占比",
              type: "line",
              smooth: true,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: "#F02FC2"
                }
              },
              data: newData.peakPercent
            },
            {
              name: "平",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(240,128,128,0.8)" },
                    { offset: 0.2, color: "rgba(240,128,128,0.5)" },
                    { offset: 1, color: "rgba(240,128,128,0.2)" }
                  ])
                }
              },
              data: newData.flat
            },
            {
              name: "峰",
              type: "bar",
              barGap: "-100%",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(0,191,255,0.8)" },
                    { offset: 0.2, color: "rgba(0,191,255,0.5)" },
                    { offset: 1, color: "rgba(0,191,255,0.2)" }
                  ])
                }
              },
              z: -12,
              data: newData.peak
            },
            {
              name: "谷",
              type: "bar",
              barGap: "-100%",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(255,255,0,0.8)" },
                    { offset: 0.2, color: "rgba(255,255,0,0.5)" },
                    { offset: 1, color: "rgba(255,255,0,0.2)" }
                  ])
                }
              },
              z: -12,
              data: newData.ravine
            }
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
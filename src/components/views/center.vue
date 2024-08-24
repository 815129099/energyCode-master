<template>
  <div id="center">
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="ml-3 colorBlue fw-b">{{ item.title }}</p>
        <div>
          <dv-digital-flop
            :config="item.number"
            style="width: 2.3rem; height: 0.675rem"
          />
        </div>
      </div>
    </div>
    <div class="down">
      <Echart
        :options="options"
        id="centerChart"
        height="3.1875rem"
        width="7.5rem"
      ></Echart>
    </div>
  </div>
</template>

<script>
import Echart from "@/common/echart";
import CenterChart from "@/components/echart/center/centerChartRate";

export default {
  name: "center",
  props: {
    list: Array,
    centerList: Object,
  },
  data() {
    return {
      options: {},
      titleItem: [
        {
          title: "今日投入使用电表数",
          number: {
            number: [120],
            toFixed: 0,
            content: "{nt}",
          },
          textAlign: "left",
          style: {
            fontSize: 25,
            fill: "#3de7c9",
          },
        },
        {
          title: "未使用电表数",
          number: {
            number: [18],
            toFixed: 0,
            content: "{nt}",
          },
          textAlign: "left",
          style: {
            fontSize: 25,
            fill: "#3de7c9",
          },
        },
        {
          title: "电表使用率",
          number: {
            number: [2],
            toFixed: 2,
            content: "{nt}",
          },
          textAlign: "left",
          style: {
            fontSize: 25,
            fill: "#3de7c9",
          },
        },
        {
          title: "昨日总电量(KWh)",
          number: {
            number: [14],
            toFixed: 2,
            content: "{nt}",
          },
          textAlign: "left",
          style: {
            fontSize: 25,
            fill: "#3de7c9",
          },
        },
        {
          title: "今日电量(KWh)",
          number: {
            number: [106],
            toFixed: 2,
            content: "{nt}",
          },
        },
        {
          title: "今日电量占比",
          number: {
            number: [100],
            toFixed: 4,
            content: "{nt}",
          },
        },
      ],
    };
  },
  components: {
    CenterChart,
    Echart,
    // centerChart1,
    // centerChart2
  },
  watch: {
    centerList: {
      handler(newData) {
        this.options = {
          // Make gradient line here
          visualMap: [
            {
              show: false,
              type: "continuous",
              seriesIndex: 0,
              min: 0,
              max: 150,
            },
          ],
          title: {
            text: "三项电流",
            left: "center",
            align: "right",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["Ia", "Ib", "Ic"],
            left: 10,
          },
          xAxis: [
            {
              data: this.centerList.TimeList,
            },
          ],
          yAxis: [
            {
              splitLine: { show: false },
            },
          ],
          grid: [
            {
              bottom: "10%",
            },
          ],
          series: [
            {
              name: "Ia",
              type: "line",
              showSymbol: false,
              data: this.centerList.IaList,
            },
            {
              name: "Ib",
              type: "line",
              showSymbol: false,
              data: this.centerList.IbList,
            },
            {
              name: "Ic",
              type: "line",
              showSymbol: false,
              data: this.centerList.IcList,
            },
          ],
        };
      },
    },
  },

  created() {
    let array = this.titleItem;
    for (let i = 0; i < array.length; i++) {
      let arr = [];
      arr.push(this.list[i]);
      array[i].number.number = arr;
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.1rem;
      margin-top: 0.1rem;
      width: 32%;
      height: 0.875rem;
    }
  }
  .down {
    padding: 0.07rem 0.05rem;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 3.1875rem;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 0.0625rem;
    }
    .ranking {
      padding: 0.125rem;
      width: 59%;
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 1.5rem;
        span {
          margin-top: 0.0875rem;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <div id="centreLeft2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">电量时间段占比</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <CentreLeft2Chart :dataList="dataList"/>
      </div>
    </div>
  </div>
</template>

<script>
import CentreLeft2Chart from "@/components/echart/centerLeft/centerLeft2Chart";
export default {
   props:{
    dataList:Array
  },
  data() {
    return {};
  },
  components: {
    CentreLeft2Chart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centreLeft2 {
  padding: 0.2rem;
  height: 5.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>
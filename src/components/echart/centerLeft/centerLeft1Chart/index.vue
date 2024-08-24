<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
   props:{
    powerTotalList:Array
  },
  data () {
    return {
      cdata: {
        xData: [],
        seriesData: [
        ]
      }
    }
  },
  components: {
    Chart,
  },
  created () {
    this.setDataList();
    //console.log(this.powerTotalList);
  },
  methods: {
    setDataList(){
      //console.log(this.powerTotalList);
      debugger;
      this.cdata.seriesData = this.powerTotalList;
      let data = this.cdata.seriesData;
      for(let i=0;i<data.length;i++){
        this.cdata.xData.push(data[i].name);
      }
      console.log(this.cdata.xData);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
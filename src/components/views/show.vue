<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width: 33.3%; height: 0.0625rem" />
          <div class="d-flex jc-center">
            <dv-decoration-8
              :color="['#568aea', '#000000']"
              style="width: 2.5rem; height: 0.625rem"
            />
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width: 3.125rem; height: 0.1rem"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width: 2.5rem; height: 0.625rem"
            />
          </div>
          <dv-decoration-10
            style="width: 33.3%; height: 0.0625rem; transform: rotateY(180deg)"
          />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="
                width: 6.25rem;
                text-align: left;
                background-color: #0f1325;
              "
            >
              <span class="react-before"></span>
              <span class="text">电量分析</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325">
              <span class="text colorBlue"></span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left  mr-3">
              <span ></span>
            </div>
            <div
              class="react-left mr-4"
              style="
                width: 6.25rem;
                background-color: #0f1325;
                text-align: right;
              "
            >
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box1">
            <div>
              <dv-border-box-12>
                <!--<centerLeft1 />-->
                <centerRight11 :leftData="leftData" />
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <centerLeft2 :dataList="dataList" />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <center :list="list" :centerList="centerList" />
            </div>
            <!-- 中间 -->

            <div>
              <dv-border-box-13>
                <centerRight1 :data="data" />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box1">
            <dv-border-box-13>
              <bottomLeft :peakList="peakList" />
            </dv-border-box-13>
            <dv-border-box-12>
              <!--<bottomRight />-->
              <centerLeft1 :powerTotalList="powerTotalList" />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { formatTime } from "../../utils/index";
import centerLeft1 from "./centerLeft1";
import centerLeft2 from "./centerLeft2";
import centerRight1 from "./centerRight1";
import centerRight11 from "./centerRight11";
import centerRight2 from "./centerRight2";
import center from "./center";
import bottomLeft from "./bottomLeft";
//import bottomRight from "./bottomRight";
import API from "@/api";
export default {
  data() {
    return {
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      data: null,
      leftData: null,
      list: [],
      peakList: Object,
      dataList: [],
      websock:null,
      centerList:null
    };
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight11,
    centerRight2,
    center,
    bottomLeft,
  },
  created() {
    
  },
  destroyed() {
    this.websocketclose();
  },
  mounted() {
    this.getExceptionData();
    this.getPowerTotal();
    this.getYesData();
    this.getCenterData();
    this.getPeakData();
    this.timeFn();
    this.cancelLoading();
  },
  created(){
    this.initWebSocket();
  },
  methods: {
    initWebSocket: function () {
      //debugger;
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https   key你自定义的key
      //var host = window.location.host
      this.websock = new WebSocket("ws://47.106.172.176:888/websocket/123");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
      console.log(this.websock);
      //this.websock.send("您好啊");
    },
    websocketonopen: function () {
    },
    websocketonerror: function (e) {
    },
    websocketonmessage: function (e) {
      this.centerList = JSON.parse(e.data);
      //this.centerList = e.data;
     //JSON.parse(e.data); //这个是收到后端主动推送的值
    },
    websocketclose: function (e) {
    },

    timeFn() {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    getYesData: function () {
      API.powerUtil
        .getYesData()
        .then(({ data }) => {
          if (data.status == 0) {
            this.data = data.data;
          } else {
            this.$message("请求失败！");
          }
        })
        .catch((data) => {
          this.$message("请求失败ww！");
        });
    },
    getCenterData: function () {
      API.powerUtil
        .getCenterData()
        .then(({ data }) => {
          if (data.status == 0) {
            this.list = data.data;
          } else {
            this.$message("请求失败！");
          }
        })
        .catch((data) => {
          this.$message("请求失败ww！");
        });
    },
    getPeakData: function () {
      API.powerUtil
        .getPeakData()
        .then(({ data }) => {
          if (data.status == 0) {
            this.peakList = data.data;
            //计算峰值
            let peakData = this.peakList.peak;
            let peakTotal = 0;
            for (let i = 0; i < peakData.length; i++) {
              peakTotal += peakData[i];
            }
            this.dataList.push({ value: peakTotal, name: "峰" });
            //计算平值
            let flatData = this.peakList.flat;
            let flatotal = 0;
            for (let i = 0; i < flatData.length; i++) {
              flatotal += flatData[i];
            }
            this.dataList.push({ value: flatotal, name: "平" });
            //计算谷值
            let ravineData = this.peakList.ravine;
            let ravineTotal = 0;
            for (let i = 0; i < ravineData.length; i++) {
              ravineTotal += ravineData[i];
            }
            this.dataList.push({ value: ravineTotal, name: "谷" });
          } else {
            this.$message("请求失败！");
          }
        })
        .catch((data) => {
          this.$message("请求失败ww！");
          //console.log(data);
        });
    },
    getPowerTotal: function () {
      API.powerUtil
        .getPowerTotal()
        .then(({ data }) => {
          if (data.status == 0) {
            this.powerTotalList = data.data;
          } else {
            this.$message("请求失败！");
          }
        })
        .catch((data) => {
          this.$message("请求失败ww！");
        });
    },
    getExceptionData: function () {
      API.powerUtil
        .getExceptionData()
        .then(({ data }) => {
          if (data.status == 0) {
            this.leftData = data.data;
            //console.log(this.leftData);
          } else {
            this.$message("请求失败！");
          }
        })
        .catch((data) => {
          this.$message("请求失败ww！");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/index.scss";
</style>
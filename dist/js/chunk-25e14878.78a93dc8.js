(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25e14878"],{"4a5f":function(t,a,e){},7159:function(t,a,e){t.exports=e.p+"img/img.146655c9.jpg"},"7ed4":function(t,a,e){"use strict";e("cadf"),e("551c"),e("097d");var s=e("2b0e"),i=new s["default"];a["a"]=i},e2ad:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[s("div",{staticClass:"user-info"},[s("img",{staticClass:"user-avator",attrs:{src:e("7159"),alt:""}}),s("div",{staticClass:"user-info-cont"},[s("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),s("div",[t._v(t._s(t.role))])])]),s("div",{staticClass:"user-info-list"},[t._v("\n          上次登录时间：\n          "),s("span",[t._v(t._s(t.lastTime))])]),s("div",{staticClass:"user-info-list"},[t._v("\n          上次登录IP：\n          "),s("span",[t._v(t._s(t.lastIP))])])])],1),s("el-col",{attrs:{span:16}},[s("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[s("div",{staticClass:"grid-content grid-con-1"},[s("i",{staticClass:"el-lwx-icon_zhanghao grid-con-icon"}),s("div",{staticClass:"grid-cont-right"},[s("div",{staticClass:"grid-num"},[t._v(t._s(t.recordTotal))]),s("div",[t._v("用户访问量")])])])])],1),s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[s("div",{staticClass:"grid-content grid-con-2"},[s("i",{staticClass:"el-lwx-xiaoxi grid-con-icon"}),s("div",{staticClass:"grid-cont-right"},[s("div",{staticClass:"grid-num"},[t._v("321")]),s("div",[t._v("系统消息")])])])])],1),s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[s("div",{staticClass:"grid-content grid-con-3"},[s("i",{staticClass:"el-lwx-icon_zhanghao grid-con-icon"}),s("div",{staticClass:"grid-cont-right"},[s("div",{staticClass:"grid-num"},[t._v(t._s(t.userTotal))]),s("div",[t._v("用户数量")])])])])],1)],1),s("el-card",{staticStyle:{height:"132px"},attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("系统更新")])]),s("el-table",{staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.todoList,"show-header":!1,height:"304"}},[s("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(a){return[s("div",{staticClass:"todo-item",class:{"todo-item-del":a.row.status}},[t._v(t._s(a.row.title))])]}}])})],1)],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"Chart"},[s("h1",{staticStyle:{"text-align":"center"}},[t._v("最近七天厦门厂区用电总量")]),s("ve-histogram",{attrs:{data:t.chartData,settings:t.chartSettings}})],1)])],1),s("el-col",{attrs:{span:12}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"Chart"},[s("h1",{staticStyle:{"text-align":"center"}},[t._v("最近七天厦门厂区用电趋势")]),s("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings}})],1)])],1)],1)],1)},i=[],n=(e("ac6a"),e("cadf"),e("551c"),e("097d"),e("7ed4")),r=e("365c"),o={name:"dashboard",data:function(){return this.chartSettings={labelMap:{PowerTotal:"厦门厂区用电总量(KWh)"}},{recordTotal:"",userTotal:"",lastIP:"",lastTime:"",name:localStorage.getItem("username"),chartData:[],todoList:[{title:"7.30号更新",status:!1}],data:[]}},components:{},computed:{role:function(){return localStorage.getItem("rolename")}},created:function(){this.getTimeAndIp(),this.fillData(),this.handleListener()},activated:function(){this.handleListener()},deactivated:function(){window.removeEventListener("resize",this.renderChart),n["a"].$off("collapse",this.handleBus)},methods:{getTimeAndIp:function(){var t=this,a={geNumber:localStorage.getItem("username")};r["a"].userUtil.getTimeAndIp(a).then((function(a){var e=a.data;0==e.status?(t.lastIP=e.data.ip,t.lastTime=e.data.time,t.recordTotal=e.data.recordTotal,t.userTotal=e.data.userTotal):t.$message("请求失败！")})).catch((function(a){t.$message("请求失败！"),console.log(a)}))},fillData:function(){var t=this;r["a"].powerUtil.getTotalPowerByWeek().then((function(a){var e=a.data;0==e.status?t.chartData={columns:["Time","PowerTotal"],rows:e.data.list}:t.$message("请求失败！")})).catch((function(a){t.$message("请求失败ww！"),console.log(a)}))},changeDate:function(){var t=(new Date).getTime();this.data.forEach((function(a,e){var s=new Date(t-864e5*(6-e));a.name="".concat(s.getFullYear(),"/").concat(s.getMonth()+1,"/").concat(s.getDate())}))},handleListener:function(){n["a"].$on("collapse",this.handleBus)},handleBus:function(t){var a=this;setTimeout((function(){a.renderChart()}),300)},renderChart:function(){}}},c=o,l=(e("fcce"),e("2877")),d=Object(l["a"])(c,s,i,!1,null,"57e785f9",null);d.options.__file="Dashboard.vue";a["default"]=d.exports},fcce:function(t,a,e){"use strict";var s=e("4a5f"),i=e.n(s);i.a}}]);
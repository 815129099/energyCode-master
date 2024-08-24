import request from '../utils/request'
import requestURL from '../utils/requestUrl'
import requestParam from '../utils/requestParam'


// 获取菜单
export function getMenu(params) {
  return request({
    method: 'post',
    url: '/api/util/menu.do',
    //url:'http://10.30.100.110:8088/api/util/menu.do',
    data: JSON.stringify(params)
  })
}


// 导出数据
export function exportData() {
  return request({
    method: 'post',
    url: '/api/power/exportUser.do',
    //url:'http://10.30.100.110:8088/api/power/exportUser.do',
    data: requestParam()
  })
}

//查询电量数据
export function getPowerData(params) {
  return request({
    method: 'post',
    url: '/api/power/Power.do',
    //url:'http://10.30.100.110:8088/api/power/Power.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//电量分析数据
export function getPowerAnalyze(params) {
  return request({
    method: 'post',
    url: '/api/power/PowerAnalyze.do',
    //url:'http://10.30.100.110:8088/api/power/PowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//瞬时量电量分析数据
export function getInstantPowerAnalyze(params) {
  return request({
    method: 'post',
    url: '/api/power/InstantPowerAnalyze.do',
    //url:'http://10.30.100.110:8088/api/power/InstantPowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//导出
export function exportData1() {
  return request({
    method: 'post',
    url: '/api/power/exportTest.do',
    //url:'http://10.30.100.110:8088/api/power/exportTest.do',
    // data: requestParam(params, 'post', false, 'json')
    data: requestParam(),
    responseType: 'blob'
  })
}

//最近七天的电表总量
export function getTotalPowerByWeek(params) {
  return request({
    method: 'post',
    url: '/api/util/getTotalPower.do',
    //url:'http://10.30.100.110:8088/api/util/getTotalPower.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params),
  })
}

//查询电量数据
export function getPowerByRatio(params) {
  return request({
    method: 'post',
    url: '/api/power/PowerByRatio.do',
    //url:'http://10.30.100.110:8088/api/power/Power.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}


//平台大数据显示右侧耗电排行
export function getYesData(params) {
  return request({
    method: 'post',
    url: '/api/power/getYesData.do',
    //url:'http://10.30.100.110:8088/api/power/Power.do',
    // data: requestParam(params, 'post', false, 'json')
    data: requestParam()
  })
}


//平台大数据显示中间
export function getCenterData(params) {
  return request({
    method: 'post',
    url: '/api/power/getCenterData.do',
    //url:'http://10.30.100.110:8088/api/power/Power.do',
    // data: requestParam(params, 'post', false, 'json')
    data: requestParam()
  })
}


//显示峰平谷数据
export function getPeakData(params) {
  return request({
    method: 'post',
    url: '/api/power/getPeakData.do',
    //url:'http://10.30.100.110:8088/api/power/Power.do',
    // data: requestParam(params, 'post', false, 'json')
    data: requestParam()
  })
}



//显示电表电量占比数据
export function getPowerTotal(params) {
  return request({
    method: 'post',
    url: '/api/power/getPowerTotal.do',
    //url:'http://10.30.100.110:8088/api/power/Power.do',
    // data: requestParam(params, 'post', false, 'json')
    data: requestParam()
  })
}

//显示异常排行榜
export function getExceptionData(params) {
  return request({
    method: 'post',
    url: '/api/power/getExceptionData.do',
    //url:'http://10.30.100.110:8088/api/power/Power.do',
    // data: requestParam(params, 'post', false, 'json')
    data: requestParam()
  })
}

//电量分析数据
export function getPowerPredict(params) {
  return request({
    method: 'post',
    url: '/api/power/powerPredict.do',
    //url:'http://10.30.100.110:8088/api/power/PowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//电量预测数据
export function generaPowerPredict(params) {
  return request({
    method: 'post',
    url: '/api/power/generaPowerPredict.do',
    //url:'http://10.30.100.110:8088/api/power/PowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//电力定价
export function generaPowerPrice(params) {
  return request({
    method: 'post',
    url: '/api/power/generaPowerPrice.do',
    //url:'http://10.30.100.110:8088/api/power/PowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}


//消息列表
export function listMessage(params) {
  return request({
    method: 'post',
    url: '/api/util/listMessage.do',
    //url:'http://10.30.100.110:8088/api/power/PowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//更新消息
export function updateMessage(params) {
  return request({
    method: 'post',
    url: '/api/util/updateMessage.do',
    //url:'http://10.30.100.110:8088/api/power/PowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}


//电量分析数据
export function getPricePredict(params) {
  return request({
    method: 'post',
    url: '/api/power/pricePredict.do',
    //url:'http://10.30.100.110:8088/api/power/PowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}
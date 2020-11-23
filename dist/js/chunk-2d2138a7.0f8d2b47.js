(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2138a7"],{acb1:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"filter-container"},[s("el-form",[s("el-form-item",[e.hasPerm("user:add")?s("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.showCreate}},[e._v("添加\n        ")]):e._e()],1)],1)],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{align:"center",label:"序号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),s("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",label:"昵称",prop:"nickname"}}),s("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",label:"用户名",prop:"username"}}),s("el-table-column",{attrs:{align:"center",label:"角色",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.roleId?s("el-tag",{attrs:{type:"success"},domProps:{textContent:e._s(t.row.roleName)}}):s("el-tag",{attrs:{type:"primary"},domProps:{textContent:e._s(t.row.roleName)}})]}}])}),s("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"createTime",width:"170"}}),s("el-table-column",{attrs:{align:"center",label:"最近修改时间",prop:"updateTime",width:"170"}}),e.hasPerm("user:update")?s("el-table-column",{attrs:{align:"center",label:"管理",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:function(s){e.showUpdate(t.$index)}}},[e._v("修改")]),t.row.userId!=e.userId?s("el-button",{attrs:{type:"danger",icon:"delete"},on:{click:function(s){e.removeUser(t.$index)}}},[e._v("删除\n        ")]):e._e()]}}])}):e._e()],1),s("el-pagination",{attrs:{"current-page":e.listQuery.pageNum,"page-size":e.listQuery.pageRow,total:e.totalCount,"page-sizes":[10,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),s("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{ref:"tempUser",staticClass:"small-space",staticStyle:{width:"300px","margin-left":"50px"},attrs:{model:e.tempUser,rules:e.rules,"label-position":"left","label-width":"80px"}},["create"==e.dialogStatus?s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{attrs:{type:"text"},model:{value:e.tempUser.username,callback:function(t){e.$set(e.tempUser,"username",t)},expression:"tempUser.username"}})],1):e._e(),"create"==e.dialogStatus?s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password"},model:{value:e.tempUser.password,callback:function(t){e.$set(e.tempUser,"password",t)},expression:"tempUser.password"}})],1):s("el-form-item",{attrs:{label:"新密码"}},[s("el-input",{attrs:{type:"password",placeholder:"不填则表示不修改"},model:{value:e.tempUser.password,callback:function(t){e.$set(e.tempUser,"password",t)},expression:"tempUser.password"}})],1),s("el-form-item",{attrs:{label:"角色",prop:"roleId"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.tempUser.roleId,callback:function(t){e.$set(e.tempUser,"roleId",t)},expression:"tempUser.roleId"}},e._l(e.roles,(function(e){return s("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId}})})),1)],1),s("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[s("el-input",{attrs:{type:"text"},model:{value:e.tempUser.nickname,callback:function(t){e.$set(e.tempUser,"nickname",t)},expression:"tempUser.nickname"}})],1),s("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.tempUser.phone,callback:function(t){e.$set(e.tempUser,"phone",t)},expression:"tempUser.phone"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.tempUser.email,callback:function(t){e.$set(e.tempUser,"email",t)},expression:"tempUser.email"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),"create"==e.dialogStatus?s("el-button",{attrs:{type:"success"},on:{click:function(t){e.createUser("tempUser")}}},[e._v("创 建")]):s("el-button",{attrs:{type:"primary"},on:{click:e.updateUser}},[e._v("修 改")])],1)],1)],1)},a=[],i=s("cebc"),l=s("2f62"),o=s("365c"),n={data:function(){return{totalCount:0,list:[],listLoading:!1,listQuery:{pageNum:1,pageRow:50},roles:[],dialogStatus:"create",dialogFormVisible:!1,textMap:{update:"编辑",create:"新建用户"},tempUser:{username:"",password:"",nickname:"",roleId:"",userId:"",phone:"",email:""},rules:{username:[{required:!0,message:"请填写工号",trigger:"blur"},{min:7,max:7,message:"请填写7个字符的工号",trigger:"blur"}],nickname:[{required:!0,message:"请填写姓名",trigger:"blur"},{min:2,max:4,message:"请填写2-4个字符的姓名",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{min:6,max:10,message:"请填写6-10个字符的密码",trigger:"blur"}],roleId:[{required:!0,message:"请选择角色",trigger:"blur"}],phone:[{validator:function(e,t,s){var r=o["a"].validate.VDATA(t,{required:{msg:"请输入手机号"},mphone:{msg:"请输入有效的手机号"}});r.result?s():s(new Error(r.msg))},trigger:"blur"}],email:[{validator:function(e,t,s){var r=o["a"].validate.VDATA(t,{required:{msg:"请输入邮箱"},email:{msg:"请输入有效的邮箱"}});r.result?s():s(new Error(r.msg))},trigger:"blur"}]}}},created:function(){this.getList(),(this.hasPerm("user:add")||this.hasPerm("user:update"))&&this.getAllRoles()},computed:Object(i["a"])({},Object(l["b"])(["userId"])),methods:{getAllRoles:function(){var e=this;this.api({url:"/api/user/getAllRoles",method:"get"}).then((function(t){e.roles=t.list}))},getList:function(){var e=this;this.listLoading=!0,this.api({url:"/api/user/list",method:"get",params:this.listQuery}).then((function(t){e.listLoading=!1,e.list=t.list,e.totalCount=t.totalCount}))},handleSizeChange:function(e){this.listQuery.pageRow=e,this.handleFilter()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getList()},handleFilter:function(){this.listQuery.pageNum=1,this.getList()},getIndex:function(e){return(this.listQuery.pageNum-1)*this.listQuery.pageRow+e+1},showCreate:function(){this.tempUser.username="",this.tempUser.password="",this.tempUser.nickname="",this.tempUser.roleId="",this.tempUser.userId="",this.dialogStatus="create",this.dialogFormVisible=!0},showUpdate:function(e){var t=this.list[e];this.tempUser.username=t.username,this.tempUser.nickname=t.nickname,this.tempUser.roleId=t.roleId,this.tempUser.userId=t.userId,this.tempUser.deleteStatus="1",this.tempUser.password="",this.dialogStatus="update",this.dialogFormVisible=!0},createUser:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.api({url:"/api/user/addUser",method:"post",data:t.tempUser}).then((function(){t.getList(),t.dialogFormVisible=!1}))}))},updateUser:function(){var e=this,t=this;this.api({url:"/api/user/updateUser",method:"post",data:this.tempUser}).then((function(){var s="修改成功";e.dialogFormVisible=!1,e.userId===e.tempUser.userId&&(s="修改成功,部分信息重新登录后生效"),e.$message({message:s,type:"success",duration:1e3,onClose:function(){t.getList()}})}))},removeUser:function(e){var t=this;this.$confirm("确定删除此用户?","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning"}).then((function(){var s=t.list[e];s.deleteStatus="2",t.api({url:"/api/user/updateUser",method:"post",data:s}).then((function(){t.getList()})).catch((function(){t.$message.error("删除失败")}))}))}}},u=n,p=s("2877"),m=Object(p["a"])(u,r,a,!1,null,null,null);m.options.__file="user.vue";t["default"]=m.exports}}]);
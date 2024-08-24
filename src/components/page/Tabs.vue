<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><i class="el-icon-lx-copy"></i> 消息通知</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-tabs v-model="message">
        <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
          <el-table :data="unread" :show-header="false" style="width: 100%">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{ scope.row.message }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="create_time" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button size="small" @click="handleRead(scope.$index)"
                  >标为已读</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="primary" @click="handleAllRead"
              >全部标为已读</el-button
            >
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息(${read.length})`" name="second">
          <template v-if="message === 'second'">
            <el-table :data="read" :show-header="false" style="width: 100%">
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{ scope.row.message }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="create_time" width="150"></el-table-column>
              <el-table-column width="120">
                <template slot-scope="scope">
                  <el-button type="danger" @click="handleDel(scope.$index)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="handle-row">
              <el-button type="danger" @click="handleAllDel"
                >删除全部</el-button
              >
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
          <template v-if="message === 'third'">
            <el-table :data="recycle" :show-header="false" style="width: 100%">
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{ scope.row.message }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="create_time" width="150"></el-table-column>
              <el-table-column width="120">
                <template slot-scope="scope">
                  <el-button @click="handleRestore(scope.$index)"
                    >还原</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="handle-row">
              <el-button type="danger" @click="handleAllRestore"
                >清空回收站</el-button
              >
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import API from "@/api";
export default {
  name: "tabs",
  data() {
    return {
      message: "first",
      showHeader: false,
      unread: [],
      read: [],
      recycle: [],
    };
  },
  created() {
    this.listMessage();
  },
  methods: {
    handleRead(index) {
      const item = this.unread[index];
      item.dataStatus = 1;
      let list = [];
      list.push(item);
      this.updateMessage(list);
    },
    handleAllRead() {
      for (let i = 0; i < this.unread.length; i++) {
        this.unread[i].dataStatus = 1;
      }
      this.updateMessage(this.unread);
    },
    handleDel(index) {
      const item = this.read[index];
      item.dataStatus = 2;
      let list = [];
      list.push(item);
      this.updateMessage(list);
    },
    handleAllDel() {
      for (let i = 0; i < this.read.length; i++) {
        this.read[i].dataStatus = 2;
      }
      this.updateMessage(this.read);
    },
    handleRestore(index) {
      const item = this.recycle[index];
      item.dataStatus = 1;
      let list = [];
      list.push(item);
      this.updateMessage(list);
    },
    handleAllRestore() {
      for (let i = 0; i < this.recycle.length; i++) {
        this.recycle[i].dataStatus = 3;
      }
      this.updateMessage(this.recycle);
    },
    listMessage: function () {
      let params = {
        geNumber: localStorage.getItem("username"),
      };
      API.powerUtil
        .listMessage(params)
        .then(({ data }) => {
          console.log(data.data);
          if (data.status == 0) {
            this.unread = [];
            this.read = [];
            this.recycle = [];
            for (var i = 0; i < data.data.length; i++) {
              var current = data.data[i];
              if (current.dataStatus == 0) {
                //未读
                this.unread.push(current);
              } else if (current.dataStatus == 1) {
                //已读
                this.read.push(current);
              } else if (current.dataStatus == 2) {
                //回收
                this.recycle.push(current);
              }
            }
          } else {
            this.$message("请求失败！");
          }
        })
        .catch((data) => {
          this.$message("请求失败！");
          console.log(data);
        });
    },
    updateMessage: function (list) {
      let params = {
        messageList: list,
        geNumber: localStorage.getItem("username"),
      };
      API.powerUtil
        .updateMessage(params)
        .then(({ data }) => {
          if (data.status == 0) {
            this.listMessage();
          } else {
            this.$message("请求失败！");
          }
        })
        .catch((data) => {
          this.$message("请求失败！");
        });
    },
  },
  computed: {
    unreadNum() {
      return this.unread.length;
    },
  },
};
</script>

<style>
.message-title {
  cursor: pointer;
}
.handle-row {
  margin-top: 30px;
}
</style>


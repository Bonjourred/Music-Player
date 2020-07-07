<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <img src="../assets/07.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  //生命周期钩子 created
  //回调函数，添加之后自动执行
  //内部可以通过this访问到vue实例
  created() {
    // console.log(this.$route.query.t);
  },
};
</script>

<style></style>

<template>
  <div>
    <img src="../assets/03.png" alt="" />
    <el-button @click="clickMe" type="success">成功按钮</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    clickMe() {
      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息",
      });
    },
  },
};
</script>

<style></style>

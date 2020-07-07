<template>
  <div class="top">
    <img src="../assets/01.png" alt="" />
    <input type="text" v-model="inputValue" @keyup.enter="toSearch" />
    <!-- <el-button type="success">成功按钮</el-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    toSearch() {
      //如果为空  提示
      if ((this.inputValue = "")) {
        alert("请输入内容");
      } else {
        //否则跳转t
        // this.$router.push("/results");`
        //携带数据
        // this.$router.push("/results?q=" + this.inputValue);
        // this.$router.push(`/results?q=${this.inputValue}`);
        this.$route.push(`/results?s=${this.inputValue}`);
      }
    },
  },
};
</script>

<style>
.top {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
}
</style>

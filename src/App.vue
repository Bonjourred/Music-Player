<template>
  <div>
    <!-- 头部组件 -->
    <top> </top>
    <!-- 主体组件 -->
    <index></index>
  </div>
</template>

<script>
import top from "./components/01.top";
import index from "./components/02.index";

export default {
  components: {
    top,
    index,
  },
  methods: {
    sayHi() {},
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

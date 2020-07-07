<template>
  <div class="index">
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/tuijian">推荐歌单</router-link>
        </li>
        <li>
          <router-link to="/newest">最新新闻</router-link>
        </li>
        <li>
          <router-link to="/mvs">最新mv</router-link>
        </li>
      </ul>
    </div>
    <!-- 右侧的容器 -->
    <div class="main">
      <!-- 路由的出口 地址命中之后，把组件显示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import discovery from "./03.discovery";

export default {
  //   components: {
  //     discovery,
  //   },
};
</script>

<style>
.index {
  display: flex;
}
.index .nav {
  width: 200px;
  height: 830px;
  background-color: #ededed;
}
.index .nav li {
  text-align: center;
  margin: 10px;
}
.main {
  background-color: orange;
  flex: 1;
}
a.router-link-active {
  color: white;
  background-color: orange;
}
</style>

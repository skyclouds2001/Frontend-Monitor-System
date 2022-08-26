<template>
  <el-menu router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/monitor/exception">异常监控</el-menu-item>
    <el-menu-item index="/monitor/performance">关键性能数据监控</el-menu-item>
    <el-menu-item index="/monitor/behavior">用户行为数据监控</el-menu-item>
    <el-menu-item index="/monitor/request">HTTP请求监控</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AsideBar',
});
</script>

<style scoped>

</style>

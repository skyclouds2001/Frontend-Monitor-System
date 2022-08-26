<template>
  <el-menu router>
    <el-menu-item index="1">异常监控</el-menu-item>
    <el-menu-item index="2">关键性能数据监控</el-menu-item>
    <el-menu-item index="3">用户行为数据监控</el-menu-item>
    <el-menu-item index="4">HTTP请求监控</el-menu-item>
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

<script setup lang="ts">
import AsideBar from '@/components/AsideBar.vue';
import PageHeader from '@/components/PageHeader.vue';
</script>

<template>
  <el-container class="main">
    <el-aside class="aside" width="300px">
      <AsideBar />
    </el-aside>
    <el-main class="page">
      <el-container class="page-main">
        <el-header class="page-header" height="60px">
          <PageHeader />
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
        <el-footer class="page-footer" height="60px" hidden></el-footer>
      </el-container>
    </el-main>
  </el-container>
</template>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .aside {
    height: 100%;
    min-height: 100vh;
  }

  .page {
    padding: 0;
    height: 100%;
    min-height: 100vh;

    .page-main {

      .page-header {
        border-bottom: 1px solid #eee;
      }

      .page-content {}

      .page-footer {
        border-top: 1px solid #ccc;
      }
    }
  }
}
</style>

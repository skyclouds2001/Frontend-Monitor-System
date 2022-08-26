<script setup lang="ts">
import AsideBar from '@/components/AsideBar.vue';
import PageHeader from '@/components/PageHeader.vue';
</script>

<template>
  <el-container>
    <el-aside width="300px">
      <AsideBar />
    </el-aside>
    <el-main>
      <el-container>
        <el-header height="60px">
          <PageHeader />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="60px"></el-footer>
      </el-container>
    </el-main>
  </el-container>
</template>

<style scoped>
</style>

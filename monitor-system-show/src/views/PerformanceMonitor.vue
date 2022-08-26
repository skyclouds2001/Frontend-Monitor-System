<template>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

useStore().commit('updateTitle','关键性能数据监控');
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PerformanceMonitor',
});
</script>

<style scoped lang="less">
</style>

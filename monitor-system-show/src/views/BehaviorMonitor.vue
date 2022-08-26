<template>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

useStore().commit('updateTitle','用户行为数据监控');
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BehaviorMonitor',
});
</script>

<style scoped lang="less">
</style>

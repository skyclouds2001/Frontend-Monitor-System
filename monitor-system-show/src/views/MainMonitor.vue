<template>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

useStore().commit('updateTitle','首页');
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainMonitor',
});
</script>

<style scoped lang="less">
</style>

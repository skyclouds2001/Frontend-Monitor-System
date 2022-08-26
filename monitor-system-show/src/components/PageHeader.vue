<template>
  <el-page-header class="header" title="返回" :content="title" />
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();

const title = store.state.pageHeaderTitle;
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHeader',
});
</script>

<style scoped lang="less">
.header {
  height: var(--el-header-height);
  line-height: var(--el-header-height);
}
</style>

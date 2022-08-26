<template>
  <el-page-header class="header" title="返回" :content="title" @back="back" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();

const store = useStore();

const title = computed(() => store.state.pageHeaderTitle);

const back = () => {
  router.push('/')
};
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

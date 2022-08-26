<template>
  <div>
    <div>
      <span style="font-weight: bold; font-size: 32px;">JS ERROR</span>
    </div>
    <el-table :data="records" style="width: 1000px;" stripe border highlight-current-row current-row-key="timeStamp">
      <el-table-column prop="type" label="类型" width="200" />
      <el-table-column prop="message" label="描述" width="400" />
      <el-table-column prop="filename" label="文件名" width="200" />
      <el-table-column prop="lineno" label="行号" width="100" />
      <el-table-column prop="colno" label="列号" width="100" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { getRecords } from '@/api/getRecords';

useStore().commit('updateTitle','异常监控');

const records = ref<object[]>([]);

const init = async () => {
  try {
    const result = await getRecords();

    if (result.success) {
      records.value = result.data.map((v: any) => v.record) as object[];
    }
  } catch (error) {
    console.error(error);
  }
}

init();
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExceptionMonitor',
});
</script>

<style scoped lang="less">
</style>

<script setup>
import switchLayoutList from '@/layout/switch/index.js'
import { useSystemStore } from '@/stores/system'

const systemStore = useSystemStore()

// 初始化布局列表
systemStore.initSwitchLayout(switchLayoutList)
</script>
<!-- :is="systemStore.currentSwitchlayout" 通过is实现layout动态组件切换 -->
<template>
  <div class="switch-index">
    <component :is="systemStore.currentSwitchlayout" />
  </div>
</template>

<style scoped></style>

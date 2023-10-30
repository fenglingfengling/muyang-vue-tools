<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true
  }
})
const { menu } = toRefs(props)
</script>
<template>
    <!-- 封装一个menuItem 看他是否有菜单子项,副菜单,菜单子项组件 -->
    <template v-if="!menu.children">
    <a-menu-item :key="menu.path">
      <template #icon v-if="menu?.icon">
        <component :is="menu?.icon"></component>
      </template>
      {{ menu.title }}
    </a-menu-item>
  </template>
  <a-sub-menu v-else :key="menu.path" :title="menu.title">
    <template #icon v-if="menu?.icon">
      <component :is="menu?.icon"></component>
    </template>
    <MenuItem
      v-for="menuChild of menu.children"
      :key="menuChild.path"
      :menu="menuChild"
    />
  </a-sub-menu>
</template>


<style scoped>

</style>
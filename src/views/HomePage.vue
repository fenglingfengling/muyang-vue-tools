<script setup>
  const handleClickMini = ()=>{
    AMessage.info('hello xianzao, click miniAButton!');
  }
</script>

<template>
  <div class="w-full flex justify-center items-center flex-1">
    <div class="w-full h300px flex justify-center items-center">
      <div class="w-150px h-150px rounded-[50%] bg-[var(--color-fill-1)] flex justify-center items-center">
        <icon-ri-hammer-fill class="text-52px" />
      </div>
      <!-- <div class="ml-20px">
        <div>
          Hello mumu, this isa home page
        </div>
        <a-button type="primary" size="mini" @click="handleClickMini">Mini</a-button>
        <a-button type="outline" status="warning" size="small">Small</a-button>
        <a-button type="text" status="success" size="medium">Medium</a-button>
        <a-button type="outline" status="danger" size="large">Large</a-button>
        按需引入组件 import Components from 'unplugin-vue-components/vite'
        <button class="bg-blue-400 hover:bg-blue-500 text-sm text-wihite font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600" >Button</button>
        <button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        border="2 rounded blue-200"
        >Button1</button>
        <button class="btn-style">Button2</button>
        <HelloWorld/>
        <div class="text-200px">哈哈</div>
        vue3 icon配置 vite.config.js 引入 unplugin-icons extensions.json "antfu.iconify" 写 icon-ep:apple  https://icones.netlify.app/collection/ep 
        <div class="icon-style bg-pink h-100px">
          <icon-ep:camera-filled class="text-20px" />
          <icon-home-copy class="text-20px" />
          <icon-home-download class="text-20px"/>
          <icon-ep:apple class="text-20px" />
          <icon-ep:apple class="text-20px" />
          <icon-ep:comment class="text-20px" />
          <icon-ep:wind-power />
        </div>
      </div> -->
    </div>
  </div>
</template>
<style>
.btn-style{
@apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4
@apply hover:bg-blue-500:
@apply dark:bg-blue-500 dark:hover: bg-blue-600
}
.icon-style{
  @apply mt-10px;
}
</style>

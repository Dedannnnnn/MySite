<script setup>
// 这里可以存放简单的逻辑，比如点击跳转
const handleEnter = () => {
  console.log("点击了进入按钮");
  // 未来这里写路由跳转逻辑
};
</script>

<template>
  <div
    class="h-screen flex flex-col justify-center items-center bg-gray-50 px-4"
  >
    <div
      class="w-32 h-32 bg-gray-300 rounded-full mb-6 shadow-lg overflow-hidden flex items-center justify-center"
    >
      <span class="text-4xl">👋</span>
    </div>

    <h1
      class="text-4xl sm:text-6xl font-bold text-gray-800 mb-4 tracking-tight"
    >
      你好，我是 <span class="text-blue-600">Dedan</span>
    </h1>

    <p class="text-lg text-gray-500 mb-8 text-center max-w-lg leading-relaxed">
      这是我的个人主页。
      <br />
      Welcome to my personal playground.
    </p>

    <div class="flex gap-4">
      <button
        @click="handleEnter"
        class="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md"
      >
        进入主页
      </button>

      <a
        href="https://github.com"
        target="_blank"
        class="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition-colors"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

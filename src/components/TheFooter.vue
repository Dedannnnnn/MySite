<script setup>
// 获取当前年份，用于版权信息自动更新
const currentYear = new Date().getFullYear();
</script>

<template>
  <!-- 
    页脚容器
    mt-auto: 在 Flex 布局中自动推到底部 (配合 App.vue 的 flex-grow)
    border-t: 顶部边框
  -->
  <footer class="bg-white border-t border-gray-100 py-12 mt-auto">
    <div
      class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <!-- 左侧：品牌信息 -->
      <div class="text-center md:text-left">
        <h3 class="text-xl font-bold text-gray-800 mb-2">Dedan's Blog</h3>
        <p class="text-gray-500 text-sm">记录生活，分享技术，探索世界。</p>
      </div>

      <!-- 右侧：社交图标 -->
      <div class="flex gap-6">
        <!-- GitHub -->
        <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors">
          <div class="i-carbon-logo-github text-xl"></div>
          <!-- sr-only: 仅供屏幕阅读器读取，视觉隐藏 -->
          <span class="sr-only">GitHub</span>
        </a>
        <!-- Twitter -->
        <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
          <div class="i-carbon-logo-twitter text-xl"></div>
          <span class="sr-only">Twitter</span>
        </a>
        <!-- Instagram -->
        <a href="#" class="text-gray-400 hover:text-pink-600 transition-colors">
          <div class="i-carbon-logo-instagram text-xl"></div>
          <span class="sr-only">Instagram</span>
        </a>
      </div>
    </div>

    <!-- 底部版权信息 -->
    <div
      class="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-gray-50 text-center text-gray-400 text-sm"
    >
      &copy; {{ currentYear }} Dedan. All rights reserved.
    </div>
  </footer>
</template>

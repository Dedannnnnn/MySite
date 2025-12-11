<script setup>
// 引入页脚组件
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <!-- 
    应用根容器
    min-h-screen: 确保容器至少占满整个屏幕高度
    flex flex-col: 使用 Flex 垂直布局，配合 flex-grow 实现 Sticky Footer
    font-sans: 设置默认字体
  -->
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans">
    <!-- 
      顶部导航栏 
      sticky top-0: 粘性定位，滚动时固定在顶部
      z-50: 确保层级最高，遮挡滚动内容
      backdrop-blur-md: 背景毛玻璃效果 (需要配合 bg-white/80 半透明背景)
    -->
    <nav
      class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div
        class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"
      >
        <!-- Logo -->
        <router-link
          to="/"
          class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Dedan.
        </router-link>

        <!-- 导航链接 -->
        <div class="flex gap-8">
          <!-- 
            首页链接
            group: 用于控制内部下划线动画
          -->
          <router-link
            to="/"
            class="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group"
          >
            首页
            <!-- 悬停时的下划线动画 -->
            <span
              class="absolute bottom-[-20px] left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            ></span>
          </router-link>

          <!-- 关于页链接 -->
          <router-link
            to="/about"
            class="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group"
          >
            关于
            <span
              class="absolute bottom-[-20px] left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            ></span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- 
      主内容区域
      flex-grow: 占据剩余空间，将页脚推到底部
    -->
    <main class="flex-grow">
      <!-- 
        router-view: 路由出口，根据 URL 渲染对应的组件
        v-slot: 获取当前路由对应的组件 (Component)
      -->
      <router-view v-slot="{ Component }">
        <!-- transition: 页面切换时的过渡动画 -->
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚组件 -->
    <TheFooter />
  </div>
</template>

<style>
/* 
  路由过渡动画定义
  fade-enter-active: 进入过程中的状态
  fade-leave-active: 离开过程中的状态
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

/* 
  fade-enter-from: 进入开始时的状态 (透明)
  fade-leave-to: 离开结束时的状态 (透明)
*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 
  Vue Router 自动添加的类
  当链接对应的路由激活时，会应用此样式
*/
.router-link-active {
  color: #2563eb !important; /* blue-600 */
}
</style>

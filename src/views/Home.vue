<script setup>
// 引入子组件
import HomeHero from "../components/HomeHero.vue";
import PostCard from "../components/PostCard.vue";

// ----------------------------------------------------------------
// 模拟数据
// ----------------------------------------------------------------

// 文章列表数据
// 在实际项目中，这些数据通常从 API 获取
const posts = [
  {
    id: 1,
    title: "Vue 3 Composition API 最佳实践",
    excerpt:
      "深入探讨 Vue 3 组合式 API 的使用技巧，如何更好地组织代码逻辑，以及在大型项目中的应用模式。",
    date: "2023-10-24",
    category: "Vue.js",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "TypeScript 高级类型体操",
    excerpt:
      "探索 TypeScript 类型系统的边界，学习条件类型、映射类型等高级特性，提升代码的类型安全性。",
    date: "2023-10-20",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "现代前端构建工具 Vite 解析",
    excerpt:
      "为什么 Vite 如此之快？本文将深入源码，解析 Vite 的冷启动原理和 HMR 实现机制。",
    date: "2023-10-15",
    category: "Tooling",
    image:
      "https://images.unsplash.com/photo-1618477247222-ac5912454594?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

// 分类列表数据
// 用于展示博客的主要内容分类
const categories = [
  { name: "Frontend", count: 12, color: "bg-blue-100 text-blue-600" },
  { name: "Backend", count: 5, color: "bg-green-100 text-green-600" },
  { name: "DevOps", count: 3, color: "bg-purple-100 text-purple-600" },
  { name: "Life", count: 8, color: "bg-orange-100 text-orange-600" },
];
</script>

<template>
  <div class="home-page">
    <!-- 
      Hero 区域组件
      展示大标题、简介和搜索框
    -->
    <HomeHero />

    <!-- 
      特色分类区域 
      py-16: 上下内边距
      bg-gray-50: 浅灰色背景，区分不同区块
    -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Explore Topics
        </h2>
        <!-- 
          分类卡片网格
          grid-cols-2: 默认 2 列
          md:grid-cols-4: 中等屏幕以上 4 列
        -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="cat in categories"
            :key="cat.name"
            class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center group"
          >
            <!-- 分类图标/颜色块 -->
            <div
              :class="cat.color"
              class="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
            >
              <div class="i-carbon-hashtag text-xl"></div>
            </div>
            <h3 class="font-bold text-gray-900">{{ cat.name }}</h3>
            <p class="text-sm text-gray-500">{{ cat.count }} articles</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 
      最新文章区域 
      py-20: 较大的上下内边距
    -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Latest Posts</h2>
          <a
            href="#"
            class="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
          >
            View all
            <div class="i-carbon-arrow-right"></div>
          </a>
        </div>

        <!-- 
          文章列表网格
          grid-cols-1: 移动端单列
          md:grid-cols-2: 平板双列
          lg:grid-cols-3: 桌面端三列
        -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 
            PostCard 组件
            通过 props 传递文章数据
          -->
          <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
    </section>

    <!-- 
      订阅区域 (Newsletter)
      bg-gray-900: 深色背景
      text-white: 白色文字
    -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="i-carbon-email text-5xl mb-6 text-blue-500 mx-auto"></div>
        <h2 class="text-3xl font-bold mb-4">Subscribe to my newsletter</h2>
        <p class="text-gray-400 mb-8 max-w-xl mx-auto">
          Get the latest articles, tutorials, and updates delivered straight to
          your inbox. No spam, unsubscribe at any time.
        </p>

        <!-- 订阅表单 -->
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-500"
          />
          <button
            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 页面特定的样式可以写在这里 */
</style>

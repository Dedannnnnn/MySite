<script setup>
// 定义组件接收的属性 (Props)
// 这里接收一个名为 'post' 的对象，包含文章的所有信息
defineProps({
  post: {
    type: Object,
    required: true,
    // 默认值结构，用于类型提示
    default: () => ({
      title: "",
      excerpt: "",
      date: "",
      category: "",
      image: "",
    }),
  },
});
</script>

<template>
  <!-- 
    文章卡片容器
    group: 用于控制子元素在父元素悬停时的样式
    hover:shadow-xl: 悬停时增加阴影
    hover:-translate-y-1: 悬停时轻微上浮
    transition-all duration-300: 平滑过渡动画
  -->
  <article
    class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
  >
    <!-- 
      图片区域
      relative: 相对定位，用于放置绝对定位的分类标签
      overflow-hidden: 确保图片放大时不溢出容器
    -->
    <div class="relative h-48 overflow-hidden bg-gray-100">
      <!-- 文章封面图 -->
      <img
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <!-- 占位图 (如果没有图片) -->
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50"
      >
        <span class="text-4xl">📝</span>
      </div>

      <!-- 
        分类标签
        absolute top-4 left-4: 绝对定位在左上角
        backdrop-blur-sm: 背景模糊效果
      -->
      <div class="absolute top-4 left-4">
        <span
          class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-blue-600 rounded-full shadow-sm"
        >
          {{ post.category }}
        </span>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="p-6 flex flex-col flex-grow">
      <!-- 日期 -->
      <div class="text-sm text-gray-400 mb-3 flex items-center gap-2">
        <div class="i-carbon-calendar"></div>
        {{ post.date }}
      </div>

      <!-- 
        标题
        line-clamp-2: 最多显示两行，超出省略
        group-hover:text-blue-600: 卡片悬停时标题变色
      -->
      <h3
        class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2"
      >
        {{ post.title }}
      </h3>

      <!-- 摘要 -->
      <p
        class="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow"
      >
        {{ post.excerpt }}
      </p>

      <!-- 阅读更多链接 -->
      <div
        class="mt-auto pt-4 border-t border-gray-50 flex items-center text-blue-600 font-medium text-sm group/link"
      >
        Read Article
        <!-- 箭头动画: 悬停时向右移动 -->
        <div
          class="i-carbon-arrow-right ml-2 transition-transform group-hover/link:translate-x-1"
        ></div>
      </div>
    </div>
  </article>
</template>

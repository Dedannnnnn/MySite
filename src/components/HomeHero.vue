<script setup>
import { ref } from "vue";

// ----------------------------------------------------------------
// 状态管理
// ----------------------------------------------------------------

// 搜索框的输入值
const searchQuery = ref("");

// 热门标签数据，用于在搜索框下方展示
const tags = ["Vue 3", "TypeScript", "Vite", "UnoCSS", "Node.js"];

// 搜索处理函数
// 当用户按下回车或点击搜索按钮时触发
const handleSearch = () => {
  if (searchQuery.value) {
    console.log("Searching for:", searchQuery.value);
    // TODO: 这里可以添加跳转到搜索结果页面的逻辑
    // 例如: router.push({ name: 'search', query: { q: searchQuery.value } })
  }
};

// 统计数据
// 用于在右侧卡片底部展示
const stats = [
  { label: "Articles", value: "50+" },
  { label: "Projects", value: "12" },
  { label: "Years", value: "5+" },
];

// ----------------------------------------------------------------
// 3D 卡片倾斜效果逻辑
// ----------------------------------------------------------------
const cardRef = ref(null);
// 初始状态设置为轻微倾斜，暗示可交互性
const initialTransform =
  "perspective(1000px) rotateX(-5deg) rotateY(5deg) scale3d(1, 1, 1)";
const cardTransform = ref(initialTransform);
// 控制过渡效果，初始加载时可以有平滑效果
const cardTransition = ref("transform 0.5s ease-out");

const handleMouseEnter = () => {
  // 鼠标进入时，移除过渡效果，实现即时跟随，消除卡顿感
  cardTransition.value = "none";
};

const handleMouseMove = (e) => {
  if (!cardRef.value) return;

  // 确保移动时没有过渡延迟
  cardTransition.value = "none";

  const rect = cardRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // 计算鼠标相对于卡片中心的坐标
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // 计算旋转角度 (最大旋转角度为 10 度)
  // 鼠标在左边，卡片向左倾斜 (rotateY 为负)
  // 鼠标在上边，卡片向上倾斜 (rotateX 为正)
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  cardTransform.value = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const handleMouseLeave = () => {
  // 鼠标离开时，添加平滑过渡，慢慢复位
  cardTransition.value = "transform 0.5s ease-out";
  cardTransform.value = initialTransform;
};
</script>

<template>
  <!-- 
    Hero 区域主容器
    relative: 相对定位，作为内部绝对定位元素的参考点
    overflow-hidden: 隐藏溢出的背景装饰
    bg-white: 白色背景
  -->
  <div class="relative overflow-hidden bg-white">
    <!-- 
      背景装饰区域 
      使用 absolute 定位放置在底层
      pointer-events-none: 确保背景不会阻挡鼠标交互
      blur-3xl: 大模糊效果，制造柔和的光晕
    -->
    <!-- 右上角光晕 -->
    <div
      class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"
    ></div>
    <!-- 左下角光晕 -->
    <div
      class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-green-50 to-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none"
    ></div>

    <!-- 
      内容容器
      max-w-6xl: 最大宽度限制
      mx-auto: 水平居中
      relative z-10: 相对定位且 z-index 为 10，确保内容在背景之上
    -->
    <div
      class="max-w-6xl mx-auto px-4 pt-20 pb-24 sm:pt-32 sm:pb-40 relative z-10"
    >
      <!-- 
        Grid 布局
        lg:grid-cols-2: 大屏幕下分为两列
        gap-12: 列间距
        items-center: 垂直居中对齐
      -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- 左侧内容区：标题、简介、搜索框 -->
        <div class="text-center lg:text-left">
          <!-- 状态标签 (Available for hire) -->
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 animate-fade-in-up"
          >
            <!-- 呼吸灯效果的小圆点 -->
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"
              ></span>
            </span>
            Available for hire
          </div>

          <!-- 
            主标题
            text-transparent bg-clip-text bg-gradient-to-r: 文字渐变效果
          -->
          <h1
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Building
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >Digital</span
            >
            <br />
            Experiences.
          </h1>

          <!-- 副标题/简介 -->
          <p
            class="text-xl text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            你好，我是 Dedan。一名前端开发者，热衷于探索 Web
            技术。在这里分享我的学习笔记、技术心得和生活感悟。
          </p>

          <!-- 
            搜索框组件
            group: 用于控制内部元素在父元素 focus-within 时的样式
          -->
          <div class="max-w-md mx-auto lg:mx-0 mb-8 relative group">
            <!-- 搜索图标 -->
            <div
              class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
            >
              <div
                class="i-carbon-search text-gray-400 text-lg group-focus-within:text-blue-500 transition-colors"
              ></div>
            </div>

            <!-- 输入框 -->
            <input
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              type="text"
              class="w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-700 placeholder-gray-400"
              placeholder="搜索文章、教程或笔记..."
            />

            <!-- 搜索按钮 (箭头) -->
            <div class="absolute inset-y-0 right-2 flex items-center">
              <button
                @click="handleSearch"
                class="p-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-xl transition-colors text-gray-500"
              >
                <div class="i-carbon-arrow-right"></div>
              </button>
            </div>
          </div>

          <!-- 热门标签列表 -->
          <div
            class="flex flex-wrap justify-center lg:justify-start gap-3 items-center text-sm text-gray-500"
          >
            <span>热门话题:</span>
            <span
              v-for="tag in tags"
              :key="tag"
              class="px-3 py-1 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors"
            >
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- 
          右侧视觉区：代码卡片展示
          hidden lg:block: 在小屏幕隐藏，大屏幕显示
          添加了 3D 倾斜交互效果
        -->
        <div
          ref="cardRef"
          class="hidden lg:block relative cursor-pointer"
          @mouseenter="handleMouseEnter"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
          :style="{ transform: cardTransform, transition: cardTransition }"
        >
          <!-- 装饰背景块 -->
          <div
            class="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-3 opacity-10 scale-105"
          ></div>

          <!-- 
            代码卡片主体
            backdrop-blur-xl: 毛玻璃效果
          -->
          <div
            class="relative bg-gray-900 rounded-[2rem] p-8 shadow-2xl border border-gray-800 backdrop-blur-xl"
          >
            <!-- 窗口控制按钮 (红黄绿) -->
            <div class="flex items-center gap-2 mb-6">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <!-- 代码内容 -->
            <div class="space-y-4 font-mono text-sm">
              <div class="flex gap-4">
                <span class="text-gray-600 select-none">1</span>
                <span class="text-purple-400">const</span>
                <span class="text-blue-400">developer</span>
                <span class="text-white">=</span>
                <span class="text-yellow-300">{</span>
              </div>
              <div class="flex gap-4">
                <span class="text-gray-600 select-none">2</span>
                <span class="pl-4 text-red-400">name:</span>
                <span class="text-green-400">'Dedan'</span>,
              </div>
              <div class="flex gap-4">
                <span class="text-gray-600 select-none">3</span>
                <span class="pl-4 text-red-400">role:</span>
                <span class="text-green-400">'Frontend Engineer'</span>,
              </div>
              <div class="flex gap-4">
                <span class="text-gray-600 select-none">4</span>
                <span class="pl-4 text-red-400">skills:</span>
                <span class="text-yellow-300">[</span>
                <span class="text-green-400">'Vue'</span>,
                <span class="text-green-400">'React'</span>,
                <span class="text-green-400">'Node'</span>
                <span class="text-yellow-300">]</span>
              </div>
              <div class="flex gap-4">
                <span class="text-gray-600 select-none">5</span>
                <span class="text-yellow-300">}</span>
              </div>
            </div>

            <!-- 底部统计栏 -->
            <div
              class="mt-8 pt-8 border-t border-gray-800 grid grid-cols-3 gap-4"
            >
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <div class="text-2xl font-bold text-white mb-1">
                  {{ stat.value }}
                </div>
                <div class="text-xs text-gray-500 uppercase tracking-wider">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>

          <!-- 悬浮装饰卡片 -->
          <div
            class="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
              >
                <div
                  class="i-carbon-checkmark-filled text-green-600 text-xl"
                ></div>
              </div>
              <div>
                <div class="text-sm font-bold text-gray-900">Code Quality</div>
                <div class="text-xs text-gray-500">100% Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 自定义动画 */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-5%);
  }
  50% {
    transform: translateY(5%);
  }
}
</style>

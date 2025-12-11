<script setup>
import { ref } from "vue";

// ----------------------------------------------------------------
// 数据定义区域
// ----------------------------------------------------------------

// 技能列表数据
// icon 属性使用了 UnoCSS 的图标预设 (i-logos-*)，这些类名会自动生成对应的 SVG 图标
const skills = [
  { name: "Vue.js", icon: "i-logos-vue" },
  { name: "React", icon: "i-logos-react" },
  { name: "TypeScript", icon: "i-logos-typescript-icon" },
  { name: "Vite", icon: "i-logos-vitejs" },
  { name: "Node.js", icon: "i-logos-nodejs-icon" },
  { name: "UnoCSS", icon: "i-logos-unocss" },
  { name: "Tailwind", icon: "i-logos-tailwindcss-icon" },
  { name: "Figma", icon: "i-logos-figma" },
];

// 工作经历数据
// 用于在 Experience 卡片中循环展示
const experiences = [
  { year: "2023", title: "Senior Dev", company: "Tech Corp" },
  { year: "2021", title: "Frontend Dev", company: "StartUp Inc" },
  { year: "2019", title: "Junior Dev", company: "Web Agency" },
];
</script>

<template>
  <!-- 
    页面主容器 
    min-h-screen: 最小高度占满屏幕
    bg-gray-50: 浅灰色背景
    py-20: 上下内边距 5rem (80px)
    px-4: 左右内边距 1rem (16px)
  -->
  <div class="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <!-- 页面标题区域 -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">关于我</h1>
        <p class="text-xl text-gray-500">不只是代码，更是生活。</p>
      </div>

      <!-- 
        Bento Grid (便当盒) 布局容器 
        grid: 启用 Grid 布局
        grid-cols-1: 默认 1 列
        md:grid-cols-3: 中等屏幕 (md) 以上 3 列
        lg:grid-cols-4: 大屏幕 (lg) 以上 4 列
        gap-4: 网格间距 1rem
        auto-rows-[180px]: 每一行的高度固定为 180px，卡片可以通过 row-span-* 跨越多行
      -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]"
      >
        <!-- 
          1. 个人简介卡片 (大尺寸)
          md:col-span-2: 跨越 2 列
          md:row-span-2: 跨越 2 行 (占据 2x2 的网格空间)
          relative overflow-hidden: 用于限制内部绝对定位的背景装饰元素，防止溢出
          group: 用于控制子元素在父元素悬停时的样式 (group-hover)
        -->
        <div
          class="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group"
        >
          <!-- 背景装饰光晕：绝对定位，模糊效果 -->
          <!-- group-hover:bg-blue-100: 当鼠标悬停在父卡片时，背景色变深 -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl group-hover:bg-blue-100 transition-colors"
          ></div>

          <!-- 内容区域：z-10 确保内容在背景之上 -->
          <div class="relative z-10">
            <!-- 头像容器 -->
            <div
              class="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md"
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dedan"
                alt="Avatar"
                class="w-full h-full object-cover"
              />
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-2">Dedan</h2>
            <p class="text-gray-500 text-lg mb-6">前端开发者 & UI 设计爱好者</p>
            <p class="text-gray-600 leading-relaxed">
              热衷于构建高性能、可访问的 Web
              应用。喜欢探索新技术，同时也注重代码的可维护性。
            </p>
          </div>

          <!-- 底部标签 -->
          <div class="relative z-10 mt-auto pt-6 flex gap-3">
            <div
              class="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
            >
              Available for hire
            </div>
            <div
              class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              Remote
            </div>
          </div>
        </div>

        <!-- 
          2. 地理位置卡片
          bg-cover bg-center: 背景图片覆盖整个卡片并居中
          bg-gradient-to-t: 底部渐变遮罩，保证白色文字在图片上的可读性
        -->
        <div
          class="md:col-span-1 md:row-span-1 bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-800 flex flex-col justify-between relative overflow-hidden text-white group"
        >
          <!-- 背景图层 -->
          <div
            class="absolute inset-0 opacity-50 group-hover:opacity-40 transition-opacity bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"
          ></div>
          <!-- 渐变遮罩层 -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"
          ></div>

          <!-- 图标 -->
          <div class="relative z-10 flex justify-end">
            <div
              class="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
            >
              <div class="i-carbon-location text-white"></div>
            </div>
          </div>
          <!-- 文字信息 -->
          <div class="relative z-10">
            <div class="text-xs text-gray-300 uppercase tracking-wider mb-1">
              Based in
            </div>
            <div class="text-xl font-bold">Shanghai, CN</div>
          </div>
        </div>

        <!-- 
          3. 社交链接: GitHub
          hover:scale-[1.02]: 鼠标悬停时整体轻微放大，增加交互感
          cursor-pointer: 鼠标变为手型
        -->
        <a
          href="https://github.com"
          target="_blank"
          class="md:col-span-1 md:row-span-1 bg-[#24292e] rounded-3xl p-6 shadow-sm flex flex-col justify-center items-center text-white hover:scale-[1.02] transition-transform cursor-pointer"
        >
          <div class="i-carbon-logo-github text-5xl mb-3"></div>
          <span class="font-medium">Follow me</span>
        </a>

        <!-- 
          4. 技术栈卡片 (竖长条)
          md:row-span-2: 跨越两行高度，适合展示列表内容
        -->
        <div
          class="md:col-span-1 md:row-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col"
        >
          <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
            <div class="i-carbon-code text-blue-600"></div>
            Tech Stack
          </h3>
          <!-- 使用 grid 布局排列图标，2列 -->
          <div class="grid grid-cols-2 gap-4 flex-grow content-start">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <!-- group-hover:scale-110: 悬停时图标放大 -->
              <div
                :class="skill.icon"
                class="text-2xl mb-2 group-hover:scale-110 transition-transform"
              ></div>
              <span class="text-xs text-gray-600 font-medium">{{
                skill.name
              }}</span>
            </div>
          </div>
        </div>

        <!-- 
          5. 工作经历卡片
          flex-1: 子元素平分宽度
        -->
        <div
          class="md:col-span-2 md:row-span-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-gray-800 flex items-center gap-2">
              <div class="i-carbon-briefcase text-blue-600"></div>
              Experience
            </h3>
            <span class="text-xs text-gray-400">Full History -></span>
          </div>
          <div class="flex justify-between gap-4">
            <div v-for="(exp, i) in experiences" :key="i" class="flex-1">
              <div class="text-xs text-blue-600 font-bold mb-1">
                {{ exp.year }}
              </div>
              <div class="font-medium text-gray-800 text-sm truncate">
                {{ exp.company }}
              </div>
              <div class="text-xs text-gray-500 truncate">{{ exp.title }}</div>
            </div>
          </div>
        </div>

        <!-- 6. 社交链接: Twitter -->
        <a
          href="#"
          class="md:col-span-1 md:row-span-1 bg-[#1DA1F2] rounded-3xl p-6 shadow-sm flex flex-col justify-center items-center text-white hover:scale-[1.02] transition-transform cursor-pointer"
        >
          <div class="i-carbon-logo-twitter text-5xl mb-3"></div>
          <span class="font-medium">Connect</span>
        </a>

        <!-- 
          7. 爱好卡片
          rotate-12: 装饰图标旋转一定角度，增加趣味性
        -->
        <div
          class="md:col-span-1 md:row-span-1 bg-orange-50 rounded-3xl p-6 shadow-sm border border-orange-100 flex flex-col justify-between overflow-hidden relative group"
        >
          <div
            class="absolute -right-4 -bottom-4 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform"
          >
            📷
          </div>
          <h3 class="font-bold text-gray-800 relative z-10">Photography</h3>
          <p class="text-sm text-gray-600 relative z-10">
            Capturing moments in life.
          </p>
        </div>

        <!-- 
          8. 联系 CTA (Call to Action) 卡片
          bg-gradient-to-r: 渐变背景，吸引注意力
        -->
        <div
          class="md:col-span-2 md:row-span-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-lg text-white flex items-center justify-between relative overflow-hidden"
        >
          <!-- 装饰圆 -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/3 -translate-y-1/2"
          ></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-1">Let's work together</h3>
            <p class="text-blue-100">Have a project in mind?</p>
          </div>
          <button
            class="relative z-10 px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-md"
          >
            Email Me
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 
  Bento Grid 布局依赖于 grid-template-columns 和 grid-auto-rows
  UnoCSS 已经提供了大部分 utility classes，所以这里不需要写太多 CSS
*/
</style>

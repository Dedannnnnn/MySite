<script setup>
import { ref } from 'vue'

const skills = ref([
  'Vue.js',
  'Vite',
  'UnoCSS',
  'JavaScript',
  'HTML/CSS'
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-20">
      <div class="text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Site
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Built with Vite + Vue + UnoCSS
        </p>
        <div class="flex justify-center gap-4 mb-12">
          <a href="https://vitejs.dev" target="_blank" 
             class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Learn Vite
          </a>
          <a href="https://vuejs.org" target="_blank"
             class="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Learn Vue
          </a>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="max-w-4xl mx-auto mt-16">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Tech Stack
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="skill in skills" :key="skill"
               class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <span class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="max-w-2xl mx-auto mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About This Project
        </h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          This is a personal website built with modern web technologies.
          It uses Vite as the build tool, Vue 3 as the framework, and UnoCSS for styling.
          The combination provides a fast development experience and excellent performance.
        </p>
      </div>
    </div>
  </div>
</template>

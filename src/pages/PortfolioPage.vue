<template>
  <div class="h-full w-full rounded-md bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 p-6 flex flex-col items-center justify-center">
      
        <!-- Portfolio Introduction -->
        <div class="mb-8 text-center">
          <h1 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-4">PROJECTS</h1>
          <p class="text-white/80 max-w-2xl mx-auto">Explore a collection of my most recent and significant projects.</p>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="group bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10"
          >
            <!-- Project Image -->
            <div class="h-48 w-full overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:opacity-0 transition-all duration-300"></div>
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              <div class="absolute bottom-0 right-0 bg-gradient-to-tl from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-tl-lg">
                {{ project.category }}
              </div>
            </div>
            
            <!-- Project Info -->
            <div class="p-4">
              <h3 class="text-white font-semibold text-lg mb-2">{{ project.title }}</h3>
              <p class="text-white/70 text-sm mb-4">{{ project.description }}</p>
              
              <!-- Technologies Used -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex gap-3">
                <Button 
                  v-if="project.liveUrl" 
                  @click="openUrl(project.liveUrl)"
                  class="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1"
                >
                  <Icon icon="mdi:eye" width="1rem" height="1rem" />
                  Live Demo
                </Button>
                <Button 
                  v-if="project.githubUrl"
                  @click="openUrl(project.githubUrl)"
                  class="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1"
                >
                  <Icon icon="mdi:github" width="1rem" height="1rem" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- No Projects Message -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <div class="text-6xl text-white/20 mb-4">
            <Icon icon="mdi:folder-open-outline" width="4rem" height="4rem" class="mx-auto" />
          </div>
          <p class="text-white/60">No projects found in this category.</p>
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '../components/ui/button'
import { Icon } from "@iconify/vue"

const activeCategory = ref('All')

const openUrl = (url: string) => {
  window.open(url, '_blank')
}

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce stores with sales analytics.',
    image: '/api/placeholder/600/400',
    category: 'Ecommerce',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/username/ecommerce'
  },
  {
    id: 2,
    title: 'Fitness Tracker App',
    description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: '/api/placeholder/600/400',
    category: 'Landing',
    technologies: ['React Native', 'Redux', 'Firebase'],
    liveUrl: 'https://example.com/fitness',
    githubUrl: 'https://github.com/username/fitness'
  },
]

</script>

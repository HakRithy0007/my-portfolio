<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 p-6 flex flex-col items-center justify-center">
      
      <!-- Content -->
      <div class="w-full p-2 md:p-2">

        <!-- Skills Section -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
            <Icon icon="mdi:code-tags" class="mr-2 text-cyan-400" width="1.5rem" height="1.5rem" />
            Languages and Tools :
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <SkillTag v-for="skill in skills" :key="skill.name" :name="skill.name" :icon="skill.icon" :color="skill.color" />
          </div>
        </div>
        
        <!-- Education Section -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
            <Icon icon="mdi:school" class="mr-2 text-cyan-400" width="1.5rem" height="1.5rem" />
            Education
          </h3>
          <div class="space-y-4">
            <div v-for="(edu, index) in education" :key="index" class="bg-white/5 p-4 rounded-md border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="flex justify-between">
                <h4 class="font-medium text-white">{{ edu.degree }}</h4>
                <span class="text-cyan-300 text-sm">{{ edu.year }}</span>
              </div>
              <p class="text-white/70 text-sm mt-1">{{ edu.school }}</p>
            </div>
          </div>
        </div>
        
        <!-- Experience Section -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
            <Icon icon="mdi:briefcase" class="mr-2 text-cyan-400" width="1.5rem" height="1.5rem" />
            Work Experience
          </h3>
          <div class="space-y-4">
            <div v-for="(exp, index) in experience" :key="index" class="bg-white/5 p-4 rounded-md border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="flex justify-between items-start">
                <h4 class="font-medium text-white">{{ exp.position }}</h4>
                <span class="text-cyan-300 text-sm">{{ exp.period }}</span>
              </div>
              <p class="text-white/70 text-sm">{{ exp.company }}</p>
              <p class="text-white/60 text-sm mt-2">{{ exp.description }}</p>
            </div>
          </div>
        </div>
        
        <!-- Interests Section -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
            <Icon icon="mdi:heart" class="mr-2 text-cyan-400" width="1.5rem" height="1.5rem" />
            Interests & Hobbies
          </h3>
          <div class="flex flex-wrap gap-3">
            <div v-for="(interest, index) in interests" :key="index" class="bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center">
              <Icon :icon="interest.icon" class="mr-2 text-cyan-300" width="1rem" height="1rem" />
              <span class="text-white/80 text-sm">{{ interest.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SkillTag from '../components/SkillTagComponent.vue'

// Define types
interface Skill {
  name: string
  icon: string
  color: string
}

interface Education {
  degree: string
  school: string
  year: string
}

interface Experience {
  position: string
  company: string
  period: string
  description: string
}

interface Interest {
  name: string
  icon: string
}

// Define skills
const skills: Skill[] = [
  { name: 'HTML5', icon: 'logos:html-5', color: '#E34F26' },
  { name: 'CSS3', icon: 'logos:css-3', color: '#1572B6' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', color: 'blue' },
  { name: 'JavaScript', icon: 'logos:javascript', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', color: 'blue' },
  { name: 'Vue.js', icon: 'logos:vue', color: 'green' },
  { name: 'Go', icon: 'logos:go', color: '#00ADD8' },
  { name: 'Postgres', icon: 'logos:postgresql', color: 'blue' },
  { name: 'GitHub', icon: 'mdi:github', color: 'purple' },
  { name: 'GitLab', icon: 'logos:gitlab', color: '#FC6D26' },
];

// Define education
const education: Education[] = [
      {
    degree: 'High School',
    school: 'The Westline School Campus ( CAP )',
    year: '2014-2023'
  },
  {
    degree: 'Bachelor of Information Technology',
    school: 'Royal University Of Phnom Penh ( RUPP )',
    year: '2019-2023'
  }
]

// Define experience
const experience: Experience[] = [
  {
    position: 'Junior Web Developer',
    company: 'Solutions Company.',
    period: '2024-Present',
    description: 'Developed responsive web applications and implemented new features for various client projects.'
  }
]

// Define interests
const interests: Interest[] = [
  { name: 'Photography', icon: 'mdi:camera' },
  { name: 'Hiking', icon: 'mdi:hiking' },
  { name: 'Reading', icon: 'mdi:book-open-page-variant' },
  { name: 'Traveling', icon: 'mdi:airplane' },
  { name: 'Music', icon: 'mdi:music' }
]
</script>

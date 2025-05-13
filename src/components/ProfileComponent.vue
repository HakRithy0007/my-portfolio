<template>
  <div class="h-full w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 p-6 flex flex-col items-center justify-center rounded-md">
    <!-- Glass Card Container -->
    <div class="w-full h-full rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl overflow-hidden">
      
      <!-- Top Accent Pattern -->
      <div class="h-14 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>
        </div>
      </div>
      
      <!-- Profile Content -->
      <div class="px-8 pt-10 pb-8 md:pt-8 md:pb-4 relative">
        <!-- Profile Avatar (Positioned to overlap top section) -->
        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div class="relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-md opacity-70 animate-pulse"></div>
            <Avatar class="w-30 h-30 rounded-full border-4 border-white/30 relative z-10 shadow-xl">
              <AvatarImage src="/src/assets/image/profile/image.png" alt="profile" />
            </Avatar>
          </div>
        </div>
        
        <!-- Name & Title -->
        <div class="mt-14 md:mt-8 text-center">
          <div class="flex flex-col justify-center items-center md:flex-row md:gap-2 ">
              <h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent my-4">KIM HAK RITHY </h1>
          </div>
          <div class="flex items-center justify-center gap-2 mb-4 md:mb-2">
            <div class="h-[1px] w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <p class="text-white font-light tracking-wide">Web Developer</p>
            <div class="h-[1px] w-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>


        <!-- Social Links -->
        <div class="flex justify-center items-center gap-3 my-6 md:my-2">
          <div v-for="(social, index) in socials" :key="index">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button :class="`w-10 h-10 bg-white/5 border border-white/10 flex justify-center items-center rounded-full transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:shadow-lg hover:shadow-blue-900/20`">
                    <Icon :icon="social.icon" width="1.2rem" height="1.2rem" class="text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{{ social.tooltip }}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        <!-- Bio Quote -->
        <div class="my-10 md:my-6 p-4 rounded-md bg-white/5 border border-white/10">
          <p class="text-white/80 text-sm italic text-center leading-relaxed">
            "Programming today is a race between software engineers striving to build bigger and better idiot-proof 
            programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."
          </p>
        </div>
               
        <!-- Navigation Menu -->
        <div class="mt-2 md:mt-1">
          <div class="w-full grid grid-cols-3 gap-4">
            <Button 
            v-for="item in menuItems" 
            :key="item.label" 
            @click="goTo(item.route)"
            :class="[
                'w-full rounded-md font-medium transition-all duration-300 border hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1',
                'bg-gradient-to-br from-blue-600/40 to-purple-600/40 border-white/10 text-white hover:from-blue-500 hover:to-purple-500',
                activeRoute === item.route ? 'ring-2 ring-cyan-400 scale-[1.03]' : ''
            ]"
            >
            {{ item.label }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'
import { Button } from './ui/button';
import { Icon } from "@iconify/vue";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip'
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();
const route = useRoute();

const menuItems = [
  { label: 'About Me', route: '/' },
  { label: 'Portfolio', route: '/portfolio' },
  { label: 'Contact', route: '/contact' },
]

const socials = [
  { tooltip: 'Facebook', icon: 'ic:sharp-facebook', hoverColor: 'hover:bg-blue-600' },
  { tooltip: 'Instagram', icon: 'ri:instagram-fill', hoverColor: 'hover:bg-pink-600' },
  { tooltip: 'Telegram', icon: 'ic:round-telegram', hoverColor: 'hover:bg-blue-500' },
  { tooltip: 'Github', icon: 'ant-design:github-filled', hoverColor: 'hover:bg-gray-700' },
  { tooltip: 'Email', icon: 'mdi:email-outline', hoverColor: 'hover:bg-purple-600' }
]

// Active route tracker
const activeRoute = ref('/about');

watch(
  () => route.path,
  (newPath) => {
    activeRoute.value = newPath;
  },
  { immediate: true }
);


const goTo = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
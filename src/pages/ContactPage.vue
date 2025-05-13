<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 p-6 flex flex-col items-center justify-center">
      
      <!-- Content -->
      <div class="w-full  md:p-2">
        <!-- Contact Introduction -->
        <div class="mb-8 text-center">
          <h1 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-4">GET IN TOUCH</h1>
          <p class="text-white/80 max-w-2xl mx-auto">Whether you have a project in mind, job opportunity, or just want to say hello, I'd love to hear from you. Here are the ways you can reach me.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Contact Form -->
          <div class="bg-white/5 rounded-md border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
              <Icon icon="mdi:message-text" class="mr-2 text-cyan-400" width="1.5rem" height="1.5rem" />
              Send a Message
            </h3>
            
            <form @submit.prevent="submitForm">
              <div class="space-y-4">
                <!-- Name Input -->
                <div>
                  <label for="name" class="block text-sm font-medium text-white/80 mb-1">Name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    placeholder="Your Name"
                    class="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    required
                  />
                </div>
                
                <!-- Email Input -->
                <div>
                  <label for="email" class="block text-sm font-medium text-white/80 mb-1">Email</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="your.email@example.com"
                    class="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    required
                  />
                </div>
                
                <!-- Subject Input -->
                <div>
                  <label for="subject" class="block text-sm font-medium text-white/80 mb-1">Subject</label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    placeholder="What is this regarding?"
                    class="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    required
                  />
                </div>
                
                <!-- Message Input -->
                <div>
                  <label for="message" class="block text-sm font-medium text-white/80 mb-1">Message</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    placeholder="Your message here..."
                    class="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                    required
                  ></textarea>
                </div>
                
                <!-- Submit Button -->
                <Button
                  type="submit"
                  :disabled="submitting"
                  class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Icon v-if="submitting" icon="mdi:loading" class="animate-spin" width="1.2rem" height="1.2rem" />
                  <span>{{ submitting ? 'Sending...' : 'Send Message' }}</span>
                </Button>
              </div>
            </form>
            
            <!-- Success Message -->
            <div 
              v-if="formSubmitted"
              class="mt-4 p-3 bg-green-400/20 border border-green-400/30 rounded-md text-green-300 text-sm flex items-center gap-2"
            >
              <Icon icon="mdi:check-circle" width="1rem" height="1rem" />
              <span>Message sent successfully!</span>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div class="space-y-6">
            <!-- Contact Cards -->
            <div v-for="(item, index) in contactInfo" :key="index" class="bg-white/5 rounded-md border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-4">
              <div :class="`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center`">
                <Icon :icon="item.icon" width="1.5rem" height="1.5rem" class="text-white" />
              </div>
              <div>
                <h4 class="text-white font-medium">{{ item.title }}</h4>
                <p class="text-white/70 text-sm">{{ item.value }}</p>
              </div>
            </div>
            
            <!-- Social Media Links -->
            <div class="bg-white/5 rounded-md border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                <Icon icon="mdi:account-group" class="mr-2 text-cyan-400" width="1.2rem" height="1.2rem" />
                Connect on Social Media
              </h3>
              
              <div class="grid grid-cols-2 gap-3">
                <Button 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  @click="openSocialLink(social.url)"
                  :class="`w-full flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-300 ${social.bgClass} hover:scale-105`"
                >
                  <Icon :icon="social.icon" width="1.2rem" height="1.2rem" class="text-white" />
                  <span class="text-white text-sm">{{ social.name }}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../components/ui/button/Button.vue';
import { Icon } from "@iconify/vue"

const router = useRouter();

// Form state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});
const submitting = ref(false);
const formSubmitted = ref(false);

// Contact info
const contactInfo = ref([
  { icon: 'mdi:email', title: 'Email', value: 'hakrithykim2020@gmail.com', bgColor: 'bg-blue-500' },
  { icon: 'mdi:phone', title: 'Phone', value: '+855966400081', bgColor: 'bg-green-500' },
  { icon: 'mdi:map-marker', title: 'Location', value: '1234 Street Name, City, Country', bgColor: 'bg-red-500' }
]);

// Social Links
const socialLinks = ref([
  { name: 'Facebook', url: 'https://facebook.com/yourprofile', icon: 'mdi:facebook', bgClass: 'bg-blue-600' },
  { name: 'Instagram', url: 'https://instagram.com/yourprofile', icon: 'mdi:instagram', bgClass: 'bg-pink-500' },
  { name: 'Telegram', url: 'https://t.me/yourprofile', icon: 'mdi:telegram', bgClass: 'bg-blue-500' },
  { name: 'GitHub', url: 'https://github.com/yourprofile', icon: 'mdi:github', bgClass: 'bg-gray-800' },
]);


// Methods
const submitForm = async () => {
  submitting.value = true;
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));  // simulate network delay
    formSubmitted.value = true;
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    submitting.value = false;
  }
};

const goBack = () => {
  router.go(-1); // Navigate back to the previous page
};

const openSocialLink = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>

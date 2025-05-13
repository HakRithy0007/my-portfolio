<template>
    <div class="w-[100vw] h-full md:h-[100vh] bg-[#272727]">

       <div class="h-full w-full flex flex-col md:flex-col justify-center items-center p-3 gap-3">

          <div class="h-full w-full md:w-[100%] bg-[#303030] rounded-md">
                  <ProfileComponent />
         </div>

         <div class="h-full w-full md:w-[100%] overflow-y-auto bg-[#303030] rounded-md">
            <router-view></router-view>
         </div>

       </div>
    </div>
</template>

<script setup lang="ts">
import ProfileComponent from '../components/ProfileComponent.vue';
</script>

<style scoped>

</style>
<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 px-4 py-3 backdrop-blur-md lg:py-4">
    <div class="mx-auto flex max-w-7xl container items-center justify-between">
      
      <div class="flex items-center transition-transform hover:scale-105">
       <router-link to="/">
         <img 
          src="/images/logo2.png" 
          alt="LLC Sunny Fruit" 
          class="h-10 w-auto object-cover lg:h-25"
        />
       </router-link>
      </div>

      <nav class="hidden items-center gap-10 lg:flex">
        <a href="#" class="nav-link">{{ $t('nav.ourCatalogue') }}</a>
        
        <div class="relative flex flex-col items-center group">
          <a href="#" class="font-bold text-green-600">{{ $t('nav.products') }}</a>
          <span class="absolute -bottom-1 h-0.5 w-6 rounded-full bg-orange-400"></span>
        </div>

        <a href="#" class="nav-link">{{ $t('nav.blog') }}</a>
        <a href="#" class="nav-link">{{ $t('nav.gallery') }}</a>
        <a href="#" class="nav-link">{{ $t('nav.ourCatalogue') }}</a>
      </nav>

      <div class="flex items-center gap-3 md:gap-8">
        
        <CLanguageSwitcher />

        <div class="hidden items-center gap-3 sm:flex">
          <div class="flex h-10 w-10 items-center justify-center rounded-full border border-green-500/30 text-green-600 transition-colors hover:bg-green-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <div class="flex flex-col text-sm font-bold tracking-tight text-gray-900">
            <a href="tel:+998900374044" class="hover:text-green-600 transition-colors">+998 (90) 037-40-44</a>
          </div>
        </div>

        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 lg:hidden"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="absolute left-0 top-[100%] w-full bg-white border-b border-gray-100 shadow-xl lg:hidden">
        <div class="flex flex-col p-6 space-y-4">
          <a @click="isMobileMenuOpen = false" href="#" class="mobile-nav-link">{{ $t('nav.home') }}</a>
          <a @click="isMobileMenuOpen = false" href="#" class="mobile-nav-link text-green-600 font-bold">{{ $t('nav.products') }}</a>
          <a @click="isMobileMenuOpen = false" href="#" class="mobile-nav-link">{{ $t('nav.blog') }}</a>
          <a @click="isMobileMenuOpen = false" href="#" class="mobile-nav-link">{{ $t('nav.gallery') }}</a>
          <a @click="isMobileMenuOpen = false" href="#" class="mobile-nav-link">{{ $t('nav.contacts') }}</a>
          
          <hr class="border-gray-100" />
          
          <div class="flex flex-col space-y-2 pt-2">
            <span class="text-xs uppercase tracking-widest text-gray-400 font-bold">Contact Us</span>
            <a href="tel:+998900374044" class="text-lg font-bold text-gray-800">+998 (90) 037-40-44</a>
            <a href="tel:+998712502663" class="text-lg font-bold text-gray-800">+998 (71) 250-26-63</a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import CLanguageSwitcher from '../common/CLanguageSwitcher.vue';

const isMobileMenuOpen = ref(false);
</script>

<style scoped>
.nav-link {
  /* @apply text-sm font-semibold text-gray-600 transition-all hover:text-green-600; */
}

.mobile-nav-link {
  /* @apply text-xl font-medium text-gray-800 transition-colors active:text-green-600; */
}
</style>
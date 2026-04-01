<template>
  <div class="relative inline-block text-left" ref="switcherRef">
    <button 
      @click="toggleDropdown" 
      class="group flex w-[110px] items-center justify-between rounded-xl bg-gray-50/50 px-3.5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-gray-200 focus:outline-none"
      :class="{'bg-white shadow-md ring-1 ring-gray-200': isOpen}"
    >
      <div class="flex items-center gap-2.5">
        <div class="relative h-4 w-6 overflow-hidden rounded-[2px] shadow-sm">
          <img :src="currentLanguage.flag" :alt="currentLanguage.code" class="h-full w-full object-cover" />
        </div>
        <span class="text-[13px] uppercase tracking-wider">{{ currentLanguage.label }}</span>
      </div>
      
      <svg 
        :class="{'rotate-180': isOpen}" 
        class="h-4 w-4 text-gray-400 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-1 scale-95"
    >
      <div 
        v-if="isOpen" 
        class="absolute right-0 z-[60] mt-3 w-44 origin-top-right overflow-hidden rounded-2xl bg-white/80 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl ring-1 ring-black/5 focus:outline-none"
      >
        <div class="space-y-1">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang.code)"
            class="group relative flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200"
            :class="[
              locale === lang.code 
                ? 'bg-green-600/10 text-green-700' 
                : 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900'
            ]"
          >
            <div class="flex items-center gap-3">
              <div class="h-4 w-6 overflow-hidden rounded-[2px] shadow-sm">
                <img :src="lang.flag" :alt="lang.code" class="h-full w-full object-cover" />
              </div>
              <span class="text-sm font-bold uppercase tracking-wide">{{ lang.label }}</span>
            </div>

            <div 
              v-if="locale === lang.code" 
              class="h-1.5 w-1.5 rounded-full bg-green-600 shadow-[0_0_8px_rgba(22,163,74,0.6)]"
            ></div>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const switcherRef = ref(null)

const languages = [
  { code: 'ru', label: 'Rus', flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'en', label: 'Eng', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'de', label: 'Deu', flag: 'https://flagcdn.com/w40/de.png' }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0]
})

const toggleDropdown = () => (isOpen.value = !isOpen.value)

const selectLanguage = (code) => {
  locale.value = code
  isOpen.value = false
  localStorage.setItem('user-locale', code)
}

const handleClickOutside = (event) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>

.cubic-bezier {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
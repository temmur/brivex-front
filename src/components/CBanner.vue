<template>
  <section
    id="home"
    class="relative w-full overflow-hidden bg-[#FAFAF9] py-20  lg:py-20 perspective-1000 scroll-mt-24"
    @mousemove="handleMouseMove"
    @mouseleave="resetMouse"
  >
    <div 
      class="pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-green-200/40 mix-blend-multiply blur-3xl transition-transform duration-300 ease-out"
      :style="parallaxStyle(-30)"
    ></div>
    <div 
      class="pointer-events-none absolute -right-20 bottom-0 h-[600px] w-[600px] rounded-full bg-amber-100/50 mix-blend-multiply blur-3xl transition-transform duration-300 ease-out"
      :style="parallaxStyle(-50)"
    ></div>

    <div class="container relative z-10 mx-auto">
      <div class="grid  gap-3 lg:grid-cols-12 ">
        
        <div class="flex flex-col space-y-10 lg:col-span-6 xl:col-span-5 ">
          <!-- <h1 class="text-5xl font-extrabold leading-[1.1] text-gray-900 tracking-tight md:text-6xl lg:text-[4rem]">
            Оптовая
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              продажа
            </span>
            сухофруктов в
            Узбекистане
          </h1> -->
          <i18n-t 
            keypath="hero.title" 
            tag="h1" 
            class="text-5xl font-extrabold leading-[1.1] text-gray-900 tracking-tight md:text-6xl lg:text-[4rem]"
>
  <template #action>
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
      {{ $t('hero.action') }}
    </span>
  </template>
</i18n-t>

          <ul class="flex flex-col space-y-4">
            <li 
              v-for="(item, index) in features" 
              :key="index" 
              class="flex items-center gap-4 text-lg font-medium text-gray-600"
            >
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-sm">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            {{ $t(`quality.${item}`) }}
            </li>
          </ul>

          <div class="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
            <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-amber-500 px-8 py-4 font-bold text-white shadow-[0_8px_30px_rgb(245,158,11,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(245,158,11,0.5)] active:translate-y-0">
              <span class="relative z-10">Просмотреть каталог</span>
              <div class="absolute inset-0 h-full w-full scale-0 rounded-full bg-amber-600 transition-transform duration-300 group-hover:scale-100"></div>
            </button>
            
            <!-- <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-[0_8px_30px_rgb(22,163,74,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(22,163,74,0.5)] active:translate-y-0">
              <span class="relative z-10">Подайте заявку</span>
              <div class="absolute inset-0 h-full w-full scale-0 rounded-full bg-green-700 transition-transform duration-300 group-hover:scale-100"></div>
            </button> -->
          </div>
        </div>

        <div class="relative flex justify-center lg:col-span-6 xl:col-span-7 lg:justify-end">
          
          <div 
            class="relative z-10 w-full max-w-xl transition-transform duration-200 ease-out animate-float"
            :style="parallaxStyle(20)"
          >
            <img 
              src="/images/dry-fruit2.png" 
              alt="Premium Dried Fruits from Uzbekistan" 
              class="relative z-10 w-full object-contain drop-shadow-2xl"
            />
            
            <div 
              class="absolute -top-8 right-12 z-20 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-center text-white shadow-2xl transition-transform duration-100 ease-out"
              :style="parallaxStyle(50)"
            >
              <div class="flex flex-col leading-none transform -rotate-12">
                 <span class="text-3xl font-black tracking-tight">100%</span>
                 <span class="text-xs font-bold uppercase tracking-widest text-green-100">Natural</span>
              </div>
            </div>
            
            <!-- <img 
              src="/images/grape.png" 
              class="absolute -bottom-10 left-20 w-26 opacity-80 blur-[0px] transition-transform duration-100 ease-out"
              :style="parallaxStyle(80)"
            /> -->
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const features = [
  'from_producer',
  'eco_friendly',
  'no_gmo'
]

// Parallax State
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (event) => {
  // Calculate mouse position relative to the center of the screen
  const { innerWidth, innerHeight } = window
  mouseX.value = (event.clientX / innerWidth - 0.5) * 2
  mouseY.value = (event.clientY / innerHeight - 0.5) * 2
}

const resetMouse = () => {
  mouseX.value = 0
  mouseY.value = 0
}

// Function to generate dynamic styles for different parallax layers
const parallaxStyle = (intensity) => {
  return {
    transform: `translate3d(${mouseX.value * intensity}px, ${mouseY.value * intensity}px, 0)`
  }
}
</script>

<style scoped>
/* Continuous floating animation for the main image */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Perspective wrapper for 3D hardware acceleration */
.perspective-1000 {
  perspective: 1000px;
}
</style>

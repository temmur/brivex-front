<template>
  <section
    id="home"
    class="perspective-1000 relative w-full overflow-hidden bg-[#FAFAF9] py-12 sm:py-14 lg:py-16 xl:py-20 scroll-mt-24"
    @mousemove="handleMouseMove"
    @mouseleave="resetMouse"
  >
    <div class="hero-grid pointer-events-none absolute inset-0 opacity-45"></div>

    <div 
      class="pointer-events-none absolute -left-16 top-0 h-[360px] w-[360px] rounded-full bg-green-200/40 mix-blend-multiply blur-3xl transition-transform duration-300 ease-out sm:-left-20 sm:h-[500px] sm:w-[500px]"
      :style="parallaxStyle(-20)"
    ></div>
    <div 
      class="pointer-events-none absolute -right-16 bottom-0 h-[380px] w-[380px] rounded-full bg-amber-100/50 mix-blend-multiply blur-3xl transition-transform duration-300 ease-out sm:-right-20 sm:h-[600px] sm:w-[600px]"
      :style="parallaxStyle(-30)"
    ></div>

    <div class="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        
        <div class="flex flex-col gap-7 lg:col-span-6 lg:gap-8 xl:col-span-5">
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
            class="text-3xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem]"
>
  <template #action>
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
      {{ $t('hero.action') }}
    </span>
  </template>
</i18n-t>

          <ul class="flex flex-col space-y-3 sm:space-y-4">
            <li 
              v-for="(item, index) in features" 
              :key="index" 
              class="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-medium text-gray-600"
            >
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-sm">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            {{ $t(`quality.${item}`) }}
            </li>
          </ul>

          <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:pt-4">
            <button class="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-amber-500 px-7 py-3.5 font-bold text-white shadow-[0_8px_30px_rgb(245,158,11,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(245,158,11,0.5)] active:translate-y-0">
              <span class="relative z-10">{{ $t("hero.catalog_button") }}</span>
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
            class="animate-float relative z-10 w-full max-w-[330px] transition-transform duration-200 ease-out sm:max-w-[440px] md:max-w-[520px] lg:max-w-[560px]"
            :style="parallaxStyle(14)"
          >
            <div class="pointer-events-none absolute inset-0 rounded-[30px] border border-white/70 bg-white/45 shadow-[0_28px_70px_-30px_rgba(17,24,39,0.35)]"></div>
            <img 
              src="/images/dry-fruit2.png" 
              alt="Premium Dried Fruits from Uzbekistan" 
              class="relative z-10 w-full object-contain px-2 py-4 drop-shadow-2xl sm:px-4 sm:py-5"
            />
            
            <div 
              class="absolute -top-2 right-2 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-center text-white shadow-2xl transition-transform duration-100 ease-out sm:-top-5 sm:right-6 sm:h-20 sm:w-20 md:-top-8 md:right-12 md:h-24 md:w-24"
              :style="parallaxStyle(24)"
            >
              <div class="flex flex-col leading-none transform -rotate-12">
                 <span class="text-xl font-black tracking-tight sm:text-2xl md:text-3xl">100%</span>
                 <span class="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-green-100">Natural</span>
              </div>
            </div>

            <div
              class="absolute -bottom-3 left-3 z-20 rounded-xl border border-green-100/80 bg-white/95 px-3 py-2 shadow-xl sm:-bottom-4 sm:left-6"
              :style="parallaxStyle(16)"
            >
              <p class="text-[9px] font-black uppercase tracking-[0.2em] text-green-600">Since</p>
              <p class="text-base font-black text-gray-900 sm:text-lg">2015</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const features = [
  'from_producer',
  'eco_friendly',
  'no_gmo'
]

// Parallax State
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (event) => {
  const current = event.currentTarget
  if (!current) return

  const rect = current.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5

  mouseX.value = x * 2
  mouseY.value = y * 2
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
.hero-grid {
  background-image:
    linear-gradient(rgba(22, 163, 74, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(22, 163, 74, 0.08) 1px, transparent 1px);
  background-size: 46px 46px;
}

/* Continuous floating animation for the main image */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Perspective wrapper for 3D hardware acceleration */
.perspective-1000 {
  perspective: 1000px;
}

h1,
p,
span {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

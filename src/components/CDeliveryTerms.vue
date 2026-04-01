<template>
  <section class="relative w-full overflow-hidden bg-[#FAFAF9] py-24 lg:py-36">
    <div class="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-green-100/20 blur-[120px]"></div>
    <div class="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-amber-50/30 blur-[140px]"></div>

    <div class="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col items-center gap-20 lg:flex-row lg:items-start lg:justify-between">
        
        <div class="w-full lg:w-[55%]">
          <header class="mb-16 space-y-6">
            <div class="flex items-center gap-3">
              <span class="h-[1px] w-10 bg-green-600/40"></span>
              <span class="text-[11px] font-black uppercase tracking-[0.4em] text-green-700/70">{{ $t('global-logistics') }}</span>
            </div>
            
            <h2 class="text-5xl font-black leading-[1.1] tracking-tight text-gray-900 md:text-7xl">
              Условия <br/>
              <span class="relative inline-block">
                <span class="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">поставки</span>
                <svg class="absolute -bottom-2 left-0 w-full opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </span>
            </h2>
            
            <p class="max-w-md text-lg font-medium leading-relaxed text-gray-500/80">
              Прозрачные процессы и международные стандарты качества для каждого этапа вашей закупки.
            </p>
          </header>

          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div 
              v-for="term in deliveryTerms" 
              :key="term.id"
              class="group relative flex flex-col items-start rounded-[32px] border border-gray-200/50 bg-white p-8 transition-all duration-500 hover:border-green-200 hover:shadow-[0_20px_50px_-12px_rgba(22,163,74,0.1)]"
            >
              <div class="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-green-600">
                <component 
                  :is="term.icon" 
                  class="h-6 w-6 text-green-600 transition-colors duration-500 group-hover:text-white" 
                />
              </div>

              <h3 class="text-[15px] font-bold leading-snug text-gray-800 transition-colors group-hover:text-green-800">
                {{ term.title }}
              </h3>
              
              <div class="mt-6 h-1 w-0 rounded-full bg-amber-400 transition-all duration-700 group-hover:w-12"></div>
            </div>
          </div>
        </div>

        <div class="relative w-full max-w-[520px] lg:w-[40%]">
          <div class="group relative">
            <div class="blob-mask relative aspect-[4/5] w-full overflow-hidden border-[12px] border-white bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-1000 group-hover:rotate-2">
              <img 
                src="/images/fruits/1.jpg" 
                class="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                alt="Premium Uzbekistan Dried Fruits"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>
            </div>

            <div class="absolute -right-6 top-10 z-20 flex h-32 w-32 items-center justify-center rounded-full border-[8px] border-[#FAFAF9] bg-white shadow-2xl transition-transform duration-500 hover:scale-110 hover:-rotate-12">
              <div class="text-center">
                <p class="text-2xl font-black text-green-600">100%</p>
                <p class="text-[9px] font-bold uppercase tracking-widest text-gray-400">Natural<br/>Quality</p>
              </div>
            </div>

            <div class="absolute -bottom-6 -left-8 z-20 rounded-[2rem] bg-gray-900 px-8 py-6 text-white shadow-2xl transition-transform duration-500 hover:translate-x-2">
              <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">Export Partner</p>
              <p class="text-xl font-black">Since 2016</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Leaf as HarvestIcon, 
  Truck as TruckIcon, 
  Scale as WeightIcon, 
  Clock as TimerIcon 
} from 'lucide-vue-next'

const deliveryTerms = [
  { id: 1, title: 'Урожай текущего сезона 2026 года', icon: HarvestIcon },
  { id: 2, title: 'Срок доставки после оплаты от 20 дней', icon: TimerIcon },
  { id: 3, title: 'Минимальный объём поставки 20 тонн', icon: WeightIcon },
  { id: 4, title: 'Тентовая фура или 40-футовый контейнер', icon: TruckIcon },
]
</script>

<style scoped>
.blob-mask {
  /* Refined organic shape */
  border-radius: 40% 60% 70% 30% / 40% 40% 60% 60%;
  animation: blob-morph 12s ease-in-out infinite alternate;
}

@keyframes blob-morph {
  0% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 60%; }
  50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  100% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 60%; }
}

/* Antialiasing for high-end typography */
h2, h3, p {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
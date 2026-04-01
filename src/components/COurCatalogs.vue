<template>
  <section id="catalog" class="w-full overflow-hidden bg-[#FAFAF9] py-14 sm:py-16 lg:py-24 xl:py-28 scroll-mt-24">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="mb-10 flex flex-col items-center text-center sm:mb-14 lg:mb-16">
        <span class="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-green-600">{{ $t('premium-selection') }}</span>
        <!-- <h2 class="text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
          Наш <span class="text-green-600">каталог</span>
        </h2> -->
        <h2 class="flex flex-wrap justify-center gap-x-2 text-3xl font-black uppercase tracking-tight sm:gap-x-3 sm:text-4xl md:text-5xl xl:text-6xl">
      <span class="text-[#111828]">
        {{ $t('catalog.title_part1') }}
      </span>
      
      <span class="text-[#00A740]">
        {{ $t('catalog.title_part2') }}
      </span>
    </h2>
        <div class="mt-6 h-1 w-12 rounded-full bg-amber-400"></div>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        
        <article 
          v-for="product in productsData" 
          :key="product.id"
          class="group relative flex h-full flex-col items-center rounded-[28px] bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(22,163,74,0.25)] sm:rounded-[34px] sm:p-8 xl:rounded-[40px] xl:p-10"
        >
          <div class="absolute inset-0 z-0 origin-bottom scale-y-0 rounded-[28px] bg-gradient-to-br from-green-600 to-green-700 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-y-100 sm:rounded-[34px] xl:rounded-[40px]"></div>

          <div class="relative z-10 mb-6 sm:mb-8 xl:mb-10">
            <div class="absolute inset-0 -m-4 rounded-full border border-green-500/0 transition-all duration-700 group-hover:m-0 group-hover:border-white/20"></div>
            
            <div class="h-32 w-32 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2 sm:h-40 sm:w-40 sm:border-[7px] xl:h-48 xl:w-48 xl:border-[8px]">
              <img 
                :src="product.imageUrl" 
                :alt="product.name" 
                class="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
            
            <div class="absolute -bottom-4 left-1/2 h-4 w-24 -translate-x-1/2 rounded-[100%] bg-black/5 blur-md transition-all duration-500 group-hover:bg-black/20 group-hover:blur-xl"></div>
          </div>

          <div class="relative z-10 flex flex-grow flex-col items-center text-center">
            <p class="pointer-events-none absolute -top-1 -z-10 text-6xl font-bold text-gray-100 opacity-[50%] sm:text-7xl xl:text-8xl">Brivex</p>
            <h3 class="mb-3 text-xl font-black uppercase tracking-tight text-green-600 transition-colors duration-500 group-hover:text-white sm:text-2xl">
              {{ product.name }}
            </h3>

            <div class="mb-6 w-full space-y-2 border-t border-gray-100 pt-4 transition-colors duration-500 group-hover:border-white/10 sm:mb-8 sm:pt-5 xl:mb-10 xl:pt-6">
              <p 
                v-for="(line, idx) in formatDetails(product.details)" 
                :key="idx"
                class="text-xs font-bold uppercase tracking-wider text-gray-400 transition-colors duration-500 group-hover:text-green-100"
              >
                {{ line }}
              </p>
            </div>

            <button 
              class="group/btn mt-auto flex w-full items-center justify-between rounded-2xl bg-green-600 px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-amber-400 hover:text-gray-900 group-hover:bg-white group-hover:text-green-700 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.2em]"
            >
              <span>Смотреть</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const productsData = [
  {
    id: 1,
    name: "Суданский изюм",
    details: "Сорт: Высший\nМетод: Солнечный\nВес: 12.5 кг",
    imageUrl: "/images/fruits/izym-tompson.jpg", 
  },
  {
    id: 2,
    name: "Рейзин Томпсон",
    details: "Сорт: Высший\nМетод: Солнечный\nВес: 12.5 кг",
    imageUrl: "/images/fruits/izym-tompson.jpg", 
  },
  {
    id: 3,
    name: "Золотистый изюм",
    details: "Сорт: Высший\nМетод: Солнечный\nВес: 12.5 кг",
    imageUrl: "/images/fruits/izym-tompson.jpg", 
  },
  {
    id: 4,
    name: "Черный изюм",
    details: "Сорт: Высший\nМетод: Воздушный\nВес: 12.5 кг",
    imageUrl: "/images/fruits/izym-tompson.jpg", 
  },
];

const formatDetails = (detailsString) => {
  return detailsString ? detailsString.split('\n') : [];
};
</script>

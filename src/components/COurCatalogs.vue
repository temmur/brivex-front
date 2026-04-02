<template>
  <section id="catalog" class="w-full overflow-hidden bg-[#FAFAF9] py-14 sm:py-16 lg:py-24 xl:py-28 scroll-mt-24">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10 flex flex-col items-center text-center sm:mb-14 lg:mb-16">
        <span class="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-green-600">{{ t('premium-selection') }}</span>
        <h2
          class="flex flex-wrap justify-center gap-x-2 text-3xl font-black uppercase tracking-tight sm:gap-x-3 sm:text-4xl md:text-5xl xl:text-6xl"
        >
          <span class="text-[#111828]">
            {{ t('catalog.title_part1') }}
          </span>

          <span class="text-[#00A740]">
            {{ t('catalog.title_part2') }}
          </span>
        </h2>
        <div class="mt-6 h-1 w-12 rounded-full bg-amber-400"></div>
      </div>

      <div class="relative">
        <button
          type="button"
          class="absolute left-0 top-1/2 z-30 hidden h-11 w-11 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-green-200 bg-white text-green-700 shadow-md transition hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
          :disabled="!canScrollPrev"
          aria-label="Previous products"
          @click="scrollPrev"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          class="absolute right-0 top-1/2 z-30 hidden h-11 w-11 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-green-200 bg-white text-green-700 shadow-md transition hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
          :disabled="!canScrollNext"
          aria-label="Next products"
          @click="scrollNext"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref="carouselRef"
          class="no-scrollbar flex touch-pan-x items-stretch snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-3 sm:gap-7 xl:gap-8"
          @scroll="updateScrollState"
        >
          <article
            v-for="product in productsData"
            :key="product.id"
            data-catalog-card
            class="group relative flex h-[520px] w-[86%] shrink-0 snap-start flex-col items-center rounded-[28px] bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(22,163,74,0.25)] sm:h-[550px] sm:w-[calc((100%-1.75rem)/2)] sm:rounded-[34px] sm:p-8 lg:w-[calc((100%-3.5rem)/3)] xl:h-[590px] xl:w-[calc((100%-6rem)/4)] xl:rounded-[40px] xl:p-10"
          >
            <div
              class="absolute inset-0 z-0 origin-bottom scale-y-0 rounded-[28px] bg-gradient-to-br from-green-600 to-green-700 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-y-100 sm:rounded-[34px] xl:rounded-[40px]"
            ></div>

            <div class="relative z-10 mb-6 sm:mb-8 xl:mb-10">
              <div
                class="absolute inset-0 -m-4 rounded-full border border-green-500/0 transition-all duration-700 group-hover:m-0 group-hover:border-white/20"
              ></div>

              <div
                class="h-32 w-32 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2 sm:h-40 sm:w-40 sm:border-[7px] xl:h-48 xl:w-48 xl:border-[8px]"
              >
                <img
                  :src="product.imageUrl"
                  :alt="t(product.nameKey)"
                  class="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              <div
                class="absolute -bottom-4 left-1/2 h-4 w-24 -translate-x-1/2 rounded-[100%] bg-black/5 blur-md transition-all duration-500 group-hover:bg-black/20 group-hover:blur-xl"
              ></div>
            </div>

            <div class="relative z-10 flex flex-grow flex-col items-center text-center">
              <p class="pointer-events-none absolute -top-1 -z-10 text-6xl font-bold text-gray-100 opacity-[50%] sm:text-7xl xl:text-8xl">Brivex</p>
              <h3 class="mb-3 flex min-h-[58px] items-center justify-center text-xl font-black uppercase tracking-tight text-green-600 transition-colors duration-500 group-hover:text-white sm:min-h-[78px] sm:text-2xl">
                {{ t(product.nameKey) }}
              </h3>

              <div
                class="mb-6 w-full space-y-2 border-t border-gray-100 pt-4 transition-colors duration-500 group-hover:border-white/10 sm:mb-8 sm:pt-5 xl:mb-10 xl:pt-6"
              >
                <p
                  v-for="(line, idx) in getProductDetails(product)"
                  :key="`${product.id}-${idx}`"
                  class="text-xs font-bold uppercase tracking-wider text-gray-400 transition-colors duration-500 group-hover:text-green-100"
                >
                  {{ line }}
                </p>
              </div>

              <button
                class="group/btn mt-auto flex w-full items-center justify-between rounded-2xl bg-green-600 px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-amber-400 hover:text-gray-900 group-hover:bg-white group-hover:text-green-700 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.2em]"
              >
                <span>{{ t('catalog.view_button') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>
        </div>

        <div class="mt-5 flex items-center justify-center gap-4 lg:hidden">
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-white text-green-700 shadow-sm transition hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            :disabled="!canScrollPrev"
            aria-label="Previous products"
            @click="scrollPrev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <p class="min-w-20 text-center text-[11px] font-black uppercase tracking-[0.2em] text-green-700">
            {{ currentIndex + 1 }} / {{ productsData.length }}
          </p>

          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-white text-green-700 shadow-sm transition hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            :disabled="!canScrollNext"
            aria-label="Next products"
            @click="scrollNext"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <router-link
          to="/products"
          class="group inline-flex items-center gap-3 rounded-full border border-green-600 bg-white px-7 py-3 text-xs font-black uppercase tracking-[0.2em] text-green-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:text-white sm:px-8 sm:py-3.5"
        >
          <span>{{ t('catalog.see_all') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { productsData, type ProductDataItem } from '@/data/productsData'

const { t } = useI18n()

const carouselRef = ref<HTMLElement | null>(null)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)
const currentIndex = ref(0)

const updateScrollState = () => {
  const carousel = carouselRef.value

  if (!carousel) {
    return
  }

  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
  const step = getCardStep()

  canScrollPrev.value = carousel.scrollLeft > 4
  canScrollNext.value = carousel.scrollLeft < maxScrollLeft - 4

  if (step > 0) {
    const index = Math.round(carousel.scrollLeft / step)
    currentIndex.value = Math.max(0, Math.min(index, productsData.length - 1))
  }
}

const getCardStep = () => {
  const carousel = carouselRef.value

  if (!carousel) {
    return 0
  }

  const firstCard = carousel.querySelector<HTMLElement>('[data-catalog-card]')
  const gapValue = Number.parseFloat(getComputedStyle(carousel).gap || '0')
  const cardWidth = firstCard?.getBoundingClientRect().width ?? carousel.clientWidth

  return cardWidth + gapValue
}

const scrollByStep = (direction: 1 | -1) => {
  scrollToIndex(currentIndex.value + direction)
}

const scrollToIndex = (targetIndex: number) => {
  const carousel = carouselRef.value

  if (!carousel) {
    return
  }

  const step = getCardStep()

  if (!step) {
    return
  }

  const nextIndex = Math.max(0, Math.min(targetIndex, productsData.length - 1))

  carousel.scrollTo({
    left: nextIndex * step,
    behavior: 'smooth',
  })
}

const scrollPrev = () => {
  scrollByStep(-1)
}

const scrollNext = () => {
  scrollByStep(1)
}

const getProductDetails = (product: ProductDataItem) => {
  return [
    `${t('catalog.details.grade')}: ${t(product.gradeKey)}`,
    `${t('catalog.details.method')}: ${t(product.methodKey)}`,
    `${t('catalog.details.weight')}: ${t('catalog.details.kg_value', { value: product.weightKg })}`,
  ]
}

onMounted(() => {
  nextTick(updateScrollState)
  window.addEventListener('resize', updateScrollState)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScrollState)
})
</script>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

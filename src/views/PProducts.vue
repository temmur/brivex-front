<template>
  <section class="relative overflow-hidden bg-[#eff5ec] pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24">
    <div class="pointer-events-none absolute -left-28 top-0 h-[360px] w-[360px] rounded-full bg-[#00A740]/25 blur-[120px]"></div>
    <div class="pointer-events-none absolute -right-20 top-20 h-[320px] w-[320px] rounded-full bg-[#f59e0b]/20 blur-[110px]"></div>
    <div class="pointer-events-none absolute inset-0 opacity-30" style="background-image: radial-gradient(circle at 1px 1px, #cfe0d3 1px, transparent 0); background-size: 24px 24px;"></div>

    <div class="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- <div class="relative overflow-hidden rounded-[36px] border border-[#dbe9da] bg-white px-6 py-7 shadow-[0_30px_80px_-45px_rgba(16,40,27,0.6)] sm:px-8 sm:py-9 lg:px-10 lg:py-11">
        <div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00A740]/15 to-transparent"></div>
        <div class="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#00A740]/10 blur-3xl"></div>

        <div class="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <p class="text-[11px] font-black uppercase tracking-[0.34em] text-[#00A740]">{{ t('products_page.badge') }}</p>
            <h1 class="mt-4 flex flex-wrap gap-x-3 text-3xl font-black uppercase leading-tight text-[#111828] sm:text-4xl lg:text-5xl">
              <span>{{ t('products_page.title_part1') }}</span>
              <span class="text-[#00A740]">{{ t('products_page.title_part2') }}</span>
            </h1>
            <p class="mt-4 max-w-2xl text-sm leading-relaxed text-[#4b5563] sm:text-base">
              {{ t('products_page.description') }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <p class="rounded-full border border-[#dbe8dd] bg-[#f5faf4] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#166534]">
              {{ t('products_page.total_items', { count: productsData.length }) }}
            </p>
            <router-link
              :to="{ path: '/', hash: '#catalog' }"
              class="inline-flex items-center gap-2 rounded-full border border-[#00A740]/30 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#007a2f] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00A740] hover:bg-[#00A740] hover:text-white"
            >
              {{ t('products_page.back_to_catalog') }}
            </router-link>
          </div>
        </div>
      </div> -->

      <div class="relative mb-16 flex flex-col items-start justify-between gap-10 border-b border-slate-200/60 pb-12 lg:flex-row lg:items-end">
        <div class="max-w-3xl">
          <div class="mb-6 flex items-center gap-3">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              {{ t('products_page.badge') }}
            </span>
          </div>
          
          <h1 class="text-5xl font-black uppercase tracking-tighter text-slate-900 sm:text-6xl lg:text-7xl">
            {{ t('products_page.title_part1') }} 
            <span class="relative inline-block text-green-600">
              {{ t('products_page.title_part2') }}
              <svg class="absolute -bottom-2 left-0 h-3 w-full text-green-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>
              </svg>
            </span>
          </h1>
          <p class="mt-8 max-w-xl text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
            {{ t('products_page.description') }}
          </p>
        </div>

        <div class="flex shrink-0 items-center gap-2 rounded-full bg-white/60 p-2 shadow-sm ring-1 ring-slate-200 backdrop-blur-xl">
          <div class="flex items-center gap-3 px-4">
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total</span>
            <span class="text-sm font-black text-slate-900">{{ productsData.length }}</span>
          </div>
          <div class="h-8 w-px bg-slate-200"></div>
          <router-link
            :to="{ path: '/', hash: '#catalog' }"
            class="group relative flex h-10 items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 px-6 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-green-600"
          >
            <span class="relative z-10">{{ t('products_page.back_to_catalog') }}</span>
            <svg class="relative z-10 h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </router-link>
        </div>
      </div>
      <div class="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="product in productsData"
          :key="product.id"
          class="catalog-card group relative isolate flex h-full flex-col overflow-hidden rounded-[30px] border border-[#d9e7da] bg-white p-4 shadow-[0_18px_40px_-30px_rgba(17,24,39,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_68px_-34px_rgba(22,163,74,0.45)] sm:p-5"
        >
          <div class="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#00A740]/12 blur-[72px] transition-all duration-500 group-hover:bg-[#00A740]/18"></div>

          <div class="relative overflow-hidden rounded-[24px]">
            <img
              :src="product.imageUrl"
              :alt="t(product.nameKey)"
              class="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#07130c]/75 via-[#07130c]/10 to-transparent"></div>
            <div class="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2">
              <span class="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                #{{ product.id }}
              </span>
              <span class="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                {{ t(product.gradeKey) }}
              </span>
            </div>
            <div class="card-shine"></div>
          </div>

          <div class="relative z-10 mt-5 flex flex-grow flex-col">
            <div class="flex min-h-[74px] items-start justify-between gap-3">
              <h2 class="text-2xl font-black uppercase leading-tight text-[#0f5132]">
                {{ t(product.nameKey) }}
              </h2>
              <span class="shrink-0 rounded-full border border-[#c9e9d1] bg-[#eef9ef] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#11803a]">
                {{ t(product.methodKey) }}
              </span>
            </div>

            <div class="mt-4 space-y-2">
              <div class="detail-pill">
                <span class="detail-pill__label">{{ t('catalog.details.grade') }}</span>
                <span class="detail-pill__value">{{ t(product.gradeKey) }}</span>
              </div>
              <div class="detail-pill">
                <span class="detail-pill__label">{{ t('catalog.details.method') }}</span>
                <span class="detail-pill__value">{{ t(product.methodKey) }}</span>
              </div>
              <div class="detail-pill">
                <span class="detail-pill__label">{{ t('catalog.details.weight') }}</span>
                <span class="detail-pill__value">{{ t('catalog.details.kg_value', { value: product.weightKg }) }}</span>
              </div>
            </div>

            <a
              href="tel:+998900374044"
              class="group/btn mt-6 inline-flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#00A740] to-[#00bc49] px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:from-[#008d37] hover:to-[#00a740]"
            >
              <span>{{ t('products_page.card_button') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { productsData } from '@/data/productsData'

const { t } = useI18n()
</script>

<style scoped>
.catalog-card::before {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: 28px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.9), rgba(243, 251, 244, 0.9));
  z-index: -1;
}

.card-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 15%, rgba(255, 255, 255, 0.35) 50%, transparent 80%);
  transform: translateX(-120%);
  transition: transform 0.8s ease;
}

.group:hover .card-shine {
  transform: translateX(120%);
}

.detail-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 14px;
  border: 1px solid #e5efe5;
  background: linear-gradient(120deg, #f9fcf9, #f2f9f2);
  padding: 10px 12px;
}

.detail-pill__label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8390a3;
}

.detail-pill__value {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #155631;
  text-align: right;
}
</style>

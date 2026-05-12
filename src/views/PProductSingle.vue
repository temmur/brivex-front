<template>
  <section class="bg-[#f7fbf5] py-10 sm:py-14 lg:py-20">
    <div v-if="product" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <router-link
        to="/products"
        class="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-green-700 transition hover:bg-green-600 hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ t('product_page.back_to_products') }}
      </router-link>

      <div class="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div class="space-y-4">
          <div class="overflow-hidden rounded-[32px] border border-green-100 bg-white shadow-[0_30px_70px_-45px_rgba(17,24,39,0.55)]">
            <img
              :src="selectedImage"
              :alt="content.title"
              class="h-[340px] w-full object-cover sm:h-[460px] lg:h-[560px]"
              @error="setImageFallback"
            />
          </div>

          <div class="grid grid-cols-3 gap-3">
            <button
              v-for="image in product.images"
              :key="image"
              type="button"
              class="overflow-hidden rounded-2xl border bg-white p-1 transition"
              :class="image === selectedImage ? 'border-green-600' : 'border-green-100 hover:border-green-300'"
              @click="selectedImage = image"
            >
              <img
                :src="image"
                :alt="content.title"
                class="h-24 w-full rounded-xl object-cover sm:h-28"
                @error="setImageFallback"
              />
            </button>
          </div>
        </div>

        <article class="rounded-[32px] border border-green-100 bg-white p-6 shadow-[0_26px_60px_-48px_rgba(17,24,39,0.55)] sm:p-8 lg:p-10">
          <p class="text-[11px] font-black uppercase tracking-[0.28em] text-green-600">
            {{ t('product_page.badge') }}
          </p>

          <h1 class="mt-4 text-3xl font-black uppercase leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {{ content.title }}
          </h1>

          <div class="mt-6 grid gap-3 sm:grid-cols-3">
            <div class="spec-pill">
              <span>{{ t('catalog.details.grade') }}</span>
              <strong>{{ t(product.gradeKey) }}</strong>
            </div>
            <div class="spec-pill">
              <span>{{ t('catalog.details.method') }}</span>
              <strong>{{ t(product.methodKey) }}</strong>
            </div>
            <div class="spec-pill">
              <span>{{ t('catalog.details.weight') }}</span>
              <strong>{{ t('catalog.details.kg_value', { value: product.weightKg }) }}</strong>
            </div>
          </div>

          <div class="mt-8 space-y-5 text-base font-medium leading-8 text-slate-600">
            <p v-for="paragraph in content.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>

          <div v-if="content.storage?.length" class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <h2 class="text-sm font-black uppercase tracking-[0.18em] text-amber-800">
              {{ t('product_page.storage') }}
            </h2>
            <ul class="mt-3 space-y-2 text-sm font-semibold leading-6 text-amber-900">
              <li v-for="line in content.storage" :key="line">
                {{ line }}
              </li>
            </ul>
          </div>

          <a
            href="tel:+998900374044"
            class="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-green-700 sm:w-auto"
          >
            {{ t('product_page.contact') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </article>
      </div>
    </div>

    <div v-else class="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <h1 class="text-3xl font-black uppercase text-slate-950">Product not found</h1>
      <router-link to="/products" class="mt-6 inline-flex rounded-full bg-green-600 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-white">
        {{ t('product_page.back_to_products') }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import { getProductBySlug, getProductContent, type ProductContent } from '@/data/productsData'

const route = useRoute()
const { locale, t } = useI18n()

const product = computed(() => getProductBySlug(route.params.slug as string | string[]))
const content = computed(() => (product.value ? getProductContent(product.value, locale.value) : getProductContentPlaceholder()))
const selectedImage = ref('/images/dry-fruit.avif')

watchEffect(() => {
  selectedImage.value = product.value?.imageUrl ?? '/images/dry-fruit.avif'
})

const setImageFallback = (event: Event) => {
  const image = event.target as HTMLImageElement
  image.src = '/images/dry-fruit.avif'
}

const getProductContentPlaceholder = (): ProductContent => ({
  title: 'Product not found',
  paragraphs: [],
})
</script>

<style scoped>
.spec-pill {
  display: flex;
  min-height: 92px;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  border-radius: 18px;
  border: 1px solid #dcf2df;
  background: #f6fbf5;
  padding: 16px;
}

.spec-pill span {
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
}

.spec-pill strong {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #166534;
}
</style>

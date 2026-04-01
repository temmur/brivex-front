<template>
  <footer class="bg-[#f9f7f0] border-t border-gray-200 pt-14 pb-6 px-6">
    <div class="max-w-7xl mx-auto">
 
      <!-- Top grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
 
        <!-- Brand column -->
        <div class="lg:col-span-1">
          <div class="mb-4">
            <!-- Logo text matching brand style -->
            <span class="font-serif italic text-2xl text-[#b8952a] tracking-wide leading-none">
              LLC Sunny Fruit
            </span>
            <div class="text-[10px] tracking-[0.25em] uppercase text-[#b8952a]/70 mt-0.5 ml-0.5">
              PRODUCTION
            </div>
          </div>
          <p class="text-sm text-gray-500 leading-relaxed max-w-[220px]">
            Premium fruit production delivered with care and quality you can taste.
          </p>
          <!-- Social icons -->
          <div class="flex gap-3 mt-5">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#22a04b] hover:text-[#22a04b] hover:bg-[#22a04b]/5 transition-all duration-200"
            >
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>
 
        <!-- Navigation columns -->
        <div v-for="col in navColumns" :key="col.title">
          <h4 class="text-xs font-bold tracking-[0.18em] uppercase text-gray-800 mb-4">
            {{ col.title }}
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-gray-500 hover:text-[#22a04b] transition-colors duration-150 flex items-center gap-1.5 group"
              >
                <span
                  class="inline-block w-1 h-1 rounded-full bg-[#22a04b] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
 
        <!-- Contact / Newsletter column -->
        <div>
          <h4 class="text-xs font-bold tracking-[0.18em] uppercase text-gray-800 mb-4">
            Stay in touch
          </h4>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">
            Subscribe for seasonal updates and fresh offers.
          </p>
          <!-- Email subscribe -->
          <div class="flex rounded-xl overflow-hidden border border-gray-300 focus-within:border-[#22a04b] transition-colors duration-200">
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              class="flex-1 px-3 py-2.5 text-sm bg-white outline-none text-gray-700 placeholder-gray-400"
            />
            <button
              @click="handleSubscribe"
              class="px-4 bg-[#22a04b] hover:bg-[#1a8a3f] text-white text-xs font-semibold tracking-wide transition-colors duration-200"
            >
              Join
            </button>
          </div>
          <p v-if="subscribed" class="text-xs text-[#22a04b] mt-2 font-medium">
            ✓ You're subscribed!
          </p>
 
          <!-- Contact info -->
          <div class="mt-6 space-y-2">
            <a
              href="tel:+998712345678"
              class="flex items-center gap-2 text-sm text-gray-500 hover:text-[#22a04b] transition-colors"
            >
              <PhoneIcon class="w-4 h-4 shrink-0" />
              +998 71 234-56-78
            </a>
            <a
              href="mailto:info@sunnyfruit.uz"
              class="flex items-center gap-2 text-sm text-gray-500 hover:text-[#22a04b] transition-colors"
            >
              <MailIcon class="w-4 h-4 shrink-0" />
              info@sunnyfruit.uz
            </a>
          </div>
        </div>
 
      </div>
 
      <!-- Divider -->
       <div class="border-t border-gray-200" />
 
      <!-- Bottom bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5">
        <p class="text-xs text-gray-400">
          © {{ currentYear }} LLC Sunny Fruit Production. All rights reserved.
        </p>
        <div class="flex gap-5">
          <a
            v-for="legal in legalLinks"
            :key="legal.label"
            :href="legal.href"
            class="text-xs text-gray-400 hover:text-[#22a04b] transition-colors"
          >
            {{ legal.label }}
          </a>
        </div>
      </div>
 
    </div>
  </footer>
</template>
 
<script setup>
import { ref, computed, h } from 'vue'
 
// ── Reactive state ──────────────────────────────────────────────
const email = ref('')
const subscribed = ref(false)
 
const currentYear = computed(() => new Date().getFullYear())
 
function handleSubscribe() {
  if (email.value && email.value.includes('@')) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => (subscribed.value = false), 4000)
  }
}
 
// ── Inline SVG icon components (no extra deps needed) ──────────
const PhoneIcon = {
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z' }),
    ]),
}
 
const MailIcon = {
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75' }),
    ]),
}
 
// Social icon helpers
const makeSocialIcon = (pathD) => ({
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', { d: pathD }),
    ]),
})
 
// ── Data ────────────────────────────────────────────────────────
const socials = [
  {
    name: 'Instagram',
    href: '#',
    icon: makeSocialIcon(
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: makeSocialIcon(
      'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    ),
  },
  {
    name: 'Telegram',
    href: '#',
    icon: makeSocialIcon('M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'
    ),
  },
]
 
const navColumns = [
  {
    title: 'Company',
    links: [
      { label: 'Main page', href: '/' },
      { label: 'Production', href: '/production' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contacts', href: '/contacts' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Fresh Fruits', href: '/production#fresh' },
      { label: 'Dried Fruits', href: '/production#dried' },
      { label: 'Seasonal Offers', href: '/production#seasonal' },
      { label: 'Export', href: '/production#export' },
    ],
  },
]
 
const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
]
</script>
<template>
  <footer id="contacts" class="relative overflow-hidden bg-white pt-14 text-[#111828] scroll-mt-24">
    <div class="footer-grid pointer-events-none absolute inset-0 opacity-45"></div>
    <div class="footer-top-blend pointer-events-none absolute inset-x-0 top-0 h-32"></div>
    <div class="pointer-events-none absolute -left-24 top-0 h-[340px] w-[340px] rounded-full bg-[#00A740]/30 blur-[120px]"></div>
    <div class="pointer-events-none absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-[#f59e0b]/20 blur-[130px]"></div>

    <div class="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-12 rounded-[34px] border border-[#e5e7eb] bg-gradient-to-r from-[#f7faf5] to-[#fffaf2] p-6 shadow-[0_24px_50px_-32px_rgba(15,23,42,0.35)] md:p-8">
        <div class="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-8">
            <p class="font-ui text-[11px] font-black uppercase tracking-[0.34em] text-[#00A740]">{{ $t("footer.cta.label") }}</p>
            <h2 class="font-ui mt-3 text-3xl font-black leading-tight text-[#111828] md:text-4xl">
              {{ $t("footer.cta.title") }}
            </h2>
            <p class="mt-3 max-w-2xl text-sm leading-relaxed text-[#4b5563] md:text-base">
              {{ $t("footer.cta.description") }}
            </p>
          </div>
          <div class="lg:col-span-4 lg:justify-self-end">
            <a
              href="tel:+998900374044"
              class="group inline-flex items-center gap-3 rounded-full border border-[#00A740]/30 bg-[#00A740] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#008533]"
            >
              <PhoneIcon class="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              {{ $t("footer.cta.button") }}
            </a>
          </div>
        </div>
      </div>

      <div class="grid gap-10 pb-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <div class="rounded-[28px] border border-[#e5e7eb] bg-[#f9fafb] p-6 md:p-7">
            <!-- <p class="brand-title text-3xl italic leading-none text-[#fcd34d]">LLC Sunny Fruit</p>
            <p class="font-ui mt-1 text-[10px] font-black uppercase tracking-[0.34em] text-[#fde68a]">Production</p> -->
            <!-- <img src="/images/logo2.png" alt="" class="w-full max-w-[200px] m-auto"> -->

            <p class="mt-5 max-w-sm text-sm leading-relaxed text-[#4b5563]">{{ $t("footer.brand.description") }}</p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span class="rounded-full border border-[#34d399]/35 bg-[#34d399]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#047857]">
                HACCP
              </span>
              <span class="rounded-full border border-[#34d399]/35 bg-[#34d399]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#047857]">
                ISO 9001
              </span>
              <span class="rounded-full border border-[#34d399]/35 bg-[#34d399]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#047857]">
                {{ $t("footer.brand.badge_export") }}
              </span>
            </div>

            <div class="mt-6 flex items-center gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.href"
                :aria-label="social.name"
                class="group/social flex h-10 w-10 items-center justify-center rounded-full border border-[#d1d5db] bg-white text-[#4b5563] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22c55e]/60 hover:bg-[#22c55e] hover:text-white"
              >
                <component :is="social.icon" class="h-4 w-4 transition-transform duration-300 group-hover/social:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3">
          <h3 class="font-ui text-xs font-black uppercase tracking-[0.3em] text-[#00A740]">{{ $t("footer.sections.navigation") }}</h3>
          <ul class="mt-5 space-y-3">
            <li v-for="link in companyLinks" :key="link.labelKey">
              <a
                :href="link.href"
                class="group inline-flex items-center gap-2 text-sm text-[#4b5563] transition-colors duration-200 hover:text-[#111828]"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-[#22c55e] opacity-60 transition-opacity group-hover:opacity-100"></span>
                {{ $t(link.labelKey) }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h3 class="font-ui text-xs font-black uppercase tracking-[0.3em] text-[#00A740]">{{ $t("footer.sections.catalog") }}</h3>
          <ul class="mt-5 space-y-3">
            <li v-for="link in productLinks" :key="link.labelKey">
              <a
                :href="link.href"
                class="group inline-flex items-center gap-2 text-sm text-[#4b5563] transition-colors duration-200 hover:text-[#111828]"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-[#f59e0b] opacity-70 transition-opacity group-hover:opacity-100"></span>
                {{ $t(link.labelKey) }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="font-ui text-xs font-black uppercase tracking-[0.3em] text-[#00A740]">{{ $t("footer.sections.contacts") }}</h3>
          <div class="mt-5 space-y-3">
            <a
              href="tel:+998900374044"
              class="inline-flex items-center gap-2 text-sm text-[#4b5563] transition-colors hover:text-[#111828]"
            >
              <PhoneIcon class="h-4 w-4 text-[#16a34a]" />
              +998 (90) 037-40-44
            </a>
            <a
              href="mailto:info@sunnyfruit.uz"
              class="inline-flex items-center gap-2 text-sm text-[#4b5563] transition-colors hover:text-[#111828]"
            >
              <MailIcon class="h-4 w-4 text-[#16a34a]" />
              info@sunnyfruit.uz
            </a>
            <p class="inline-flex items-center gap-2 text-sm text-[#4b5563]">
              <ClockIcon class="h-4 w-4 text-[#16a34a]" />
              {{ $t("footer.contacts.hours") }}
            </p>
          </div>

          <!-- <div class="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p class="font-ui text-[10px] font-black uppercase tracking-[0.26em] text-[#86efac]">Подписка</p>
            <div class="mt-3 flex rounded-xl border border-white/15 bg-[#0f2618]">
              <input
                v-model="email"
                type="email"
                placeholder="your@email.com"
                class="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-[#9ca3af] outline-none"
              />
              <button
                type="button"
                @click="handleSubscribe"
                class="rounded-r-xl bg-[#00A740] px-4 text-xs font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#008533]"
              >
                Join
              </button>
            </div>
            <p v-if="subscribed" class="mt-2 text-xs font-semibold text-[#86efac]">Спасибо, вы успешно подписались.</p>
            <p v-else-if="invalidEmail" class="mt-2 text-xs font-semibold text-[#fdba74]">Введите корректный email адрес.</p>
          </div> -->
        </div>
      </div>

      <div class="border-t border-[#e5e7eb] py-5">
        <div class="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p class="text-xs text-[#6b7280]">{{ $t("footer.bottom.copyright", { year: currentYear }) }}</p>
          <div class="flex items-center gap-5">
            <a
              v-for="link in legalLinks"
              :key="link.labelKey"
              :href="link.href"
              class="text-xs text-[#6b7280] transition-colors hover:text-[#111828]"
            >
              {{ $t(link.labelKey) }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue"
import {
  Clock as ClockIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Send as TelegramIcon,
} from "lucide-vue-next"

const currentYear = computed(() => new Date().getFullYear())

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FacebookIcon,
  },
  {
    name: "Telegram",
    href: "#",
    icon: TelegramIcon,
  },
]

const companyLinks = [
  { labelKey: "nav.home", href: "#home" },
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.delivery", href: "#delivery" },
  { labelKey: "nav.contacts", href: "#contacts" },
]

const productLinks = [
  { labelKey: "footer.catalog.sudan_raisin", href: "#catalog" },
  { labelKey: "footer.catalog.thompson_raisin", href: "#catalog" },
  { labelKey: "footer.catalog.golden_raisin", href: "#catalog" },
  { labelKey: "footer.catalog.black_raisin", href: "#catalog" },
]

const legalLinks = [
  { labelKey: "footer.bottom.privacy", href: "/privacy" },
  { labelKey: "footer.bottom.terms", href: "/terms" },
]
</script>

<style scoped>
.footer-grid {
  background-image:
    linear-gradient(rgba(17, 24, 39, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17, 24, 39, 0.07) 1px, transparent 1px);
  background-size: 42px 42px;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 130px, black 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 130px, black 100%);
}

.footer-top-blend {
  background: linear-gradient(to bottom, rgba(15, 29, 19, 0.18) 0%, rgba(15, 29, 19, 0.08) 58%, rgba(255, 255, 255, 0) 100%);
}

.brand-title {
  font-family: "Cormorant Garamond", "Palatino Linotype", "Book Antiqua", serif;
}

.font-ui {
  font-family: "Manrope", "Avenir Next", "Segoe UI", sans-serif;
}

h2,
h3,
p,
a,
span {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

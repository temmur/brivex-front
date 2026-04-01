<template>
  <section id="delivery" class="relative overflow-hidden bg-[#f7faf5] py-20 lg:py-28 scroll-mt-24">
    <div class="mesh pointer-events-none absolute inset-0 opacity-50"></div>
    <div class="grid-lines pointer-events-none absolute inset-0 opacity-30"></div>
    <div class="pointer-events-none absolute -left-24 top-0 h-[340px] w-[340px] rounded-full bg-[#00A740]/15 blur-[110px]"></div>
    <div class="pointer-events-none absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-[#fbbf24]/20 blur-[110px]"></div>

    <div class="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-14 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-7">
          <div class="flex items-center gap-3">
            <span class="h-px w-10 bg-[#00A740]/45"></span>
            <p class="text-[11px] font-black uppercase tracking-[0.34em] text-[#0b7f35]">
              {{ $t("global-logistics") }}
            </p>
          </div>

          <h2 class="mt-6 max-w-3xl text-4xl font-black leading-[1.07] tracking-tight text-[#0a0c10] md:text-6xl">
            {{ $t("delivery.title_main") }}
            <span class="bg-gradient-to-r from-[#00A740] to-[#5bbd79] bg-clip-text text-transparent">{{ $t("delivery.title_highlight") }}</span>
          </h2>

          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b5563]">
            {{ $t("delivery.description") }}
          </p>

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <article
              v-for="item in deliveryTerms"
              :key="item.id"
              class="group rounded-3xl border border-white/80 bg-white/95 p-5 shadow-[0_20px_48px_-28px_rgba(17,24,39,0.45)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#00A740]/30 hover:shadow-[0_28px_58px_-28px_rgba(0,167,64,0.4)]"
            >
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfdf3] text-[#00A740] transition-colors duration-300 group-hover:bg-[#00A740] group-hover:text-white">
                <component :is="item.icon" class="h-5 w-5" />
              </div>
              <h3 class="text-sm font-bold leading-relaxed text-[#1f2937]">{{ $t(item.titleKey) }}</h3>
            </article>
          </div>

          <div class="mt-8 rounded-[26px] border border-[#d1fae5] bg-white/90 p-5 shadow-[0_24px_50px_-30px_rgba(0,167,64,0.45)] md:p-6">
            <p class="text-[10px] font-black uppercase tracking-[0.32em] text-[#00A740]">{{ $t("delivery.flow_label") }}</p>
            <div class="mt-4 grid gap-3 sm:grid-cols-3">
              <article
                v-for="(step, index) in deliveryFlow"
                :key="step.titleKey"
                class="rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-4"
              >
                <div class="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#111828] text-sm font-black text-white">
                  {{ index + 1 }}
                </div>
                <p class="text-xs font-black uppercase tracking-[0.18em] text-[#111828]">{{ $t(step.titleKey) }}</p>
                <p class="mt-2 text-sm leading-relaxed text-[#6b7280]">{{ $t(step.descriptionKey) }}</p>
              </article>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative isolate">
            <div class="card-grid pointer-events-none absolute -inset-8 -z-10 rounded-[40px] opacity-45"></div>
            <div class="pointer-events-none absolute -inset-4 rounded-[34px] bg-gradient-to-br from-[#00A740]/20 to-[#fbbf24]/20 blur-2xl"></div>

            <div class="relative overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-[0_38px_80px_-32px_rgba(15,23,42,0.52)]">
              <img
                src="/images/logistc.png"
                :alt="$t('delivery.image_alt')"
                class="h-[560px] w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#111828]/70 via-[#111828]/10 to-transparent"></div>

              <div class="absolute inset-x-0 bottom-0 p-5">
                <div class="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p class="text-[10px] font-black uppercase tracking-[0.3em] text-[#bbf7d0]">{{ $t("delivery.overlay_title") }}</p>
                  <p class="mt-1 text-base font-semibold text-white">{{ $t("delivery.overlay_text") }}</p>
                </div>
              </div>
            </div>

            <div class="float-soft absolute -left-8 top-8 rounded-2xl border border-white/80 bg-white px-4 py-3 shadow-[0_24px_52px_-24px_rgba(15,23,42,0.4)]">
              <p class="text-[10px] font-black uppercase tracking-[0.24em] text-[#00A740]">{{ $t("delivery.badge_shipping_title") }}</p>
              <p class="mt-1 text-xl font-black text-[#111828]">{{ $t("delivery.badge_shipping_value") }}</p>
            </div>

            <div class="float-delay absolute -bottom-7 right-8 rounded-2xl border border-[#34d399]/30 bg-[#111828] px-5 py-4 shadow-[0_30px_64px_-22px_rgba(0,0,0,0.6)]">
              <p class="text-[10px] font-black uppercase tracking-[0.24em] text-[#86efac]">{{ $t("delivery.badge_transport_title") }}</p>
              <p class="mt-1 text-sm font-semibold text-white">{{ $t("delivery.badge_transport_value") }}</p>
            </div>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <article
              v-for="stat in logisticsStats"
              :key="stat.labelKey"
              class="rounded-2xl border border-[#e5e7eb] bg-white px-4 py-4 text-center shadow-[0_16px_36px_-26px_rgba(15,23,42,0.45)]"
            >
              <p class="text-2xl font-black text-[#111828]">{{ stat.value }}</p>
              <p class="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b7280]">{{ $t(stat.labelKey) }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Clock as ClockIcon,
  Leaf as HarvestIcon,
  Scale as WeightIcon,
  Truck as TruckIcon,
} from "lucide-vue-next"

const deliveryTerms = [
  { id: 1, titleKey: "delivery.terms.harvest_2026", icon: HarvestIcon },
  { id: 2, titleKey: "delivery.terms.delivery_20_days", icon: ClockIcon },
  { id: 3, titleKey: "delivery.terms.min_volume_20_tons", icon: WeightIcon },
  { id: 4, titleKey: "delivery.terms.transport_options", icon: TruckIcon },
]

const logisticsStats = [
  { value: "20+", labelKey: "delivery.stats.days_to_ship" },
  { value: "20 т", labelKey: "delivery.stats.min_batch" },
  { value: "40 ft", labelKey: "delivery.stats.container" },
]

const deliveryFlow = [
  {
    titleKey: "delivery.flow.confirmation.title",
    descriptionKey: "delivery.flow.confirmation.description",
  },
  {
    titleKey: "delivery.flow.preparation.title",
    descriptionKey: "delivery.flow.preparation.description",
  },
  {
    titleKey: "delivery.flow.shipping.title",
    descriptionKey: "delivery.flow.shipping.description",
  },
]
</script>

<style scoped>
.mesh {
  background-image:
    radial-gradient(circle at 1px 1px, rgba(17, 24, 40, 0.07) 1px, transparent 0),
    linear-gradient(120deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0));
  background-size: 30px 30px, 100% 100%;
}

.grid-lines {
  background-image:
    linear-gradient(rgba(17, 24, 40, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17, 24, 40, 0.08) 1px, transparent 1px);
  background-size: 52px 52px;
}

.card-grid {
  background-image:
    linear-gradient(rgba(0, 167, 64, 0.17) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 167, 64, 0.17) 1px, transparent 1px);
  background-size: 26px 26px;
}

.float-soft {
  animation: lift-soft 7s ease-in-out infinite;
}

.float-delay {
  animation: lift-soft 8s ease-in-out infinite;
  animation-delay: 1.2s;
}

@keyframes lift-soft {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

h2,
h3,
p,
span {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

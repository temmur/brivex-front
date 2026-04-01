<template>
  <section id="about" class="relative overflow-hidden bg-[#f3f7f1] py-20 lg:py-28 scroll-mt-24">
    <div class="soft-grid pointer-events-none absolute inset-0 opacity-45"></div>
    <div class="pointer-events-none absolute -left-24 top-0 h-[320px] w-[320px] rounded-full bg-[#00A740]/15 blur-[90px]"></div>
    <div class="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[#fbbf24]/20 blur-[110px]"></div>

    <div class="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-14 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-7">
          <span
            class="inline-flex items-center gap-3 rounded-full border border-[#00A740]/15 bg-white/85 px-5 py-2 text-[11px] font-black uppercase tracking-[0.32em] text-[#006f2b]"
          >
            <span class="h-2.5 w-2.5 rounded-full bg-[#00A740] shadow-[0_0_0_6px_rgba(0,167,64,0.15)]"></span>
            Sunny Fruit Production
          </span>

          <h2 class="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[#111828] md:text-6xl">
            {{ $t("about.hero.title_main") }}
            <span class="bg-gradient-to-r from-[#00A740] to-[#66c17f] bg-clip-text text-transparent">{{ $t("about.hero.title_highlight") }}</span>
          </h2>

          <p class="mt-7 max-w-2xl text-lg leading-relaxed text-[#374151]">
            {{ $t("about.hero.description") }}
          </p>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <article
              v-for="stat in quickStats"
              :key="stat.labelKey"
              class="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_24px_45px_-26px_rgba(17,24,39,0.45)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_70px_-28px_rgba(0,167,64,0.4)]"
            >
              <p class="text-3xl font-black text-[#111828]">{{ stat.value ?? $t(stat.valueKey) }}</p>
              <p class="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6b7280]">{{ $t(stat.labelKey) }}</p>
            </article>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative isolate">
            <div class="pointer-events-none absolute -inset-3 rounded-[38px] bg-gradient-to-br from-[#00A740]/25 to-[#fbbf24]/20 blur-2xl"></div>

            <div
              class="relative overflow-hidden rounded-[34px] border border-white/70 bg-white shadow-[0_36px_80px_-30px_rgba(15,23,42,0.5)]"
            >
              <img
                src="/images/fruits/1.jpg"
                :alt="$t('about.hero.image_alt')"
                class="h-[520px] w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#111828]/70 via-[#111828]/10 to-transparent"></div>

              <div class="absolute inset-x-0 bottom-0 p-6">
                <div class="rounded-2xl border border-white/20 bg-white/15 px-4 py-3 backdrop-blur-md">
                  <p class="text-[10px] font-black uppercase tracking-[0.32em] text-[#bbf7d0]">{{ $t("about.hero.overlay_title") }}</p>
                  <p class="mt-1 text-lg font-semibold text-white">{{ $t("about.hero.overlay_text") }}</p>
                </div>
              </div>
            </div>

            <div
              class="float-slow absolute -left-7 top-8 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_28px_55px_-24px_rgba(15,23,42,0.4)]"
            >
              <p class="text-xs font-black uppercase tracking-[0.2em] text-[#00A740]">{{ $t("about.hero.team_label") }}</p>
              <p class="mt-1 text-2xl font-black text-[#111828]">{{ $t("about.hero.team_value") }}</p>
            </div>

            <div
              class="float-delay absolute -bottom-7 right-7 rounded-2xl border border-white/40 bg-[#111828] px-5 py-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]"
            >
              <p class="text-[10px] font-black uppercase tracking-[0.28em] text-[#86efac]">{{ $t("about.hero.certified_label") }}</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span
                  v-for="cert in aboutData.certifications.slice(0, 2)"
                  :key="cert"
                  class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white"
                >
                  {{ cert }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white py-20 lg:py-24">
    <div class="container mx-auto max-w-7xl px-6 lg:px-8">
      <header class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl">
          <p class="text-[11px] font-black uppercase tracking-[0.32em] text-[#00A740]">{{ $t("about.export.label") }}</p>
          <h3 class="mt-4 text-4xl font-black leading-tight text-[#111828] md:text-5xl">{{ $t("about.export.title") }}</h3>
          <p class="mt-5 text-lg leading-relaxed text-[#4b5563]">
            {{ $t("about.export.description") }}
          </p>
        </div>
        <div class="flex max-w-xl flex-wrap gap-3">
          <span
            v-for="countryKey in aboutData.main.countries"
            :key="countryKey"
            class="rounded-full border border-[#d1d5db] bg-[#f9fafb] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#374151] transition-colors hover:border-[#00A740]/40 hover:bg-[#ecfdf3] hover:text-[#006f2b]"
          >
            {{ $t(countryKey) }}
          </span>
        </div>
      </header>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="feature in exportFeatures"
          :key="feature.titleKey"
          class="group rounded-3xl border border-[#e5e7eb] bg-white p-7 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[#00A740]/40 hover:shadow-[0_28px_60px_-30px_rgba(0,167,64,0.45)]"
        >
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfdf3] text-[#00A740] transition-colors duration-300 group-hover:bg-[#00A740] group-hover:text-white"
          >
            <component :is="feature.icon" class="h-5 w-5" />
          </div>
          <h4 class="text-xl font-black text-[#111828]">{{ $t(feature.titleKey) }}</h4>
          <p class="mt-3 text-sm leading-relaxed text-[#6b7280]">{{ $t(feature.descriptionKey) }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- QUALITY SECTION -->
  <section id="quality" class="relative overflow-hidden bg-[#0f1d13] py-14 sm:py-16 lg:py-20 xl:py-24 scroll-mt-24">
    <div class="quality-grid pointer-events-none absolute inset-0 opacity-28"></div>
    <div class="pointer-events-none absolute -left-20 top-8 h-[220px] w-[220px] rounded-full bg-[#00A740]/25 blur-[90px] sm:-left-24 sm:h-[300px] sm:w-[300px] sm:blur-[120px]"></div>
    <div class="pointer-events-none absolute -right-16 bottom-0 h-[240px] w-[240px] rounded-full bg-[#fbbf24]/15 blur-[90px] sm:-right-20 sm:h-[320px] sm:w-[320px] sm:blur-[120px]"></div>

    <div class="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#132719] via-[#111f16] to-[#0f1d13] p-5 shadow-[0_44px_90px_-34px_rgba(0,0,0,0.8)] sm:rounded-[34px] sm:p-6 md:p-8 lg:rounded-[42px] lg:p-12 xl:p-16"
      >
        <div class="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#00A740]/20 blur-[80px] sm:-right-20 sm:-top-20 sm:h-64 sm:w-64 sm:blur-[120px]"></div>
        <div class="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[#86efac]/15 blur-[70px] sm:-bottom-16 sm:-left-16 sm:h-52 sm:w-52 sm:blur-[100px]"></div>

        <div class="relative z-10 grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-7">
            <div class="flex items-center gap-4">
              <div class="h-px w-12 bg-[#22c55e]"></div>
              <p class="text-[10px] font-black uppercase tracking-[0.28em] text-[#86efac] sm:text-[11px] sm:tracking-[0.4em]">{{ $t("about.quality.label") }}</p>
            </div>

            <h3 class="mt-5 text-3xl font-black leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
              {{ $t("about.quality.title_main") }}
              <span class="text-[#86efac]">{{ $t("about.quality.title_highlight") }}</span>
            </h3>

            <p class="mt-5 max-w-2xl text-base leading-relaxed text-[#d1d5db] sm:mt-6 sm:text-lg">
              {{ $t("about.quality.description") }}
            </p>

            <div class="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2 lg:mt-10">
              <article
                v-for="pillar in qualityPillars"
                :key="pillar.titleKey"
                class="rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-colors duration-300 hover:border-[#86efac]/30 hover:bg-white/[0.07] sm:p-5"
              >
                <div class="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#22c55e]/20 text-[#86efac] sm:mb-4 sm:h-10 sm:w-10">
                  <component :is="pillar.icon" class="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <h4 class="text-base font-bold text-white sm:text-lg">{{ $t(pillar.titleKey) }}</h4>
                <p class="mt-2 text-sm leading-relaxed text-[#cbd5e1]">{{ $t(pillar.descriptionKey) }}</p>
              </article>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:rounded-[30px] sm:p-6 md:p-8">
              <p class="text-[10px] font-black uppercase tracking-[0.28em] text-[#86efac] sm:text-[11px] sm:tracking-[0.35em]">{{ $t("about.quality.certificates_label") }}</p>
              <div class="mt-3 flex flex-wrap gap-2 sm:mt-4">
                <span
                  v-for="cert in aboutData.certifications"
                  :key="cert"
                  class="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white"
                >
                  {{ cert }}
                </span>
              </div>

              <div class="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                <article
                  v-for="(step, index) in qualityFlow"
                  :key="step.titleKey"
                  class="flex gap-3 rounded-2xl border border-white/10 bg-[#0f1d13]/60 p-3 sm:gap-4 sm:p-4"
                >
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-black text-[#86efac] sm:h-9 sm:w-9 sm:text-sm">
                    {{ index + 1 }}
                  </div>
                  <div>
                    <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-white sm:text-sm sm:tracking-[0.16em]">{{ $t(step.titleKey) }}</p>
                    <p class="mt-1 text-sm leading-relaxed text-[#cbd5e1]">{{ $t(step.descriptionKey) }}</p>
                  </div>
                </article>
              </div>

              <div class="mt-6 rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/10 p-4 sm:mt-8">
                <p class="text-[10px] font-black uppercase tracking-[0.22em] text-[#86efac] sm:tracking-[0.26em]">{{ $t("about.quality.result_label") }}</p>
                <p class="mt-2 text-sm leading-relaxed text-white sm:text-base">
                  {{ $t("about.quality.result_text") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Clock as ClockIcon,
  Leaf as LeafIcon,
  Scale as ScaleIcon,
  Truck as TruckIcon,
} from "lucide-vue-next";

const aboutData = {
  main: {
    countries: [
      "about.export.countries.germany",
      "about.export.countries.france",
      "about.export.countries.netherlands",
      "about.export.countries.italy",
      "about.export.countries.czechia",
      "about.export.countries.usa",
    ],
  },
  certifications: ["HACCP", "ISO 9001", "EU Organic", "USDA Organic"],
};

const quickStats = [
  { value: "2015", labelKey: "about.stats.founded" },
  { value: "200+", labelKey: "about.stats.employees" },
  { valueKey: "about.stats.area_value", labelKey: "about.stats.production" },
];

const exportFeatures = [
  {
    titleKey: "about.export.features.natural_origin.title",
    descriptionKey: "about.export.features.natural_origin.description",
    icon: LeafIcon,
  },
  {
    titleKey: "about.export.features.stable_timing.title",
    descriptionKey: "about.export.features.stable_timing.description",
    icon: TruckIcon,
  },
  {
    titleKey: "about.export.features.weight_control.title",
    descriptionKey: "about.export.features.weight_control.description",
    icon: ScaleIcon,
  },
];

const qualityPillars = [
  {
    titleKey: "about.quality.pillars.seasonal_raw.title",
    descriptionKey: "about.quality.pillars.seasonal_raw.description",
    icon: LeafIcon,
  },
  {
    titleKey: "about.quality.pillars.gentle_processing.title",
    descriptionKey: "about.quality.pillars.gentle_processing.description",
    icon: ClockIcon,
  },
  {
    titleKey: "about.quality.pillars.lab_check.title",
    descriptionKey: "about.quality.pillars.lab_check.description",
    icon: ScaleIcon,
  },
  {
    titleKey: "about.quality.pillars.reliable_logistics.title",
    descriptionKey: "about.quality.pillars.reliable_logistics.description",
    icon: TruckIcon,
  },
];

const qualityFlow = [
  {
    titleKey: "about.quality.flow.raw_selection.title",
    descriptionKey: "about.quality.flow.raw_selection.description",
  },
  {
    titleKey: "about.quality.flow.production.title",
    descriptionKey: "about.quality.flow.production.description",
  },
  {
    titleKey: "about.quality.flow.final_control.title",
    descriptionKey: "about.quality.flow.final_control.description",
  },
];
</script>

<style scoped>
.soft-grid {
  background-image:
    linear-gradient(rgba(17, 24, 40, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17, 24, 40, 0.06) 1px, transparent 1px);
  background-size: 46px 46px;
}

.quality-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 42px 42px;
}

.float-slow {
  animation: float-soft 7s ease-in-out infinite;
}

.float-delay {
  animation: float-soft 8s ease-in-out infinite;
  animation-delay: 1.5s;
}

@keyframes float-soft {
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
h4,
p,
span {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

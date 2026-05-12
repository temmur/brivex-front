<template>
  <div class="inline-flex items-center gap-1 rounded-2xl border border-[#cfe4d4] bg-white/85 p-1 shadow-[0_10px_28px_-16px_rgba(16,40,27,0.45)] backdrop-blur-md">
    <button
      v-for="mode in modes"
      :key="mode.value"
      type="button"
      :aria-label="t(mode.labelKey)"
      :title="t(mode.labelKey)"
      class="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300"
      :class="currentMode === mode.value ? mode.activeClass : 'text-[#5a6f63] hover:bg-[#eef8f1] hover:text-[#173c27]'"
      @click="setMode(mode.value)"
    >
      <component :is="mode.icon" class="h-[17px] w-[17px]" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Leaf, SunMedium } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import { applyThemeMode, getStoredThemeMode, type ThemeMode } from '@/utils/themeMode'

const { t } = useI18n()

const modes = [
  {
    value: 'white' as ThemeMode,
    labelKey: 'mode.white',
    icon: SunMedium,
    activeClass: 'bg-gradient-to-br from-[#f8c93c] to-[#f59e0b] text-white shadow-[0_10px_24px_-12px_rgba(245,158,11,0.9)]',
  },
  {
    value: 'green' as ThemeMode,
    labelKey: 'mode.green',
    icon: Leaf,
    activeClass: 'bg-gradient-to-br from-[#19be64] to-[#089f4b] text-white shadow-[0_10px_24px_-12px_rgba(8,159,75,0.9)]',
  },
]

const currentMode = ref<ThemeMode>(getStoredThemeMode())

const setMode = (mode: ThemeMode) => {
  if (currentMode.value === mode) {
    return
  }

  currentMode.value = mode
  applyThemeMode(mode)
}
</script>

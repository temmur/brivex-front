<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="">
      <CHeader />
    </header>

    <!-- Main content -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="">
      <CFooter />
    </footer>
  </div>
</template>
<script setup lang="ts">
import CHeader from '@/components/layouts/CHeader.vue';
import CFooter from '@/components/layouts/CFooter.vue';
</script>
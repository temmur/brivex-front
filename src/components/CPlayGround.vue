<template>
    this is play ground component
    <br>
    <li v-for="(p, id) in expensiveProducts" :key="id">
        {{ p.name }}
</li>
<button :class="buttonClass">Click me</button>
</template>
<script setup>
import { ref, computed } from "vue"
const firstName = ref('')
const lastName = ref('')

const fullName = computed(()=> {
    return firstName + " " + lastName 
})
const products = ref([
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
])

const expensiveProducts = computed(() => {
  return products.value.filter(p => p.price > 400)
})

const isActive = ref(false)

const buttonClass = computed(() => {
  return isActive.value ? "bg-green-500" : "bg-gray-400 disabled"
})
</script>
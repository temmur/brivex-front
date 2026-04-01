<template>
<section class="relative overflow-hidden bg-[#f8fafc] py-32">

<!-- background glow -->
<div class="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-200/30 blur-[140px]"></div>
<div class="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-200/30 blur-[140px]"></div>

<div class="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

<div class="grid items-center gap-20 lg:grid-cols-2">

<!-- LEFT CONTENT -->
<div>

<div class="mb-6 inline-flex items-center gap-3 rounded-full bg-green-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
<span class="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
Основана в 2015 году
</div>

<h2 class="mb-10 text-5xl font-black leading-tight text-gray-900 md:text-6xl">
Sunny Fruit
<span class="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
Production
</span>
</h2>

<p class="text-lg text-gray-600 leading-relaxed mb-6">
Мы являемся одним из ведущих производителей и экспортеров сухофруктов 
в Узбекистане. Наша производственная база занимает более <b>1 гектара</b> 
и оснащена современным оборудованием.
</p>

<p class="text-lg text-gray-900 font-medium leading-relaxed">
Сегодня более <b>200 специалистов</b> обеспечивают полный цикл производства.
</p>

<!-- STATS -->
<div class="mt-12 grid grid-cols-3 gap-8">

<div class="flex flex-col">
<span class="text-4xl font-black text-green-600">2015</span>
<span class="text-xs uppercase tracking-widest text-gray-400">Основание</span>
</div>

<div class="flex flex-col">
<span class="text-4xl font-black text-green-600">200+</span>
<span class="text-xs uppercase tracking-widest text-gray-400">Сотрудников</span>
</div>

<div class="flex flex-col">
<span class="text-4xl font-black text-green-600">1 га</span>
<span class="text-xs uppercase tracking-widest text-gray-400">Производство</span>
</div>

</div>

</div>


<!-- VIDEO / IMAGE -->
<div class="relative">

<div class="group relative overflow-hidden rounded-[40px] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.25)]">

<img
src="/images/fruits/1.jpg"
class="h-[520px] w-full object-cover transition duration-[1200ms] group-hover:scale-110"
/>

<!-- glass overlay -->
<div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

<!-- play button -->
<div class="absolute inset-0 flex items-center justify-center">

<button class="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-2xl transition hover:scale-110">

<svg xmlns="http://www.w3.org/2000/svg"
fill="currentColor"
viewBox="0 0 24 24"
class="h-10 w-10 text-green-600 translate-x-[2px]">
<path d="M8 5v14l11-7z"/>
</svg>

</button>

</div>

</div>

<!-- floating badge -->
<div class="absolute -bottom-10 -left-10 rounded-3xl bg-white px-8 py-6 shadow-2xl">

<p class="text-3xl font-black text-green-600">100%</p>
<p class="text-xs uppercase tracking-widest text-gray-400">
Natural Products
</p>

</div>

</div>

</div>

</div>


<!-- EXPORT SECTION -->
<div class="mt-32 bg-white py-24">

<div class="container mx-auto max-w-7xl px-6">

<div class="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">

<div class="max-w-2xl">

<h3 class="text-4xl font-black text-gray-900 mb-6">
Глобальный экспорт
</h3>

<p class="text-lg text-gray-500">
Наши клиенты находятся в крупнейших странах мира.
Это подтверждает доверие к качеству нашей продукции.
</p>

</div>

<div class="flex flex-wrap gap-3">

<span
v-for="country in aboutData.main.countries"
:key="country"
class="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold text-gray-700 shadow-sm transition hover:border-green-300 hover:text-green-600"
>
{{ country }}
</span>

</div>

</div>


<!-- FEATURES -->
  <div class="grid gap-8 md:grid-cols-3">
    
    <div class="group relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-10 transition-all duration-500 hover:border-[#00A740]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,167,64,0.1)]">
      <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00A740]/5 transition-transform duration-700 group-hover:scale-[3]"></div>
      
      <div class="relative z-10">
        <div class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A740]/10 text-[#00A740] transition-colors duration-500 group-hover:bg-[#00A740] group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>

        <h4 class="mb-4 text-xl font-black text-[#111828]">Органическое сырье</h4>
        
        <p class="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-700">
          Мы используем только натуральные продукты из органического земледелия без химической обработки.
        </p>

        <div class="mt-6 h-1 w-0 rounded-full bg-[#00A740] transition-all duration-500 group-hover:w-12"></div>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-10 transition-all duration-500 hover:border-[#00A740]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,167,64,0.1)]">
      <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00A740]/5 transition-transform duration-700 group-hover:scale-[3]"></div>
      
      <div class="relative z-10">
        <div class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A740]/10 text-[#00A740] transition-colors duration-500 group-hover:bg-[#00A740] group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>

        <h4 class="mb-4 text-xl font-black text-[#111828]">Мировой экспорт</h4>
        
        <p class="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-700">
          Поставки в страны ЕС, США и Израиль с полным соблюдением международных стандартов.
        </p>

        <div class="mt-6 h-1 w-0 rounded-full bg-[#00A740] transition-all duration-500 group-hover:w-12"></div>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-10 transition-all duration-500 hover:border-[#00A740]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,167,64,0.1)]">
      <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00A740]/5 transition-transform duration-700 group-hover:scale-[3]"></div>
      
      <div class="relative z-10">
        <div class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A740]/10 text-[#00A740] transition-colors duration-500 group-hover:bg-[#00A740] group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20V9l4-2 6.7 3.3L15 8l7 3.5V20h-2v-4l-4-2-4 2v4H2Z"/><path d="M17 18h1"/><path d="M7 18h1"/><path d="M12 18h1"/></svg>
        </div>

        <h4 class="mb-4 text-xl font-black text-[#111828]">База переработки</h4>
        
        <p class="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-700">
          Собственная производственная база площадью более 1 гектара в столице Узбекистана.
        </p>

        <div class="mt-6 h-1 w-0 rounded-full bg-[#00A740] transition-all duration-500 group-hover:w-12"></div>
      </div>
    </div>

  </div>

</div>

</div>


<!-- QUALITY SECTION -->
<section class="relative w-full overflow-hidden bg-white py-24 lg:py-10">
    <div class="container mx-auto max-w-7xl px-6">
      
      <div class="relative overflow-hidden rounded-[60px] bg-[#111828] p-10 md:p-20 lg:p-24 shadow-2xl">
        
        <div class="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#00A740]/10 blur-[120px]"></div>
        <div class="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#00A740]/5 blur-[100px]"></div>

        <div class="relative z-10 grid gap-20 lg:grid-cols-12 lg:items-center">
          
          <div class="lg:col-span-7">
            <div class="mb-8 flex items-center gap-4">
              <div class="h-px w-12 bg-[#00A740]"></div>
              <span class="text-[11px] font-black uppercase tracking-[0.4em] text-[#00A740]">
                Quality & Standards
              </span>
            </div>

            <h3 class="mb-10 text-5xl font-black leading-tight text-white md:text-7xl">
              Качество и <br/>
              <span class="text-[#00A740]">технологии</span>
            </h3>

            <div class="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Производство компании <span class="text-white font-bold">Sunny Fruit Production</span> сертифицировано по международным стандартам <span class="border-b border-[#00A740]/40 text-white">HACCP и ISO 9001</span>. 
                Мы гарантируем полную прослеживаемость сырья от поля до конечного потребителя.
              </p>
            </div>

            <div class="mt-12 flex flex-wrap gap-12 border-t border-white/10 pt-12">
              <div class="group">
                <span class="text-5xl font-black text-white transition-colors group-hover:text-[#00A740]">100%</span>
                <p class="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A740]">
                  Без консервантов
                </p>
              </div>
              <div class="group">
                <span class="text-5xl font-black text-white transition-colors group-hover:text-[#00A740]">Pure</span>
                <p class="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A740]">
                  Натуральный вкус
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative">
              <div class="absolute -inset-1 rounded-[42px] bg-gradient-to-br from-[#00A740]/20 to-transparent blur-md"></div>
              
              <div class="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#00A740]/30">
                
                <div class="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A740] text-white shadow-[0_0_20px_rgba(0,167,64,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>

                <h4 class="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#00A740]">
                  Наша цель
                </h4>
                
                <p class="text-2xl font-medium leading-relaxed text-white">
                  «Стать <span class="text-[#00A740] italic">эталонным поставщиком</span> на мировом рынке и развивать национальный бренд 
                  <span class="font-black text-white">Made in Uzbekistan</span>».
                </p>

                <div class="mt-10 flex items-center gap-2 opacity-50">
                  <div class="h-1.5 w-1.5 rounded-full bg-[#00A740]"></div>
                  <span class="text-[9px] font-bold uppercase tracking-widest text-white">Certified Organic Global Export</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</section>
</template>

<script setup lang="ts">
const aboutData = {
  main: {
    year: "2015",
    employees: "200+",
    area: "1 га",
    countries: ["Германия", "Франция", "Нидерланды", "Италия", "Чехия", "США"]
  },
  certifications: ["HACCP", "ISO 9001", "EU Organic", "USDA Organic"]
};
</script>
<style scoped>

.feature-card{
padding:40px;
border-radius:30px;
background:white;
box-shadow:0 20px 50px rgba(0,0,0,0.08);
transition:.4s;
}

.feature-card:hover{
transform:translateY(-8px);
box-shadow:0 30px 70px rgba(0,0,0,0.15);
}

.feature-card h4{
font-weight:800;
font-size:20px;
margin-bottom:12px;
}

.feature-card p{
color:#6b7280;
font-size:14px;
line-height:1.6;
}

.icon{
width:50px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
background:#dcfce7;
border-radius:14px;
margin-bottom:16px;
font-weight:900;
color:#16a34a;
}
h3, p, span {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<template>
  <!-- Hero section -->
  <SectionHero />

  <hr />

  <SectionAdvantages />

  <hr />

  <!-- Features -->
  <SectionFeatures />

  <hr />

  <!-- Tech platform -->
  <SectionPlatform />

  <hr />

  <!-- Contact form -->
  <SectionForm />

  <hr />

  <!-- Footer -->
  <SectionFooter />
</template>

<script setup lang="ts">
useHead({
  title: "KISS Enterprise Solutions",
  meta: [
    { name: "description", content: "Разработка корпоративных веб-систем" },
  ],
});
</script>

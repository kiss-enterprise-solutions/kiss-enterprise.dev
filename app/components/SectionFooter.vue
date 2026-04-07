<script setup lang="ts"></script>

<template>
  <footer id="footer">
    <div class="container">
      <div class="py-3 my-4">
        <p class="text-center text-body-secondary">
          © {{ new Date().getFullYear() }} {{ $t("company.name") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>

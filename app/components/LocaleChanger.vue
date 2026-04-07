<script setup lang="ts"></script>

<template>
  <div class="locale-changer position-fixed top-0 end-0 p-2">
    🌐 {{ $t("locale.title") }}:
    <select v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss"></style>

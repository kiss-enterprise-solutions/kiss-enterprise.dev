<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, availableLocales } = useI18n();

onMounted(() => {
  for (const browserLocale of navigator.languages) {
    const exactMatch = availableLocales.find(
      (locale) => locale === browserLocale,
    );

    if (exactMatch) {
      locale.value = exactMatch;
      return;
    }

    const language = browserLocale.split("-")[0];

    const languageMatch = availableLocales.find(
      (locale) => locale.split("-")[0] === language,
    );

    if (languageMatch) {
      locale.value = languageMatch;
      return;
    }
  }
});
</script>

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

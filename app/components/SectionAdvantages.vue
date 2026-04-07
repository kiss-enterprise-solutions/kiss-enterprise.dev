<template>
  <section id="advantages">
    <div class="container px-4 py-5">
      <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div class="col d-flex flex-column align-items-start gap-2">
          <h2 class="fw-bold text-body-emphasis">
            {{ $t("advantages.whyUs.title") }}
          </h2>
          <p class="text-body-secondary">
            {{ $t("advantages.whyUs.subtitle") }}
          </p>

          {{ $t("advantages.whyUs.listTitle") }}
          <ul>
            <li>{{ $t("advantages.whyUs.list[0]") }}</li>
            <li>{{ $t("advantages.whyUs.list[1]") }}</li>
            <li>{{ $t("advantages.whyUs.list[2]") }}</li>
          </ul>
        </div>

        <div class="col d-flex flex-column align-items-start gap-2">
          <h2 class="fw-bold text-body-emphasis">
            {{ $t("advantages.trust.title") }}
          </h2>
          <p class="text-body-secondary">
            {{ $t("advantages.trust.subtitle") }}
          </p>

          <ul>
            <li>{{ $t("advantages.trust.list[0]") }}</li>
            <li>{{ $t("advantages.trust.list[1]") }}</li>
            <li>{{ $t("advantages.trust.list[2]") }}</li>
            <li>{{ $t("advantages.trust.list[3]") }}</li>
            <li>{{ $t("advantages.trust.list[4]") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>

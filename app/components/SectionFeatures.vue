<script setup lang="ts"></script>

<template>
  <section id="features">
    <div class="container px-4 py-5">
      <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div class="col d-flex flex-column align-items-start gap-2">
          <h2 class="fw-bold text-body-emphasis">{{ $t("features.title") }}</h2>
          <p class="text-body-secondary">
            {{ $t("features.subtitle") }}
          </p>
        </div>
        <div class="col">
          <div class="row row-cols-1 row-cols-sm-2 g-4">
            <div class="col d-flex flex-column gap-2">
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                {{ $t("features.list[0].title") }}
              </h4>
              <p class="text-body-secondary">
                {{ $t("features.list[0].subtitle") }}
              </p>
            </div>
            <div class="col d-flex flex-column gap-2">
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                {{ $t("features.list[1].title") }}
              </h4>
              <p class="text-body-secondary">
                {{ $t("features.list[1].subtitle") }}
              </p>
            </div>
            <div class="col d-flex flex-column gap-2">
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                {{ $t("features.list[2].title") }}
              </h4>
              <p class="text-body-secondary">
                {{ $t("features.list[2].subtitle") }}
              </p>
            </div>
            <div class="col d-flex flex-column gap-2">
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                {{ $t("features.list[3].title") }}
              </h4>
              <p class="text-body-secondary">
                {{ $t("features.list[3].subtitle") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>

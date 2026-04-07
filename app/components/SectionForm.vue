<script setup lang="ts"></script>

<template>
  <section id="contact">
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            {{ $t("form.title") }}
          </h1>
          <p class="col-lg-10 fs-4">
            {{ $t("form.subtitle") }}
          </p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfYqFjA-R1jDF4kn8Qj7GwmrKUZRpjK1nJWBIOtpCFelVgpXA/viewform?embedded=true"
            width="100%"
            height="500"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Загрузка…
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>

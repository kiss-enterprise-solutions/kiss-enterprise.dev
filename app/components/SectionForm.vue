<script setup lang="ts"></script>

<template>
  <section id="contact">
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Оставьте заявку на консультацию
          </h1>
          <p class="col-lg-10 fs-4">
            Мы свяжемся с вами, чтобы обсудить все интересующие вас вопросы и
            подобрать решения, подходящие именно вашему бизнесу
          </p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="clientName"
                placeholder="Иванов Иван Иванович"
              />
              <label for="clientName">Ваше имя</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="clientEmail"
                placeholder="johndoe@example.com"
              />
              <label for="clientEmail">Ваша почта</label>
            </div>
            <div class="form-floating mb-3">
              <textarea
                name="task"
                id="clientTask"
                cols="30"
                rows="10"
                class="form-control"
              ></textarea>
              <label for="clientTask"> Опишите свою задачу... </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Записаться на консультацию
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>

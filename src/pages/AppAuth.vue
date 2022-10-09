<template>
  <div class="wrapper">
    <div class="wrapper__logo">
      <img src="@/assets/default-small.svg" alt="logo">
    </div>
    <div class="auth">
      <h2 class="auth__title">Sign in to Metronic</h2>
      <p class="auth__subtitle">New Here? <a class="link" href="#">Create an Account</a></p>
      <div class="auth__lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, ipsum.
      </div>
      <app-form></app-form>
    </div>
  </div>
</template>

<script>
import AppBtn from "@/components/UI/AppBtn";
import AppForm from "@/components/UI/AppForm";
export default {
  components: {AppForm, AppBtn}
}
</script>

<style lang="scss">
.wrapper {
  font-size: 14px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F5F8FA;

  &__logo {

    margin-bottom: 50px;
    display: flex;
    align-items: center;

    & img {
      width: 160px;
      height: fit-content;
      margin-right: 4px;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 2rem;
  }
}


.auth {
  font-size: 1rem;
  max-width: 70%;
  background-color: #fff;
  padding: 45px;
  border-radius: 10px;
  box-shadow: 0 .1rem 1rem .25rem #0000000d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  &__title {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }

  &__lorem {
    text-align: left;
    padding: 24px;
    color: blueviolet;
    font-weight: 500;
    background-color: rgba(138, 43, 226, 0.2);
    border-radius: 10px;
    font-size: 0.9em;
    margin-bottom: 30px;
  }
  &__subtitle {
    font-size: 1em;
    font-weight: 600;
    text-align: center;
    color: rgba(128, 128, 128, 0.7);
    margin-bottom: 30px;

  }

}
.link {
  color: #67e5e5;
  font-weight: 600;

}
@media screen and (max-width: 769px) {

  .wrapper {
    &__logo{
      margin-bottom: 30px;
    }
  }
  .auth {
    &__title {
      font-size: 1.55rem;
    }
    &__subtitle {
      font-size: 0.95rem;
    }
    padding: 30px;
    &__lorem {
      padding: 20px;
      font-size: 0.85rem;
    }
  }
}
@media screen and (max-width: 426px) {
  .wrapper {
    &__logo {
      margin-top: 20px;
    }
  }
  .auth {
    max-width: 85%;
    &__title {
      font-size: 1.4rem;
    }
    &__subtitle {
      font-size: 0.85rem;
      margin-bottom: 20px;
    }
  }
}

</style>
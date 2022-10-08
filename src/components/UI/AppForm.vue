<template>
  <form action="#" class="form">
    <label for="email">Email</label>
    <input id="email" type="email" name="email">
    <label for="email">Password <a class="link" href="#">Forgot password?</a></label>
    <input id="password" type="password" name="password">
    <app-btn class="form__btn" name="Continue"></app-btn>
  </form>
</template>

<script>
import AppBtn from "@/components/UI/AppBtn";
export default {
  components: {AppBtn}
}
</script>

<style scoped lang="scss">
.form {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  & label {
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 8px;
    & a {
      margin-left: 5px;
    }
  }
  &__btn {
    margin-top: 16px;
    font-size: 0.9rem;
  }
  & input {
    background-color: rgba(128, 128, 128, 0.1);
    border: none;
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1.5rem;

    &:focus {
      outline: none;
    }
  }
}
</style>
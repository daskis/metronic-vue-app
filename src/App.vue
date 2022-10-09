<template>
  <nav class="nav">
    <router-link to="auth">Auth Page</router-link>
    <router-link to="main">Main</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
import AppAuth from "@/pages/AppAuth";
export default {
  components: {AppAuth}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Inter", sans-serif;
  text-transform: none;
  text-decoration: none;

}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: rgba(101, 57, 196, 0.5);
  & > * {
    margin-right: 20px;
    font-size: 20px;
  }
}
</style>

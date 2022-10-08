<template>
  <button class="btn">
    {{name}}
  </button>
</template>

<script>
export default {
  props: {
    name: String,
  }
}
</script>

<style scoped lang="scss">
.btn {
  padding: 15px;
  color: white;
  border-radius: 10px;
  background-color: #7239ea;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  &:hover {
    background-color: #5828ea;
  }
}

</style>
<template>
  <button>
    <slot>Leon</slot>
  </button>
</template>

<script>

</script>

<style scoped lagn="scss">
  button {
    padding: 10px 20px;
    &:hover {
      background-color: orange;
      transform: scale(1.2);
    }
  }
</style>
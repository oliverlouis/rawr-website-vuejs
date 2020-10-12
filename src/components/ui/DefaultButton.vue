<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  padding: 1rem;
  background: none;
  cursor: pointer;
  font-size: 16px;
  background-color: #cfe436;
  border: none;
  padding: 1.3rem 1.5rem;
  transition: all 0.2s;
}

button:hover {
  background-color: #bdcf31;
}

button:focus {
  outline: none;
}
</style>
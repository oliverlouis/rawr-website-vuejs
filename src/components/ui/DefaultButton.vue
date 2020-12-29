<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  padding: 1rem;
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  border: none;
  padding: 1.3rem 1.5rem;
  transition: all 0.2s;
  color: #233547;

  &:hover {
    background-color: #bdcf31;
  }

  &:focus {
    outline: none;
  }
}
</style>
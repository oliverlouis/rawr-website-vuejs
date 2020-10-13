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
  background: none;
  cursor: pointer;
  font-size: 16px;
  background-color: #cfe436;
  border: none;
  padding: 2.5rem 3rem;
  transition: all 0.2s;
  color: #233547;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    background-color: #bdcf31;
  }

  &:focus {
    outline: none;
  }
}
</style>
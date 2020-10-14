<template>
  <div class="menu-item">
    <div class="menu-tem__image">
      <img src="image" alt="Menu Item" />
    </div>
    <h3>{{ name }}</h3>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "MenuItem",

  props: ["name", "price", "image"],
};
</script>

<style lang="scss" scoped>
.menu-item {
  &__image {
    width: 300px;
    height: 400px;

    img {
      width: 100%;
    }
  }

  h3,
  p {
    color: #233547;
  }

  p {
    font-size: 18px;
  }
}
</style>
<template>
  <div class="menu-item">
    <div class="menu-item__image">
      <img :src="image" alt="Menu Item" />
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
  text-align: left;
  &__image {
    width: 300px;
    height: 400px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  h3,
  p {
    color: #233547;
    font-size: 20px;
    font-weight: 500;
  }

  h3 {
    font-size: 35px;
  }

  p {
    font-size: 18px;
  }
}
</style>
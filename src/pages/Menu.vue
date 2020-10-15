<template>
  <div class="menu">
    <h1>Menu Items</h1>
    <ul class="menu__list">
      <MenuItem
        v-for="item in foodItems"
        :key="item.productId"
        :name="item.name"
        :price="item.price"
        :image="item.image"
      />
    </ul>
  </div>
</template>

<script>
import MenuItem from "../components/menu/MenuItem";

export default {
  name: "Menu",

  components: {
    MenuItem,
  },

  computed: {
    foodItems() {
      return this.$store.getters["food/getFoodItems"];
    },
  },

  created() {
    console.log(this.foodItems);
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;

  h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
  }
}
</style>
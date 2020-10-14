<template>
  <div class="menu">
    <h1>Menu Items</h1>
    <ul class="menu__list">
      <MenuItem
        v-for="item in foodItems"
        :key="item.productId"
        :name="item.name"
        :price="item.price"
        :image="item.src"
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

  &__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    //  &-item {
    //    width: 250px;
    //    border: 1px solid black;
    //    padding: 3rem;
    //    font-size: 20px;
    //  }
  }
}
</style>
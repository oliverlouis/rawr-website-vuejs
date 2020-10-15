<template>
  <div class="menu">
    <div class="menu__category">
      <h1 class="menu__category-food" @click="toggleShowFood">Food</h1>
      <h1 class="menu__category-beverage" @click="toggleShowBeverages">
        Beverages
      </h1>
    </div>
    <ul class="menu__list" v-if="showFood">
      <MenuItem
        v-for="item in foodItems"
        :key="item.productId"
        :name="item.name"
        :price="item.price"
        :image="item.image"
      />
    </ul>
    <ul class="menu__list" v-if="showBeverages">
      <MenuItem
        v-for="item in beverageItems"
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

  data() {
    return {
      showFood: true,
      showBeverages: false,
    };
  },

  methods: {
    toggleShowFood() {
      this.showBeverages = false;
      this.showFood = true;
    },

    toggleShowBeverages() {
      this.showFood = false;
      this.showBeverages = true;
    },
  },

  computed: {
    foodItems() {
      return this.$store.getters["food/getFoodItems"];
    },

    beverageItems() {
      return this.$store.getters["beverages/getBeverageItems"];
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

  &__category {
    margin: 0 auto;
    width: 30%;
    display: flex;
    justify-content: space-between;

    &-food,
    &-beverage {
      cursor: pointer;
    }
  }

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
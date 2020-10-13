<template>
  <div class="welcome">
    <div class="welcome__text">
      <h1>It's not just Food. It's an Experience!</h1>
      <p>Clean. Healthy. Eating. 100% Local Cuisine.</p>
      <BigButtonDefault>Get Started</BigButtonDefault>
      <button class="welcome__location">
        Get Location <i class="fas fa-map-marker-alt"></i>
      </button>
    </div>
    <div class="welcome__image">
      <img src="../assets/lemons.jpg" alt="Lemons" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.welcome {
  margin-top: 80px;
  /* height: 200px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;

  &__text {
    width: 48%;
    font-size: 40px;
    text-align: left;

    p {
      font-size: 18px;
      font-weight: 700;
      margin-top: 30px;
      color: #607392;
      margin-bottom: 30px;
    }
  }

  &__image {
    width: 48%;
    align-self: baseline;

    img {
      width: 100%;
    }
  }

  &__location {
    padding: 1rem;
    background: none;
    cursor: pointer;
    font-size: 18px;
    background-color: rgb(204, 204, 204);
    border: none;
    padding: 2.5rem 3rem;
    transition: all 0.2s;
    color: #233547;
    margin-left: 30px;
    font-weight: 700;

    &:hover {
      background-color: rgb(182, 182, 182);
    }

    &:focus {
      outline: none;
    }

    .fas {
      margin-left: 20px;
    }
  }
}
</style>
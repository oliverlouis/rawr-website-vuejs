<template>
  <div class="welcome">
    <div class="welcome__text">
      <h1>It's not just Food. It's an Experience</h1>
    </div>
    <div class="welcome__image">
      <img src="../assets/lemons.jpg" alt="Lemons" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome {
  margin-top: 80px;
  /* height: 200px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.welcome__text {
  width: 45%;
  font-size: 30px;
}

.welcome__image {
  width: 45%;
  align-self: baseline;
}

.welcome__image img {
  width: 100%;
}
</style>
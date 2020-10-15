<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <ul>
      <router-link to="/" class="nav__link">Home</router-link>
      <router-link to="/menu" class="nav__link">Menu</router-link>
      <router-link to="/contact" class="nav__link">Contact</router-link>
      <router-link to="/about" class="nav__link">About Us</router-link>
    </ul>
    <div class="auth">
      <button class="btn login">Log in</button>
      <DefaultButton>Sign Up</DefaultButton>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",

  // data() {
  //   return {

  //   }
  // }
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding: 3.5rem 0rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
  font-weight: 500;
  font-size: 18px;
}
ul {
  width: 40%;
  display: flex;
  justify-content: space-between;
  justify-self: center;
}

.nav__link {
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  color: rgb(22, 22, 22);
  transition: all 0.2s;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  color: #233547;

  &:hover {
    border-bottom: 2px solid #b4c635;
  }

  &:active {
    border-bottom: 2px solid #b4c635;
  }
}

.logo {
  margin-right: 50px;

  img {
    width: 100px;
  }
}

.btn {
  padding: 1rem;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: #233547;

  &:focus {
    outline: none;
  }
}

.login {
  margin-right: 1.5rem;
  padding: 1.3rem 1.5rem;
  transition: all 0.2s;
  border: none;

  &:hover {
    background-color: #cfe436;
  }
}
</style>
<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <ul>
      <li>Home</li>
      <li>Menu</li>
      <li>About Us</li>
      <li>Contact</li>
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
};
</script>

<style scoped>
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
  width: 30%;
  display: flex;
  justify-content: space-between;
  justify-self: center;
}
li {
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  color: rgb(22, 22, 22);
  transition: all 0.2s;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}
li:hover {
  border-bottom: 2px solid #b4c635;
}

.logo {
  margin-right: 50px;
}
.logo img {
  width: 100px;
}
.btn {
  padding: 1rem;
  background: none;
  cursor: pointer;
  font-size: 16px;
}

.btn:focus {
  outline: none;
}

.login {
  margin-right: 1.5rem;
  padding: 1.3rem 1.5rem;
  transition: all 0.2s;
  border: none;
}
.login:hover {
  background-color: #cfe436;
}
</style>
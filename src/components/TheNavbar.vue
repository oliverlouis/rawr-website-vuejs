<template>
    <nav class="navbar">
        <div class="logo">
            <img alt="Logo" src="../assets/logo.png"/>
        </div>
        <ul>
            <router-link class="nav__link" to="/">Home</router-link>
            <router-link class="nav__link" to="/menu">Menu</router-link>
            <router-link class="nav__link" to="/contact">Contact</router-link>
            <router-link class="nav__link" to="/about">About Us</router-link>
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

  watch: {

  }

};
</script>

<style lang="scss" scoped>
    nav {
        width: 100%;
        padding: 3.5rem 0;
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
        position: relative;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #b4c635;
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;


        }

        &:hover::before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
    }

    .router-link-exact-active {

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
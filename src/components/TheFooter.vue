<template>
  <div class="footer">
    <div class="footer__logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>

    <div class="footer__contact">
      <h4>Contact Us</h4>
      <p>Baywalk Mall</p>
      <p>Tel:(758)451-7297</p>
      <p>Email: rawrslu@gmail.com</p>
    </div>

    <form class="footer__form">
      <label for="subscribe">Join our mailing list!</label>
      <input
        id="subscribe"
        type="email"
        placeholder="Enter your email address"
      />
      <DefaultButton>Subscribe</DefaultButton>
    </form>

    <div class="footer__socials">
      <a href="https://www.instagram.com/rawr.slu"
        ><i class="fab fa-instagram fa-2x"></i
      ></a>
      <a href="https://www.facebook.com/rawr.slu/"
        ><i class="fab fa-facebook-f fa-2x"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(228, 228, 228);
  padding: 6rem 5rem;
  font-size: 18px;

  &__logo {
    width: 100px;

    img {
      width: 100%;
    }
  }

  &__form {
    text-align: left;
    width: 200px;

    label {
      display: block;
      margin-bottom: 8px;
    }

    input {
      display: block;
      margin-bottom: 15px;
      padding: 2rem 0.5rem;
      border: none;
      border-bottom: 1px solid #233547;
      background: transparent;
      width: 100%;
      transition: all 0.2s;

      &:focus {
        outline: none;
        border-bottom: 1px solid #b4c635;
      }
    }
  }

  &__socials {
    a:not(:last-child) {
      margin-right: 25px;
    }
  }

  a,
  a:visited {
    text-decoration: none;
    color: #233547;
  }

  .fab {
  }
}
</style>
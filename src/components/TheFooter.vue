<template>
  <div class="footer">
    <div class="footer__logo">
      <img src="../assets/logo.png" alt="Logo" />
      <p>Copyright &copy; Rawr Cafe LC 2020</p>
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
      <a href="https://www.facebook.com/rawr.slu/"
        ><i class="fab fa-twitter fa-2x"></i
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
  background-color:transparent;
  padding: 5rem 5rem;
  font-size: 18px;

  &__logo {
    width: 100px;

    img {
      width: 100%;
    }

    p {
      font-size: 12px;
    }
  }

  &__contact {
    text-align: left;
  }

  &__form {
    text-align: left;
    width: 250px;
    margin-top: 30px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 700;
    }

    input {
      display: block;
      margin-bottom: 15px;
      padding: 1rem 0.5rem;
      border: none;
      border-bottom: 1px solid #233547;
      background: transparent;
      width: 85%;
      transition: all 0.2s;

      &:focus {
        outline: none;
        border-bottom: 1px solid #b4c635;
        width: 100%;
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
}
</style>
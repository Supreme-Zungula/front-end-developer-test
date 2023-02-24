<template>
  <div class="container">
    <h1>Login</h1>
    <form class="login-form">
      <label>Username:</label>
      <input
        type="text"
        name="username"
        v-model="username"
        @change="watchInput"
      />
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        v-bind="password"
        @change="watchInput"
      />
    </form>
    <div class="btn-container">
      <button @click="handleLogin" :disabled="!isFilledIn.details">
        Login
      </button>
    </div>
    <RouterLink to="/register">More options...</RouterLink>
  </div>
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      isFilledIn: {
        username: false,
        password: false,
        details: false,
      },
    };
  },
  methods: {
    handleLogin() {
      if (localStorage.getItem("username")) {
        let storedData = localStorage.getItem("username");
        const userData = JSON.parse(storedData);
      } else {
        alert("Username not registered. Click More options to register.");
      }
    },
    watchInput(event) {
      if (event.target.name === "username") {
        this.isFilledIn.username = true;
      }
      if (event.target.name === "password") {
        this.isFilledIn.password = true;
      }

      if (this.isFilledIn.username && this.isFilledIn.password) {
        this.isFilledIn.details = true;
      }
    },
  },
};
</script>
<style scoped>
.container h1 {
  display: inline;
  font-size: 25px;
}
.login-form {
  display: block;
  border: 1px solid white;
  border-radius: 15px;
  padding: 15px;
  max-width: 600px;
  margin: 20px auto;
}
.login-form label {
  display: inline-block;
  width: 100px;
}

.login-form input {
  padding: 5px;
  color: white;
  border: 2px white;
  background: grey;
  border-radius: 5px;
  width: 100%;
}

.btn-container {
  place-items: center;
}
.btn-container button {
  min-width: 100px;
  background-color: aqua;
  color: black;
  margin: 15px auto;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid grey;
}

.btn-container button:disabled {
  opacity: 0.5;
}
</style>

<template>
  <div class="container">
    <h1>Login</h1>
    <form class="login-form">
      <label>Username:</label>
      <input type="text" name="username" v-model="username" />
      <label for="password">Password:</label>
      <input type="password" name="password" v-bind="password" />
    </form>
    <div class="btn-container">
      <button @click="handleLogin">Login</button>
    </div>
    <RouterLink to="/register">More options...</RouterLink>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {},
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
</style>

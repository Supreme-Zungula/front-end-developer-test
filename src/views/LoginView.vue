<template>
  <div class="login-form">
    <h1>Login</h1>
    <form>
      <label>Username:</label>
      <input type="text" name="username" v-model="username" />
      <label for="password">Password:</label>
      <input type="password" name="password" v-bind="password" />
      <button @click="handleLogin">Login</button>
    </form>
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
    handleLogin() {
      localStorage.a;
    },
  },
};
</script>
<style scoped>
.login-form {
  display: block;
  max-width: 600px;
  margin: 20px auto;
}
.login-form label {
  display: inline-block;
  width: 100px;
}

.login-form input {
  border: 2px grey;
  border-radius: 5px;
  width: 100%;
}

.login-form button {
  background-color: aqua;
  color: black;
  margin: 5px auto;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid grey;
}
</style>

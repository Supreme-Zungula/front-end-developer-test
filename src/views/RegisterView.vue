<template>
  <div class="container">
    <h1>Register</h1>
    <form class="app-form">
      <label for="email">Email address</label>
      <input type="text" name="email" />
      <label for="username">Username</label>
      <input type="text" name="username" />
      <label for="password">Password</label>
      <input type="password" name="password" />
    </form>
    <div class="btn-container">
      <button class="danger">Cancel</button>
      <button class="default">Register ></button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.container h1 {
  display: inline;
  font-size: 25px;
}
.container h1 {
  display: inline;
  font-size: 25px;
}
.app-form {
  display: block;
  border: 1px solid white;
  border-radius: 15px;
  padding: 15px;
  max-width: 600px;
  margin: 20px auto;
}
.app-form label {
  display: inline-block;
  width: 100px;
}

.app-form input {
  padding: 5px;
  color: white;
  border: 2px white;
  background: grey;
  border-radius: 5px;
  width: 100%;
}

.btn-container button {
  font-size: large;
  min-width: 100px;
  color: white;
  margin: 15px 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid grey;
}
.btn-container button.danger {
  background-color: red;
}

.btn-container button.default {
  background-color: aqua;
}
.btn-container button:disabled {
  opacity: 0.5;
}
</style>

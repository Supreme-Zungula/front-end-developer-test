<template>
  <div class="container">
    <h1>Register</h1>
    <form class="app-form">
      <label for="email">Email address</label>
      <input
        type="text"
        name="email"
        v-model="userDetails.email"
        @change="watchInput"
      />
      <label for="username">Username</label>
      <input
        type="text"
        name="username"
        v-model="userDetails.username"
        @change="watchInput"
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        v-model="userDetails.password"
        @change="watchInput"
      />
    </form>
    <div class="btn-container">
      <button @click="handleCancel" class="danger">Cancel</button>
      <button
        @click="submitDetails"
        class="default"
        :disabled="!isFilledIn.details"
      >
        Register
      </button>
    </div>
    <p v-if="error.message">{{ error.message }}</p>
  </div>
</template>
<script>
import UserDetails from "@/classes/UserDetails";

export default {
  data() {
    return {
      userDetails: new UserDetails(),
      isFilledIn: {
        email: false,
        username: false,
        password: false,
        details: false,
      },
      error: {
        message: null,
      },
    };
  },
  methods: {
    submitDetails() {
      localStorage.clear();
      if (!localStorage.getItem(this.userDetails.username)) {
        localStorage.setItem(
          this.userDetails.username,
          JSON.stringify(this.userDetails)
        );
        console.log(localStorage);
      } else {
        this.error.message = "Username already taken.";
      }
    },
    handleCancel() {
      this.$router.push({ name: "Login" });
    },
    watchInput(event) {
      switch (event.target.name) {
        case "email":
          this.isFilledIn.email = true;
          break;
        case "username":
          this.isFilledIn.username = true;
          break;
        case "password":
          this.isFilledIn.password = true;
          break;
        default:
          break;
      }
      if (
        this.isFilledIn.email &&
        this.isFilledIn.username &&
        this.isFilledIn.password
      ) {
        this.isFilledIn.details = true;
      }
    },
  },
};
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

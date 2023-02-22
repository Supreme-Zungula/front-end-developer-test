<template>
  <div class="container">
    <h1>Register</h1>
    <h3>Enter your details to register for an account</h3>
    <DetailsForm
      :submitLabel="'Register'"
      @submit="submitDetails"
      @cancel="handleCancel"
    />
  </div>
</template>
<script>
import UserDetails from "@/classes/UserDetails";
import DetailsForm from "@/components/DetailsForm.vue";

export default {
  name: "RegisterView",
  components: {
    DetailsForm,
  },
  data() {
    return {
      userDetails: new UserDetails(),
      isFilledIn: {
        email: false,
        username: false,
        password: false,
        details: false,
      },
      message: {
        text: null,
        type: null,
      },
    };
  },
  methods: {
    submitDetails(userDetails) {
      localStorage.clear();
      if (!localStorage.getItem(userDetails.username)) {
        localStorage.setItem(userDetails.username, JSON.stringify(userDetails));
        this.message.type = "success";
        this.message.text = "Your registration was successful.";
      } else {
        this.message.text = "Username already taken.";
        this.message.type = "error";
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
</style>

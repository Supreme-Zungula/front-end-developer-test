<template>
  <div class="container">
    <h1>Register</h1>
    <h3>Enter your details to register for an account</h3>
    <p>{{ message.text }}</p>
    <DetailsForm
      :submitLabel="'Register'"
      @submit="submitDetails"
      @cancel="handleCancel"
    />
  </div>
</template>
<script>
import { createUser, getUserList } from "@/api/users";
import DetailsForm from "@/components/DetailsForm.vue";

export default {
  name: "RegisterView",
  components: {
    DetailsForm,
  },
  data() {
    return {
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
    fetchUsers(userDetails) {
      getUserList()
        .then((res) => {
          console.log(res.data);
          const user = res.data.users.find(
            (user) => user.username === userDetails.username
          );
          if (user) {
            this.message.type = "error";
            this.message.text = "Username already taken.";
          } else {
            this.addUser(userDetails);
          }
        })
        .catch((err) => console.error(err));
    },

    addUser(userDetails) {
      createUser(userDetails)
        .then((res) => {
          console.log(res.data);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => console.error(err));
    },

    submitDetails(userDetails) {
      this.fetchUsers(userDetails);
    },

    handleCancel() {
      this.$router.push({ name: "Login" });
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

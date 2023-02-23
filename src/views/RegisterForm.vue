<template>
  <div class="bg-white text-black p-4 mx-2">
    <h1 class="text-2xl text-w">Register</h1>
    <h3 class="text-lg mt-2">Enter your details to register for an account</h3>
    <p :class="message.type == 'error' ? 'text-red-500 m-2' : 'text-black m-2'">
      {{ message.text }}
    </p>
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
  name: "RegisterForm",
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
        .then(() => {
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
<style></style>

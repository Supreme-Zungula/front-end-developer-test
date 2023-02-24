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
    <Modal :show="showConfirmation">
      <ShowMessage
        :show="showConfirmation"
        :message="message"
        :type="message.type"
        @confirm="hidePopup"
      />
    </Modal>
  </div>
</template>
<script>
import { createUser, getUserList } from "@/api/users";
import DetailsForm from "@/components/DetailsForm.vue";
import Modal from "@/components/Modal.vue";
import ShowMessage from "@/components/ShowMessage.vue";

export default {
  name: "RegisterForm",
  components: {
    DetailsForm,
    Modal,
    ShowMessage,
  },
  data() {
    return {
      showConfirmation: false,
      isFilledIn: {
        email: false,
        username: false,
        password: false,
        details: false,
      },
      message: {
        header: null,
        text: null,
        type: "default",
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
          this.message.type = "success";
          this.message.header = "Your registration was successful.";
          this.message.text =
            "Follow the link sent to your email to verify your account and login.";
          this.showConfirmation = true;
        })
        .catch((err) => console.error(err));
    },

    submitDetails(userDetails) {
      this.fetchUsers(userDetails);
    },

    handleCancel() {
      this.$router.push({ name: "Login" });
    },
    hidePopup() {
      this.showConfirmation = false;
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style></style>

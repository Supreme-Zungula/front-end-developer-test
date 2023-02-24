<template>
  <div class="bg-white text-black p-4">
    <h1 class="text-xl font-bold">Review Account Details</h1>
    <DetailsForm
      :formLabel="formLabel"
      :submitLabel="'Submit'"
      @submit="submitNewDetails"
      @cancel="handleCancel"
    />
    <Teleport to="#modal">
      <Modal :show="showConfirmationMessage">
        <ShowMessage
          type="success"
          :show="showConfirmationMessage"
          :message="confirmationMessage"
          @confirm="hidePopup"
        />
      </Modal>
    </Teleport>
  </div>
</template>
<script>
import { updateUser } from "@/api/users";
import DetailsForm from "@/components/DetailsForm.vue";
import Modal from "@/components/Modal.vue";
import ShowMessage from "@/components/ShowMessage.vue";
import { useUserStore } from "@/stores/user";
export default {
  name: "ReviewAccount",
  components: {
    DetailsForm,
    Modal,
    ShowMessage,
  },
  data() {
    return {
      showConfirmationMessage: false,
      formLabel: "Edit your account details here",
      confirmationMessage: {
        header: "Your details have been successfully updated.",
        text: "Please follow the link sent to your email to confirm your new details and log in.",
      },
    };
  },
  beforeCreate() {
    const userStore = useUserStore();
    if (!userStore.isLoggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
  computed: {
    userStore() {
      const userStore = useUserStore();
      return userStore;
    },
  },
  methods: {
    submitNewDetails(userDetails) {
      updateUser(this.userStore.user.id, userDetails)
        .then((res) => {
          this.userStore.update(res.data);
          this.showConfirmationMessage = true;
        })
        .catch((err) => console.error(err));
    },
    handleCancel() {
      this.$router.go(-1);
    },

    hidePopup() {
      this.showConfirmationMessage = false;
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style></style>

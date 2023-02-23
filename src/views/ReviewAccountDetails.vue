<template>
  <div class="bg-white text-black p-4">
    <h1 class="text-xl font-bold">Review Account Details</h1>
    <DetailsForm
      :formLabel="formLabel"
      :submitLabel="'Submit'"
      @submit="submitNewDetails"
      @cancel="handleCancel"
    />
  </div>
</template>
<script>
import DetailsForm from "@/components/DetailsForm.vue";
import { useUserStore } from "@/stores/user";
export default {
  name: "ReviewAccount",
  components: {
    DetailsForm,
  },
  data() {
    return {
      formLabel: "Edit your account details here",
    };
  },
  beforeCreate() {
    const userStore = useUserStore();
    if (!userStore.isLoggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    submitNewDetails(details) {
      console.log(details);
    },
    handleCancel() {
      this.$router.go(-1);
    },
  },
};
</script>
<style></style>

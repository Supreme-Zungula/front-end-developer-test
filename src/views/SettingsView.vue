<template>
  <div class="bg-white text-black p-5 mb-5 max-h-screen">
    <button
      class="bg-cyan-500 text-white rounded-full w-20 max-h-8"
      @click="goToPreviousPage"
    >
      {{ "< Back" }}
    </button>
    <div>
      <h2 class="text-xl font-bold my-4">Settings</h2>
      <ul class="text-lg">
        <li
          class="text-gray-700 hover:cursor-pointer mb-1"
          @click="reviewAccountDetails"
        >
          Review account details
        </li>
        <li
          class="text-red-400 hover:cursor-pointer mb-2"
          @click="goToDeletePage"
        >
          Delete my account
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SettingsView",
  components: {},
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    reviewAccountDetails() {
      this.$router.push({ name: "ReviewAccount" });
    },
    goToPreviousPage() {
      this.$router.go(-1);
    },
    goToDeletePage() {
      this.$router.push({ name: "DeleteAccount" });
    },
  },
};
</script>
<style></style>

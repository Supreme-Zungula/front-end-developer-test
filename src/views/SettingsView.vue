<template>
  <div class="bg-white">
    <button
      class="bg-cyan-500 text-white p-2 rounded-full w-20"
      @click="goToPreviousPage"
    >
      {{ "< Back" }}
    </button>
    <div>
      <h2 class="text-xl font-bol">Settings</h2>
      <ul>
        <li>Review account details</li>
        <li>Delete my account</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SettingsView",
  methods: {
    goToPreviousPage() {
      this.$router.go(-1);
    },
  },
};
</script>
<style></style>

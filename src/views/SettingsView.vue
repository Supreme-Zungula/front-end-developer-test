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
        <li class="hover:cursor-pointer">Review account details</li>
        <li class="text-red-400 hover:cursor-pointer" @click="showDeleteUser">
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
    goToPreviousPage() {
      this.$router.go(-1);
    },
    showDeleteUser() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<style></style>

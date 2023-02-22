<template>
  <div class="bg-white text-black text-bold my-4 p-2">
    <h2 class="text-center">{{ formLabel }}</h2>
    <form class="text-lg">
      <div class="grid grid-rows-2">
        <label class="font-bold" for="email">Email address</label>
        <input
          type="text"
          name="email"
          class="border border-gray-400 rounded-md px-2"
          v-model="userDetails.email"
          @change="watchInput"
        />
      </div>
      <div class="grid grid-rows-2">
        <label class="font-bold" for="username">Username</label>
        <input
          type="text"
          name="username"
          class="border border-gray-400 rounded-md px-2"
          v-model="userDetails.username"
          @change="watchInput"
        />
      </div>
      <div class="grid grid-rows-2">
        <label class="font-bold" for="password">Password</label>
        <input
          type="password"
          name="password"
          class="border border-gray-400 rounded-md px-2"
          v-model="userDetails.password"
          @change="watchInput"
        />
      </div>
    </form>
    <div class="grid grid-cols-2 gap-4 my-4 text-white text-lg">
      <button @click="handleCancel" class="bg-red-400 rounded-md p-2">
        Cancel
      </button>
      <button
        class="bg-cyan-500 rounded-md p-2 disabled:opacity-25"
        :disabled="!isFilledIn.details"
        @click="submitDetails"
      >
        Register
      </button>
    </div>
  </div>
</template>
<script>
import UserDetails from "@/classes/UserDetails";
export default {
  name: "DetailsForm",
  props: {
    submitLabel: {
      type: String,
      required: false,
      default() {
        return "Submit";
      },
    },
    cancelLabel: {
      type: String,
      required: false,
      default() {
        return "Cancel";
      },
    },
    formLabel: {
      type: String,
      required: false,
      default: "",
    },
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
    };
  },
  methods: {
    submitDetails() {
      this.$emit("submit", this.userDetails);
    },
    handleCancel() {
      this.$emit("cancel");
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
<style lang=""></style>

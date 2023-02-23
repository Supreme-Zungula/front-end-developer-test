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
          @input="watchInput"
        />
      </div>
      <div class="grid grid-rows-2">
        <label class="font-bold" for="username">Username</label>
        <input
          type="text"
          name="username"
          class="border border-gray-400 rounded-md px-2"
          v-model="userDetails.username"
          @input="watchInput"
        />
      </div>
      <div class="grid grid-rows-2">
        <label class="font-bold" for="password">Password</label>
        <input
          type="password"
          name="password"
          class="border border-gray-400 rounded-md px-2"
          v-model="userDetails.password"
          @input="watchInput"
        />
      </div>
    </form>
    <div class="grid grid-cols-2 gap-4 my-4 text-white text-lg">
      <button @click="handleCancel" class="bg-red-400 rounded-md p-2">
        {{ cancelLabel }}
      </button>
      <button
        class="bg-cyan-500 rounded-md p-2 disabled:opacity-25"
        :disabled="!isFilledIn.details"
        @click="submitDetails"
      >
        {{ submitLabel }}
      </button>
    </div>
  </div>
</template>
<script>
import UserDetails from "@/classes/UserDetails";
import { useUserStore } from "@/stores/user";

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
  computed: {
    userStore() {
      return useUserStore();
    },
  },
  mounted() {
    if (!useUserStore.isLoggedIn) {
      this.userDetails = new UserDetails(this.userStore.user);
      this.evaluateInputFields();
    }
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
          this.isFilledIn.email = this.isFilled(event.target.value);
          this.evaluateInputFields();
          break;
        case "username":
          this.isFilledIn.username = this.isFilled(event.target.value);
          this.evaluateInputFields();
          break;
        case "password":
          this.isFilledIn.password = this.isFilled(event.target.value);
          this.evaluateInputFields();
          break;
        default:
          break;
      }
    },
    isFilled(value) {
      if (value.length !== 0) {
        return true;
      }
      this.isFilledIn.details = false;
      return false;
    },
    evaluateInputFields() {
      if (
        this.userDetails.email &&
        this.userDetails.email.length &&
        this.userDetails.username &&
        this.userDetails.username.length &&
        this.userDetails.password &&
        this.userDetails.password.length
      ) {
        this.isFilledIn.details = true;
      }
    },
  },
};
</script>
<style lang=""></style>

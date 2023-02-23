<template setup>
  <div class="grid grid-rows-3 bg-white text-black m-2 p-2">
    <h3 class="text-center text-sm font-bold">
      In order to reclaim access to your account, confirm your email address and
      we will send you a link with steps to reset your username and/or password.
    </h3>
    <div class="grid grid-rows-2">
      <label for="email" class="text-lg font-bold">Email address</label>
      <input
        type="text"
        name="username"
        class="border border-gray-400 rounded-md px-2"
        v-model="email"
        @input="checkInput"
      />
    </div>
    <div class="grid grid-cols-2 gap-4 text-white my-4">
      <button
        class="bg-red-500 rounded-md justify-self-start p-2 w-3/5"
        @click="$router.back()"
      >
        Cancel
      </button>
      <button
        class="bg-cyan-400 rounded-md justify-self-end p-2 w-3/5 disabled:opacity-25"
        :disabled="!filledIn"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "ForgotCredentials",
  setup() {
    const email = ref("");
    const filledIn = ref(false);

    const checkInput = () => {
      if (email.value.length > 0) {
        filledIn.value = true;
      } else {
        filledIn.value = false;
      }
    };
    return {
      email,
      filledIn,
      checkInput,
    };
  },
};
</script>
<style></style>

<template setup>
  <div v-if="show" class="grid grid-rows-2 text-center p-4 bg-white">
    <div v-if="type === 'success'" class="text-green-600">
      <h3 class="my-2 text-xl">{{ message.header }}</h3>
      <p>{{ message.text }}</p>
    </div>
    <div v-else-if="type === 'warning'" class="text-orange-400">
      <h3 class="my-2 text-xl">{{ message.header }}</h3>
      <p>{{ message.text }}</p>
    </div>
    <div v-else-if="type === 'danger'" class="text-red-400">
      <h3 class="my-2 text-xl">{{ message.header }}</h3>
      <p>{{ message.text }}</p>
    </div>
    <div v-else class="text-black">
      <h3 class="my-2 text-xl">{{ message.header }}</h3>
      <p>{{ message.text }}</p>
    </div>
    <button
      class="bg-green-400 justify-self-center m-4 p-2 rounded-md min-w-[20%] text-white text-lg"
      @click="$emit('confirm')"
    >
      OK
    </button>
  </div>
</template>
<script>
export default {
  name: "ShowMessage",
  props: {
    show: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    message: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: false,
      validator(value) {
        return ["default", "success", "warning", "danger"].includes(value);
      },
      default() {
        return "default";
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

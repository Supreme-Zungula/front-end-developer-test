<template setup>
  <div v-if="show" class="grid grid-rows-2">
    <div class="">
      <h3 v-if="type === 'success'" class="text-green-400">{{ message }}</h3>
      <h3 v-else-if="type === 'warning'" class="text-orange-400">
        {{ message }}
      </h3>
      <h3 v-else-if="type === 'danger'" class="text-red-400">{{ message }}</h3>
      <h3 v-else class="text-black">{{ message }}</h3>
    </div>
    <button class="bg-green-300 justify-self-center" @click="handleOkClick">
      OK
    </button>
  </div>
</template>
<script>
import { defineEmits } from "vue";

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
      type: String,
      required: true,
      default() {
        return "Display message here";
      },
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["default", "success", "warning", "danger"].includes(value);
      },
      default() {
        return "default";
      },
    },
  },
  setup() {
    const emit = defineEmits(["confirm", "cancel"]);
    const handleOkClick = () => {
      emit("confirm");
    };

    return {
      handleOkClick,
    };
  },
};
</script>

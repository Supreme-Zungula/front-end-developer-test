<template>
  <div
    v-if="show"
    class="fixed inset-0 backdrop-blur-sm flex justify-center items-center m-4 z-40"
  >
    <div class="bg-white p-2 rounded-md">
      <slot>Modal View</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalView",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>
<style></style>

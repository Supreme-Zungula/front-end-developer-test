<template>
  <div v-if="show" class="modal-bg backdrop-blur-md bg-white/30 ...">
    <div class="modal z-40 blu">
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

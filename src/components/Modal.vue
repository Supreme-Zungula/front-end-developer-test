<template>
  <div v-if="show" class="opacity-25 z-50">
    <slot>Modal View</slot>
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
<style lang=""></style>

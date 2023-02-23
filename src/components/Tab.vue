<template>
  <div v-show="title === selectedTab">
    <slot></slot>
  </div>
</template>
<script>
import { inject } from "vue";

export default {
  name: "TabView",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const selectedTab = inject("selectedTab");

    return { selectedTab };
  },
};
</script>
<style></style>

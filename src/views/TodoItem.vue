<template>
  <div
    class="grid grid-cols-3 border-2 hover:border-cyan-500 border-gray-500 rounded-md p-2 my-2 text-black"
  >
    <div class="col-span-2">
      <h2 class="text-xl">{{ item.title }}</h2>
      <p class="italic">Task detail</p>
    </div>
    <div class="col-span-1 grid">
      <button
        v-if="selected"
        class="bg-red-500 rounded-3xl text-white p-3 justify-self-end mr-1 text-lg"
      >
        X
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>

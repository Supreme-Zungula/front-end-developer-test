<template>
  <div
    class="grid grid-cols-3 border-2 hover:border-cyan-500 border-gray-500 rounded-md p-2 my-2 text-black"
  >
    <div class="col-span-2">
      <h2 :class="item.completed ? 'text-lg line-through' : 'text-lg'">
        {{ item.title }}
      </h2>
      <p class="italic">Task detail</p>
    </div>
    <div class="col-span-1 grid">
      <button
        v-if="selected && !item.completed"
        class="bg-green-500 rounded-full text-white p-3 justify-self-end"
        @click="marksAsDone"
      >
        Done
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
  methods: {
    marksAsDone(item) {
      this.$emit("done", item);
    },
  },
};
</script>
<style></style>

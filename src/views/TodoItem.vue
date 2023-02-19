<template>
  <div class="border-2 border-gray-100 rounded-md px-1 mt-4">
    <h2 class="text-xl">{{ item.title }}</h2>
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
  },
  data() {
    return {};
  },
  methods: {
    displayItem(item) {
      console.log(item);
    },
  },
};
</script>
<style></style>

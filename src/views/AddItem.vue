<template>
  <div class="add-todo-container">
    <h2 class="text-xl">Add a new task</h2>
    <div class="add-todo-form">
      <input
        type="text"
        name="title"
        placeholder="Task  title"
        class="min-w-full text-lg p-1 text-black"
        v-model="task.title"
      />
      <input
        type="text"
        name="detail"
        placeholder="Task detail"
        class="min-w-full text-lg p-1 text-black"
        v-model="task.detail"
      />
    </div>
    <div class="btn-container grid grid-cols-2 gap-x-4 gap-y-2 my-2">
      <button
        class="bg-green-500 max-w-full min-h-[50px]"
        :disabled="!detailsFilled()"
      >
        Add Task
      </button>
      <button class="min-h-[50px] bg-cyan-500">Select All</button>
      <button class="min-h-[50px] bg-red-500">Delete All</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddItem",
  data() {
    return {
      task: {
        title: null,
        detail: null,
      },
    };
  },
  methods: {
    detailsFilled() {
      if (this.task.title && this.task.detail) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style>
.btn-container button:disabled {
  opacity: 0.5;
}
</style>

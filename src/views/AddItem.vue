<template>
  <div class="add-todo-container mx-5">
    <h2 class="text-xl font-bold">Add a new task</h2>
    <div class="add-todo-form">
      <input
        type="text"
        name="title"
        placeholder="Task  title"
        class="min-w-full text-lg p-1 my-2 text-black rounded-md focus:border-cyan-500"
        v-model="task.title"
      />
      <input
        type="text"
        name="detail"
        placeholder="Task detail"
        class="min-w-full text-lg p-1 my-2 text-black rounded-md focus:border-cyan-500"
        v-model="task.detail"
      />
    </div>
    <div class="btn-container my-2 text-white text-lg">
      <button
        :class="
          detailsFilled()
            ? 'bg-green-500 min-h-[50px] w-full rounded-md'
            : 'bg-green-500 min-h-[50px] w-full rounded-md opacity-25'
        "
        :disabled="!detailsFilled()"
        @click="handleAddTask"
      >
        Add Task
      </button>
    </div>
  </div>
</template>
<script scoped>
export default {
  name: "AddItem",
  data() {
    return {
      task: {
        title: null,
        detail: null,
        completed: false,
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
    handleAddTask() {
      this.$emit("add-task", this.task);
    },
  },
};
</script>
<style></style>

<template>
  <div class="add-todo-container">
    <h2 class="text-xl">Add a new task</h2>
    <div class="add-todo-form">
      <input
        type="text"
        name="title"
        placeholder="Task  title"
        class="min-w-full text-lg p-1"
      />
      <input
        type="text"
        name="detail"
        placeholder="Task detail"
        class="min-w-full text-lg p-1"
      />
    </div>
    <div class="btn-container">
      <button class="">Add Task</button>
      <button class=""></button>
      <button class=""></button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.add-todo-form input {
  margin-top: 15px;
}
</style>

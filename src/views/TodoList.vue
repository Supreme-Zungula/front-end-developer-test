<template>
  <div>
    <AddItem />
    <div class="todo-items">
      <TodoItem/>
    </div>
  </div>
</template>
<script>
import AddItem from "@/views/AddItem.vue";
import TodoItem from "@/views/TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    AddItem,
    TodoItem
  },
  mounted() {
    
  },
  methods: {
  },
};
</script>
<style></style>

<template>
  <div>
    <AddItem />
    <TodoItem />
  </div>
</template>
<script>
import AddItem from "./AddItem.vue";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    AddItem,
    TodoItem,
  },
  mounted() {
    
  },
  methods: {

  },
};
</script>
<style lang=""></style>

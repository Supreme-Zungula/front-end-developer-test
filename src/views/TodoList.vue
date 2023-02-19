<template>
  <div>
    <AddItem />
    <TodoItem />
  </div>
</template>
<script>
import { getTodoList } from "@/api/todoList";
import AddItem from "./AddItem.vue";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    AddItem,
    TodoItem,
  },
  data() {
    return {
      todoList: [],
    };
  },
  mounted() {
    this.fetchTodoList();
  },
  methods: {
    fetchTodoList() {
      getTodoList()
        .then((res) => {
          this.todoList = res.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style lang=""></style>

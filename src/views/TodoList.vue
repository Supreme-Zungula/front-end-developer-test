<template>
  <div class="app-container">
    <AddItem @add-task="createNewTask" />
    <div class="btn-container">
      <button class="my-2 min-h-[50px] bg-cyan-500 w-[45%]" @click="handleSelectAll">
        Select All
      </button>
      <button class="min-h-[50px] bg-red-500 w-[45%]" @click="handleDeleteAll">
        Delete All
      </button>
    </div>
    <div v-if="isLoading.todoList">
      <h2>Loading todo items...</h2>
    </div>
    <div v-else>
      <label for="tasks" class="my-3 p-">You have {{ todoList.length }} tasks</label>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :item="todo"
        class="hover:border-cyan-400"
        @click="selectItem(todo)"
      />
    </div>
  </div>
</template>
<script>
import { createTodoItem, getTodoList } from "@/api/todoList";
import { useUserStore } from "@/stores/user";
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
      selectedItems: [],
      isLoading: {
        todoList: false,
      },
    };
  },
  mounted() {
    this.fetchTodoList();
  },
  beforeRouteEnter() {
    const currentUser = useUserStore();
    if (!currentUser.isLoggedIn) {
      this.$router.push({ name: "Login" });
    }
  },

  methods: {
    fetchTodoList() {
      this.isLoading.todoList = true;
      getTodoList()
        .then((res) => {
          this.todoList = res.data.data;
          this.isLoading.todoList = false;
        })
        .catch((err) => {
          console.error(err);
          this.isLoading.todoList = false;
        });
    },
    createNewTask(task) {
      createTodoItem(task)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    selectItem(item) {
      console.log(item);
    },
    selectAllTasks() {},
    deleteAllTasks() {},
  },
};
</script>
<style lang=""></style>

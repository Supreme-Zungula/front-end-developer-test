<template>
  <div class="app-container">
    <AddItem @add-task="createNewTask" />
    <div class="grid grid-cols-2 gap-x-2 gap-y-3 text-white text-lg">
      <button
        class="min-h-[50px] bg-cyan-500 w-full rounded-md"
        @click="selectAllTasks"
      >
        {{ selectedAll ? "Clear select" : "Select All" }}
      </button>
      <button
        class="min-h-[50px] bg-red-500 w-full rounded-md"
        @click="handleDeleteAll"
      >
        Delete All
      </button>
      <button
        class="min-h-[50px] bg-yellow-400 w-full rounded-md"
        @click="handleDeleteAll"
      >
        Clear Selected
      </button>
      <button
        class="min-h-[50px] bg-orange-400 w-full rounded-md"
        @click="handleDeleteAll"
      >
        Delete Selected
      </button>
    </div>
    <div v-if="isLoading.todoList">
      <h2>Loading todo items...</h2>
    </div>
    <div v-else>
      <label for="tasks" class="my-3 text-lg">
        You have {{ todoList.length }} tasks
      </label>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :item="todo"
        :class="
          todo.selected ? 'border-l-4 border-cyan-400' : 'hover:border-cyan-400'
        "
        @click="selectItem(todo)"
      />
    </div>
  </div>
</template>
<script>
import { createTodoItem, deleteTodoItem, getTodoList } from "@/api/todoList";
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
      selectedAll: false,
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
    selectItem(todo) {
      this.todoList = this.todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, selected: !todo.selected };
        }
        return item;
      });
    },
    selectAllTasks() {
      if (this.selectedAll) {
        this.todoList = this.todoList.map((item) => {
          return { ...item, selected: false };
        });
      } else {
        this.todoList = this.todoList.map((item) => {
          return { ...item, selected: true };
        });
      }
      this.selectedAll = !this.selectedAll;
    },
    deleteAllTasks() {
      let promises = [];
      this.todoList.forEach((item) => {
        promises.push(deleteTodoItem(item.id));
      });

      Promise.all(promises)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style lang=""></style>

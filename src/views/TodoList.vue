<template>
  <div class="bg-white text-black p-5 mb-5 max-h-screen">
    <AddItem @add-task="createNewTask" />
    <div class="grid grid-cols-2 gap-x-2 gap-y-3 text-white text-lg mx-5">
      <button
        class="min-h-[50px] bg-cyan-500 w-full rounded-md"
        @click="selectAllTasks"
      >
        {{ selectedAll ? "Clear select" : "Select All" }}
      </button>
      <button
        class="min-h-[50px] bg-red-500 w-full rounded-md"
        @click="deleteAllTasks"
      >
        Delete All
      </button>
      <button
        class="min-h-[50px] bg-yellow-400 w-full rounded-md"
        v-show="selectedItems"
        @click="clearSelectedTasks"
      >
        Clear Selected
      </button>
      <button
        class="min-h-[50px] bg-orange-400 w-full rounded-md"
        v-show="selectedAll || selectedItems"
        @click="deleteSelectedTasks"
      >
        Delete Selected
      </button>
    </div>
    <div v-if="isLoading.todoList" class="text-4xl mx-5">
      <h2>Loading todo items...</h2>
    </div>
    <div v-else class="m-5">
      <label for="tasks" class="my-3 text-lg">
        You have {{ todoList.length }} tasks
      </label>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :item="todo"
        :selected="todo.selected"
        :class="
          todo.selected ? 'border-l-4 border-cyan-500' : 'hover:border-cyan-500'
        "
        @click="selectItem(todo)"
        @done="markItemAsDone(todo)"
      />
    </div>
  </div>
</template>
<script>
import {
  createTodoItem,
  deleteTodoItem,
  getTodoList,
  updateTodoItem,
} from "@/api/todoList";
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
      selectedItems: false,
      selectedAll: false,
      isLoading: {
        todoList: false,
      },
    };
  },
  mounted() {
    this.fetchTodoList();
  },
  beforeCreate() {
    const userStore = useUserStore();
    if (!userStore.isLoggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    /**
     * API call:
     * fetches all Todo list items
     */
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

    /**
     * API Call:
     * Adds a new todo task to the list
     * @param {Object} task selected task
     */
    createNewTask(task) {
      createTodoItem(task)
        .then(() => {
          this.fetchTodoList();
        })
        .catch((err) => {
          console.error(err);
        });
    },

    /**
     * API Call:
     * Updates current task and marks it as done.
     * @param {Object} tasks  selected task
     */
    markItemAsDone(task) {
      task.completed = true;
      updateTodoItem(task.id, task)
        .then(() => {
          this.fetchTodoList();
        })
        .catch((err) => console.error(err));
    },
    selectItem(todo) {
      this.todoList = this.todoList.map((item) => {
        if (item.id === todo.id) {
          this.selectedItems = true;
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
    deleteSelectedTasks() {
      if (this.todoList.length === 0) {
        return;
      }
      this.selectedAll = false;
      this.selectedItems = false;
      let promises = [];
      this.todoList.map((item) => {
        if (item.selected) {
          promises.push(deleteTodoItem(item.id));
        }
      });
      if (promises.length !== 0) {
        this.resolvePromises(promises);
      }
    },
    clearSelectedTasks() {
      this.selectedItems = !this.selectedItems;
      this.todoList = this.todoList.map((item) => {
        if (item.selected) {
          return { ...item, selected: false };
        }
        return item;
      });
    },
    deleteAllTasks() {
      if (this.todoList.length === 0) {
        return;
      }

      let promises = [];
      this.todoList.map((item) => {
        promises.push(deleteTodoItem(item.id));
      });

      if (promises.length !== 0) {
        this.resolvePromises(promises);
      }
    },

    resolvePromises(promises) {
      Promise.all(promises)
        .then(() => {
          this.fetchTodoList();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style lang=""></style>

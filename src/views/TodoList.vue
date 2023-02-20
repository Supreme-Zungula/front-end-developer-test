<template>
  <div class="app-container bg-white text-black pb-5">
    <AppHeader />
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
        @click="clearSelectedTasks"
      >
        Clear Selected
      </button>
      <button
        class="min-h-[50px] bg-orange-400 w-full rounded-md"
        @click="deleteSelectedTasks"
      >
        Delete Selected
      </button>
    </div>
    <div v-if="isLoading.todoList" class="text-4xl mx-5">
      <h2>Loading todo items...</h2>
    </div>
    <div v-else class="mx-5">
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
      />
    </div>
  </div>
</template>
<script>
import { createTodoItem, deleteTodoItem, getTodoList } from "@/api/todoList";
import { useUserStore } from "@/stores/user";
import AddItem from "./AddItem.vue";
import AppHeader from "./AppHeader.vue";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    AddItem,
    TodoItem,
    AppHeader,
  },
  data() {
    return {
      todoList: [],
      selectedOne: false,
      selectedAll: false,
      isLoading: {
        todoList: false,
      },
    };
  },
  mounted() {
    this.fetchTodoList();
  },
  created() {
    const userStore = useUserStore();
    if (!userStore.isLoggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    /**
     * API call: fetches Todo list from DB
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
          this.selectedOne = !this.selectedOne;
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

<template>
  <div class="text-white text-lg">
    <ul class="flex p-2">
      <li
        v-for="(title, index) in tabTitles"
        :key="index"
        :class="
          selectedTab === title
            ? 'bg-white text-black hover:cursor-pointer p-2 rounded-t-lg font-bold'
            : 'bg-yellow-500	 hover:cursor-pointer p-2 rounded-t-md'
        "
        @click="updateSelectedTab(title)"
      >
        {{ title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
import { provide, ref } from "vue";

export default {
  name: "TabWrapper",
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTab = ref(tabTitles.value[0]);

    provide("selectedTab", selectedTab);

    const updateSelectedTab = (title) => {
      selectedTab.value = title;
    };

    return {
      tabTitles,
      selectedTab,
      updateSelectedTab,
    };
  },
};
</script>
<style></style>

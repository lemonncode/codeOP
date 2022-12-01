<template>
  <div>
    <div class="bg-lime-100 flex flex-col items-center">
      <div class="bg-lime-300 h-14 w-72 z-10 relative my-3 drop-shadow-lg">
        <label class="">
          <div class="px-16 py-2 absolute z-30">
            <h1 class="font-serif text-2xl">¿qué necesito?</h1>
          </div>
          <div
            class="bg-lime-500 h-5 w-40 z-20 absolute bottom-3 right-4"
          ></div>
        </label>
      </div>
      <input
        v-model="newItemName"
        @click:append="addItem"
        @keyup.enter="addItem"
        placeholder="frutas, verduras...."
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          block
          w-96
          my-3
          p-2.5
        "
      />
    </div>
    <ul v-for="item in items" :key="item.id" class="divide-green-800 divide-y">
      <li
        class="
          font-mono
          text-sm
          tracking-widest
          ml-6
          mt-4
          h-9
          w-54
          flex
          justify-between
        "
        @click="gotItem(item.id)"
      >
        <div v-if="item.got" class="line-through">
          {{ item.name }}
        </div>
        <div v-else class="font-bold">{{ item.name }}</div>
        <button
          @click.stop="deleteItem(item.id)"
          class="font-mono text-sm tracking-widest mr-6 mb-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </li>
      <div></div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItemName: "",
      items: [
        {
          id: 1,
          name: "Chocolate",
          got: true,
          dueDate: "2020-10-13",
        },
        {
          id: 2,
          name: "Bananas",
          got: false,
          dueDate: "2020-10-13",
        },
        {
          id: 3,
          name: "Milk",
          got: false,
          dueDate: "",
        },
        {
          id: 4,
          name: "Aguacate",
          got: true,
          dueDate: "2020-10-13",
        },
        {
          id: 5,
          name: "Chiken",
          got: false,
          dueDate: "2020-10-13",
        },
        {
          id: 6,
          name: "Bread",
          got: false,
          dueDate: "",
        },
      ],
      item: "",
      got: "bg-red-200",
    };
  },

  methods: {
    addItem(newItemName) {
      let newItem = {
        id: Date.now(),
        name: this.newItemName,
        got: false,
        dueDate: "",
      };
      console.log(newItem);
      this.items.push(newItem);
      this.newItemName = "";
    },
    gotItem(id) {
      let item = this.items.filter((item) => item.id === id)[0];
      item.got = !item.got;
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
.got {
  color: red;
}
</style>


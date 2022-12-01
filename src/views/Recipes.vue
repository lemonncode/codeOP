<template>
  <div>
   
    <div>

    <label><h1 class="font-mono text-md font-medium"> buscar por nombre de receta </h1></label>
    <input
      type="text"
      placeholder="pasta, salade, ..."
      v-model="query"
      @keypress="fetchRecipe"
     class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          block
          w-80
          my-3
          p-2.5
        "
    />
    </div>
     <div v-if="loading"> <h1 class="font-mono text-md font-medium"> loading....</h1></div>
    <div class="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="
          border-2 border-solid border-orange-300
          bg-amber-200
          p-4
          rounded-lg
          shadow-lg
          max-w-xs
          max-h-md
        "
      >
        <div>
          <h1 class="font-mono text-base font-medium tracking-wider h-12 ml-6">
            {{ recipe.title }}
            <!-- {{ recipe.id }} -->
          </h1>
          <div class="bg-amber-300">
            <img class="object-cover h-48 w-64 m-auto p-2 hue-rotate-15" :src="recipe.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      api_key: "9bae60ea77114364ba3f8f4369a5d41f",
      url_base: "https://api.spoonacular.com/recipes/complexSearch",
      query: "",
      recipes: "",
    };
  },

  methods: {
    async fetchRecipe(e) {
      if (e.key == "Enter") {
        (this.loading = true),
          await fetch(
            `${this.url_base}?query=${this.query}&apiKey=${this.api_key}`
          )
            .then((response) => response.json())

            //.then((data) => console.log(data))
            .then((data) => (this.recipes = data.results))
            .catch((error) => console.log(error));
      }
      this.loading = false;
    },
  },
};
</script>

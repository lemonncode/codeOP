import Home from "./views/Home.vue";
import Test from "./views/Test.vue";
import Market from "./views/Market.vue";
import Recipes from "./views/Recipes.vue";
import Ingredients from "./views/Ingredients.vue";
import Calendar from "./views/Calendar.vue";
import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/market", name: "market", component: Market },
  { path: "/recipes", name: "recipes", component: Recipes },
  { path: "/ingredients", name: "ingredients", component: Ingredients },
  { path: "/calendar", name: "calendar", component: Calendar },

  { path: "/test", name: "test", component: Test },
  { path: "/:path(.*)", component: NotFound },
];

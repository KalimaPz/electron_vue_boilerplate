<template>
  <v-container>
    <v-row class="text-center mt-16" justify="center">
      <v-col cols="12">
        <div class="text-h4 font-weight-medium">Todo List App</div>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-3">
          <v-card-title>Add todo 🖍</v-card-title>
          <div style="padding: 1rem">
            <v-text-field v-model="title" label="Title"></v-text-field>
            <div class="d-flex justify-end">
              <v-btn color="success" @click="addTodo()">Add todo</v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <TodoListView />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TodoListView from "../components/TodoListView.vue"
export default {
  name: "Home",
  data: () => ({
    title: ""
  }),
  components: {
    TodoListView
  },
  computed: {...mapGetters(["getTodos"])},
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.title);
      this.title = ""
    },
  },
};
</script>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 0,
    todos: [],
  },
  mutations: {
    ADDTODO(state, title) {
      state.todos.push({
        id: state.id++,
        title,
        done: false,
      });
    },
    DELETETODO(state, id) {
      state.todos.filter(value => value.id !== id);
    },
    CHANGESTATUS(state, id) {
      state.todos[id].done = !state.todos[id].done
    }
  },
  actions: {
    addTodo(context, title) {
      if(!title) {
        title = `to do #${this.state.id + 1}`
      }
      context.commit("ADDTODO", title);
    },
    deleteTodo(context, id) {
      context.commit("DELETETODO", id)
    },
    changeStatus(context, id) {
      context.commit("CHANGESTATUS", id)
    }
  },
  modules: {},
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
});

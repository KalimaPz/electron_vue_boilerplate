<template>
  <v-row justify="center">
    <v-col cols="12" md="5" class="content">
      <p v-if="getTodos.length === 0" class="text-center">ไม่มีรายการ</p>
      <v-list v-else>
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col cols="1"><p class="text-center font-weight-medium">No.</p></v-col>
              <v-col cols="9"><p class="text-center font-weight-medium">Title</p></v-col>
              <v-col cols="2">
                <p class="text-center font-weight-medium">Done ?</p>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="value in getTodos" :key="value.id">
          <v-list-item-content>
            <v-row>
              <v-col cols="1"
                ><p class="text-center">{{ value.id + 1 }}.</p></v-col
              >
              <v-col cols="9"
                ><p
                  :class="[
                    value.done ? 'text-decoration-line-through' : '',
                    'pl-8',
                  ]"
                >
                  {{ value.title }}
                </p></v-col
              >
              <v-col cols="2">
                <v-checkbox
                  class="pa-0 ma-0 pl-9"
                  v-model="value.done"
                  color="indigo"
                  hide-details
                ></v-checkbox
              ></v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoListView",
  computed: { ...mapGetters(["getTodos"]) },
};
</script>

<style scoped>
.content {
  margin: 8rem;
}
.card {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
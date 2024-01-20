<template>
  <Nav />
  <div class="home" data-aos="zoom-in">Index Book</div>

  <table class="table contain" data-aos="zoom-in">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.description }}</td>
        <td>
          <router-link
            :to="{ name: 'Edit Book', params: { id: item.id } }"
            class="btn btn-warning"
            >Edit</router-link
          >

          <button
            type="button"
            class="btn btn-danger mx-2"
            @click="deleteBook(item.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>



<script scoped>
import Nav from "@/frontend/components/Layout/Nav.vue";
import axios from "axios";
import "../../assets/js/main.js";

export default {
  name: "BookList",
  components: {
    Nav,
  },

  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/books");
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteBook(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/books/${id}`);
        this.getBooks();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


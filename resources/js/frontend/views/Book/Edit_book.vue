<template>
  <Nav />
  <div class="home" data-aos="zoom-in">Edit Book</div>

  <div class="contain" data-aos="zoom-in">
    <div>
      <div class="mb-3">
        <label class="form-label">Name </label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Price </label>
        <input type="text" class="form-control" v-model="price" />
      </div>
      <div class="mb-3">
        <label class="form-label"> Description</label>
        <textarea
          class="form-control"
          rows="3"
          v-model="description"
        ></textarea>
      </div>

      <div class="mb-3">
        <button type="button" class="btn btn-primary" @click="updatebook">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/frontend/components/Layout/Nav.vue";
import axios from "axios";
import "../../assets/js/main.js";

export default {
  name: "EditBook",
  components: {
    Nav,
  },
  data() {
    return {
      name: "",
      price: "",
      description: "",
    };
  },
  created() {
    this.getBookById();
  },
  methods: {
    async getBookById() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/books/${this.$route.params.id}`
        );
        this.name = response.data.book.name;
        this.price = response.data.book.price;
        this.description = response.data.book.description;
        console.log(response.data.book);
      } catch (error) {
        console.log(error);
      }
    },
    async updatebook() {
      try {
        await axios.put(
          `http://127.0.0.1:8000/api/books/${this.$route.params.id}`,
          {
            name: this.name,
            price: this.price,
            description: this.description,
          }
        );
        this.name = "";
        this.price = "";
        this.description = "";
        this.$router.push("/book");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<template>
  <Nav />
  <div class="home" data-aos="zoom-in">Add Book</div>

  <div class="contain" data-aos="zoom-in">
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
      <textarea class="form-control" rows="3" v-model="description"></textarea>
    </div>

    <div class="mb-3">
      <button type="button" class="btn btn-primary" @click="savebook">
        Save
      </button>
    </div>
  </div>

</template>

<script scoped>
import Nav from "@/frontend/components/Layout/Nav.vue";

import axios from "axios";

import "../../assets/js/main.js";

export default {
  name: "AddBook",
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
  methods: {
    async savebook() {
      try {
        await axios.post("http://127.0.0.1:8000/api/books", {
          name: this.name,
          price: this.price,
          description: this.description,
        });
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
<template>
	<Nav />
	<div class="home" data-aos="zoom-in">Home</div>
	<UpArrow />
	<Footer />
</template>

<script scoped>
import Nav from "@/frontend/components/Layout/Nav.vue";
import UpArrow from "@/frontend/components/Layout/UpArrow.vue";
import Footer from "@/frontend/components/Layout/Footer.vue";

import "../assets/js/main.js";

export default {
	name: "HomeView",
	components: {
		Nav,
		UpArrow,
		Footer,
	},
};
</script>


<style lang="scss" scoped>
// @import "../assets/sass/home-en.scss";
</style>

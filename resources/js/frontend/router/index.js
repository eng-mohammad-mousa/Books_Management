import {
	createRouter,
	createWebHistory
} from "vue-router";
import HomeView from "../views/Home.vue";

import Book from "../views/Book/Index.vue";
import EditBook from "../views/Book/Edit_Book.vue";
import AddBook from "../views/Book/Add_Book.vue";


import ErrorPage from "../views/Error/404-Page.vue";


const routes = [
	
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
// Book
	,
	{
		path: "/book",
		name: "Book",
		component: Book,
	},
	{
		path: "/edit_book/:id",
		name: "Edit Book",
		component: EditBook,
	}
	,{
		path: "/add_book",
		name: "Add Book",
		component: AddBook,
	},
	// الحالة الأخيرة
	// اللي بتمثل 
	// 404 page errore
	{
		path: "/:catchAll(.*)",
		component: ErrorPage,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

// أسماء الصفحات في مشروعي
router.beforeEach((to, from, next) => {

	if (to.name !== undefined) {
		// document.title = `${to.name} | ${process.env.VUE_APP_TITLE}  `;
		document.title = `${to.name}  `;
	} else {
		document.title = `Unknown page `;
	}
	next();

});

export default router;
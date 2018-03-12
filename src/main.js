import Vue 		from 'vue'
import Router 	from 'vue-router'
import App 		from './App.vue'
import Hello 	from './components/Hello.vue'
import News 	from './components/News/News.vue'
import Post 	from './components/News/Post.vue'
import Comments	from './components/News/Comments.vue'
import AllUsers from './components/User/AllUsers.vue'
import User 	from './components/User/User.vue'



Vue.use(Router)

const router = new Router ({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Hello,
		},
		{
			path: '/news/',
			name: 'news',
			component: News,
		},
		{
			path: '/post/:id',
			name: 'post',
			component: Post,
			props: true,
		},
		{
			path: '/users/',
			name: 'users',
			component: AllUsers,
		},
		{
			path: '/user/:id',
			name: 'user',
			component: User,
			props: true,
		},
		{
			path: '/comments/',
			name: 'comments',
			component: Comments,
		},
	]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

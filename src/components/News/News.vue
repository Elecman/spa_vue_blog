<template lang="html">
  <div class="greeting">
    <h2>
      Добро пожаловать в раздел Новостей
    </h2>
	<router-link
            v-for="post in posts"
			:key="post.id"
            :to="{ name: 'post', params: { id: post.id } }">
          <ul class="list-group">
			<li class="list-group-item">{{post.id}}. {{post.title}}</li>
		  </ul>
		  <div class="clearfix"></div>
        </router-link>
		<router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        posts: [],
        endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      }
    },

    created() {
      this.getAllPosts();
    },

    methods: {
      getAllPosts() {
        axios.get(this.endpoint)
          .then(response => {
            this.posts = response.data;
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      },
    }
  }
</script>

<style lang="scss">
  .greeting {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
</style>
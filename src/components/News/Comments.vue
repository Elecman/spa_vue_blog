<template lang="html">
  <div class="greeting">
    <h2>
      Пользователи сайта
    </h2>
	<table class="table table-bordered">
	  <thead>
		<tr>
		  <th scope="col">ID</th>
		  <th scope="col">Name</th>
		  <th scope="col">Email</th>
		  <th scope="col">Company Name</th>
		</tr>
	  </thead>
	  <tbody>
				<tr v-for="comment in comments"
				:key="comment.id">
				<th scope="row">{{ comment.id }}</th>
				<td>{{ comment.name }}</td>
				<td>{{ comment.email }}</td>
				<td>{{ comment.body }}</td>
				</tr>
		</tbody>
	</table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        comments: [],
        endpoint: 'https://jsonplaceholder.typicode.com/comments',
      }
    },

    created() {
      this.getAllComments();
    },

    methods: {
      getAllComments() {
        axios.get(this.endpoint)
          .then(response => {
            this.comments = response.data;
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

</style>
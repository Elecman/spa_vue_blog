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
				<tr v-for="user in users"
				:key="user.id">
				<th scope="row">{{ user.id }}</th>
				<td>
					<router-link :to="{ name: 'user', params: { id: user.id } }">
						{{ user.name }}
					</router-link>
				</td>
				<td>{{ user.email }}</td>
				<td>{{ user.company.name }}</td>
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
        users: [],
        endpoint: 'https://jsonplaceholder.typicode.com/users',
      }
    },

    created() {
      this.getAllPosts();
    },

    methods: {
      getAllPosts() {
        axios.get(this.endpoint)
          .then(response => {
            this.users = response.data;
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
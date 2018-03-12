<template lang="html">
  <div class="user" v-if="user">
    <table class="table">
		<tr>
			<td>{{ user.id }}</td>
			<td>{{ user.name }}</td>
			<td>{{ user.username }}</td>
			<td>{{ user.email }}</td>
			<td>{{ user.address.street }}</td>
			<td>{{ user.address.suite }}</td>
			<td>{{ user.address.city }}</td>
			<td>{{ user.address.zipcode }}</td>
			<td>{{ user.address.geo.lat }}</td>
			<td>{{ user.address.geo.lng }}</td>
			<td>{{ user.phone }}</td>
			<td>{{ user.website }}</td>
			<td>{{ user.company.name }}</td>
			<td>{{ user.company.catchPhrase }}</td>
			<td>{{ user.company.bs }}</td>
		</tr>
	</table>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        user: null,
        endpoint: 'https://jsonplaceholder.typicode.com/users/',
      }
    },
    methods: {
      getUser(id) {
        axios(this.endpoint + id)
          .then(response => {
            this.user = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },
    
    created() {
      this.getUser(this.id);
    },
    watch: {
      '$route'() {
        this.getUser(this.id);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
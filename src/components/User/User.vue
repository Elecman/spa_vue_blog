<template lang="html">
  <div class="user" v-if="user">
    <p class="post__id">{{ user.id }}</p>
    <p class="post__id">{{ user.name }}</p>
    <p class="post__id">{{ user.username }}</p>
    <p class="post__id">{{ user.email }}</p>
    <p class="post__id">{{ user.address.street }}</p>
    <p class="post__id">{{ user.address.suite }}</p>
    <p class="post__id">{{ user.address.city }}</p>
    <p class="post__id">{{ user.address.zipcode }}</p>
    <p class="post__id">{{ user.address.geo.lat }}</p>
    <p class="post__id">{{ user.address.geo.lng }}</p>
    <p class="post__id">{{ user.phone }}</p>
    <p class="post__id">{{ user.website }}</p>
    <p class="post__id">{{ user.company.name }}</p>
    <p class="post__id">{{ user.company.catchPhrase }}</p>
    <p class="post__id">{{ user.company.bs }}</p>
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
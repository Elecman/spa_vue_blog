<template>
  <div id="app">
    <div class="container-fluid">
	   <div class="row">
		<div class="col-lg-12 text-center">
			<h1>Vue.js SPA</h1>
		</div>
	   </div>
    </div>
    <div class="container-fluid">
      <div class="row">
		<div class="col-lg-3">
			<ul class="list-group">
			  <li class="list-group-item"><router-link to="/">Home</router-link></li>
			  <li class="list-group-item"><router-link to="/news">News</router-link></li>
			  <li class="list-group-item"><router-link to="/users">Users</router-link></li>
			  <li class="list-group-item"><router-link to="/comments">Comments</router-link></li>
			  <li class="list-group-item"><router-link to="/photos">Photos</router-link></li>
			  <li class="list-group-item"><router-link to="/todos">Todos</router-link></li>
			  <li class="list-group-item"><router-link to="/albums">Albums</router-link></li>
			</ul>
		</div>
		<div class="col-lg-9">
         <router-view></router-view>
        </div>
	   </div>
    </div>
  </div>
</template>



<style lang="scss">

</style>
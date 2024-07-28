<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="c-homepage">
    <header class="c-header">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <h1>Vue Personel Management</h1>
    </header>

    <main>
      <div class="c-caption">
        <h2>Personel List</h2>
        <hr>
      </div>

      <div class="buttons-container">
        <RouterLink to="/">Return to Homepage</RouterLink>
        <RouterLink to="/add-employee">Add Employee</RouterLink>
      </div>

      <div>
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.c-homepage {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .c-header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .c-caption {
    margin-block: 10px;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 10px;
  }
}
</style>
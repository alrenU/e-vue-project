<script setup>
import { RouterLink } from 'vue-router';
import { useEmployeesStore } from '@/stores/employees';

const employeesStore = useEmployeesStore();
const employees = employeesStore.getAllEmployees;
</script>

<template>
    <div class="c-employee-list" v-for="employee in employees" :key="employee.id">
        <div class="c-employee">
            <p>{{ employee.name }} {{ employee.surname }}</p>
            <RouterLink to="/edit-employee">Edit Employee</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.c-employee {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-block: 10px;
}
</style>
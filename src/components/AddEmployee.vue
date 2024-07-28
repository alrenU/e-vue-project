<script setup lang="ts">
import { ref } from 'vue';
import { useEmployeesStore } from '@/stores/employees';
import type { Employee } from '@/stores/employees';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref<string | undefined>(undefined);
const surname = ref<string | undefined>(undefined);
const age = ref<number | undefined>(undefined);
const salary = ref<number | undefined>(undefined);

function saveEmployee() {
    const employeesStore = useEmployeesStore();
    let lastEmployeeId: number = employeesStore.getLastEmployeeId;

    const employee: Employee = {
        id: ++lastEmployeeId,
        name: name.value,
        surname: surname.value,
        age: age.value,
        salary: salary.value
    }

    employeesStore.addEmployee(employee);
    console.log(employee);
    router.push({ name: "root" });
} 
</script>

<template>
    <div class="form">
        <input class="input-field" type="text" v-model="name">
        <input class="input-field" type="text" v-model="surname">
        <input class="input-field" type="number" v-model="age">
        <input class="input-field" type="number" v-model="salary">
    </div>

    <button class="add-button" @click="saveEmployee">Save Employee</button>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input-field {
        padding: 5px;
        border-radius: 5px;
    }
}

.add-button {
    margin-block: 10px;
    padding: 10px;
    border-radius: 5px;
    float: right;
    background-color: transparent;
    color: white;
    border: none;
}

.add-button:hover {
    background-color: green;
}
</style>
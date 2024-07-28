<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useEmployeesStore } from '@/stores/employees';
import { useRouter } from 'vue-router';

const props = defineProps<{
    id?: string;
}>();

const route = useRouter();
const name = ref<string | null>(null);
const surname = ref<string | null>(null);
const age = ref<number | null>(null);
const salary = ref<number | null>(null);

const employeesStore = useEmployeesStore();

const updateEmployee = () => {
    if (props.id !== undefined) {
        const employee = employeesStore.getEmployeeById(parseInt(props.id, 10));
        console.log("Employee Info: ", employee);

        if (employee) {
            name.value = employee.name;
            surname.value = employee.surname;
            age.value = employee.age;
            salary.value = employee.salary;
        }
    }
};

// Update employee when component is mounted or props.id changes
onMounted(updateEmployee);
watch(() => props.id, updateEmployee);

function saveEmployee() {
    if (props.id !== undefined) {
        const employee = employeesStore.getEmployeeById(parseInt(props.id, 10));

        employee.name = name.value;
        employee.surname = surname.value;
        employee.age = age.value;
        employee.salary = salary.value;

        console.log(name.value, surname.value, age.value, salary.value);
        route.push({ name: "root" })
    }
}
</script>

<template>
    <div class="c-form">
        <input v-if="name !== null" class="input-field" type="text" v-model="name" />
        <input v-if="surname !== null" class="input-field" type="text" v-model="surname" />
        <input v-if="age !== null" class="input-field" type="number" v-model.number="age" />
        <input v-if="salary !== null" class="input-field" type="number" v-model.number="salary" />
    </div>

    <button class="update-button" @click="saveEmployee">Update Employee</button>
</template>

<style scoped>
.c-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input-field {
    padding: 5px;
    border-radius: 5px;
}

.update-button {
    margin-block: 10px;
    padding: 10px;
    border-radius: 5px;
    float: right;
    background-color: transparent;
    color: white;
    border: none;
}

.update-button:hover {
    background-color: green;
}
</style>

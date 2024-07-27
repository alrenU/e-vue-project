<script setup lang="ts">
import { useEmployeesStore } from '@/stores/employees';
import { RouterLink } from 'vue-router';

const props = defineProps({
    id: String
})

let employee: any = null;

if (props.id !== undefined) {
    employee = useEmployeesStore().getEmployeeById(parseInt(props.id, 10))
    console.log("Employee Info: ", employee);
}
</script>

<template>
    <div class="c-form">
        <input v-if="employee !== null" class="input-field" type="text" value="`{{ employee.name }}`">
        <input v-if="employee !== null" class="input-field" type="text">
        <input v-if="employee !== null" class="input-field" type="number">
        <input v-if="employee !== null" class="input-field" type="number">
    </div>

    <div class="update-button">
        <RouterLink to="/">Update Employee</RouterLink>
    </div>
</template>

<style scoped>
.c-form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input-field {
        padding: 5px;
        border-radius: 5px;
    }
}

.update-button {
    margin-block: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>
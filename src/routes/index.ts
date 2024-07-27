import { createWebHistory, createRouter } from 'vue-router'
import AddEmployee from '@/components/AddEmployee.vue'
import EditEmployee from '@/components/EditEmployee.vue'
import EmployeeList from '@/components/EmployeeList.vue'

const routes = [
    { path: '/', component: EmployeeList },
    { path: '/add-employee', component: AddEmployee },
    { path: '/edit-employee/:id', component: EditEmployee, props: true },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
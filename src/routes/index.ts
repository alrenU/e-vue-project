import { createWebHistory, createRouter } from 'vue-router'
import AddEmployee from '@/components/AddEmployee.vue'
import EditEmployee from '@/components/EditEmployee.vue'
import EmployeeList from '@/components/EmployeeList.vue'

const routes = [
    { path: '/', name: "root", component: EmployeeList },
    { path: '/add-employee', name: "add-employee", component: AddEmployee },
    { path: '/edit-employee/:id', name: "edit-employee", component: EditEmployee, props: true },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
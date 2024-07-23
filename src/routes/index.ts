import { createWebHistory, createRouter } from 'vue-router'
import EmpList from '@/components/EmpList.vue'
import AddEmployee from '@/components/AddEmployee.vue'
import EditEmployee from '@/components/EditEmployee.vue'

const routes = [
    { path: '/', component: EmpList },
    { path: '/add-employee', component: AddEmployee },
    { path: '/edit-employee/:id', component: EditEmployee, props: true },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
import { defineStore } from "pinia";

interface Employee {
     id: number,
     name: string;
     surname: string;
     age: number;
     salary: number;
}

interface EmployeesState {
     employees: Employee[];
}

export const useEmployeesStore = defineStore("employees", {
     state: (): EmployeesState => ({
          employees: [
               { id: 0, name: "Ayse", surname: "Demir", age: 25, salary: 1000 },
               { id: 1, name: "John", surname: "Smith", age: 30, salary: 1200 },
          ]
     }),

     getters: {
          getAllEmployees(state): Employee[] {
               return state.employees;
          },

          // REFACTOR: any
          getEmployeeById(state): any {
               return (employeeId: number) => {
                    return state.employees.find(employee => employee.id === employeeId)
               };
          }
     },

     actions: {
          addEmployee(newEmployee: Employee): void {
               this.employees.push(newEmployee);
          },

          updateEmployee(index: number, updatedEmployee: Employee): void {
               this.employees[index] = updatedEmployee;
          }
     }
});

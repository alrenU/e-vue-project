import { defineStore } from "pinia";

export interface Employee {
     id: number,
     name: string | undefined;
     surname: string | undefined;
     age: number | undefined;
     salary: number | undefined;
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

          // (Refactor) The function return type `any` might be inappropriate.
          getEmployeeById(state): any {
               return (employeeId: number) => {
                    return state.employees.find(employee => employee.id === employeeId)
               };
          },

          getLastEmployeeId(state): number {
               const lastEmployeeId: number = state.employees[state.employees.length - 1].id;
               return lastEmployeeId;
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

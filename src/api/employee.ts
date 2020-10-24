import {Employee} from '../types/Employee';
import {toBase64} from '../utils/converterToBase64';
import {axios} from './axios';

export const employeeApi = {
    getEmployeeList: async function() {
        const {data} = await axios.get<{employees: Employee[]}>('/employees');
        return data.employees;
    },

    getEmployee: async function(id: string) {
        const {data} = await axios.get<{employee: Employee}>('/employees/' + id);
        return data.employee;
    },

    addNewEmployee: async function(newEmployee: Employee) {
        const base64Photo = newEmployee.profilePhoto ? await toBase64(newEmployee.profilePhoto) : undefined;
        return axios.post('/employees', {...newEmployee, profilePhoto: base64Photo});
    },
};

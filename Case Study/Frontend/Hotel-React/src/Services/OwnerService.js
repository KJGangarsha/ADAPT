import axios from 'axios';

/* Axios calls */
const EMPLOYEE_API_FINDALL_URL = "http://localhost:8081/api/findManagers";
const EMPLOYEE_API_ADDMANAGER_URL = "http://localhost:8081/api/addManager";
const EMPLOYEE_API_VIEWMANAGER_URL = "http://localhost:8081/api/findManager";
const EMPLOYEE_API_EDITMANAGER_URL = "http://localhost:8081/api/editManager";
const EMPLOYEE_API_DELETEMANAGER_URL = "http://localhost:8081/api/deleteManager";

class OwnerService {
/* methods wrt axios calls(APIs) */

    getEmployees(){
        return axios.get(EMPLOYEE_API_FINDALL_URL);
    }    

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_ADDMANAGER_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_VIEWMANAGER_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_EDITMANAGER_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_DELETEMANAGER_URL + '/' + employeeId);
    }

}

export default new OwnerService()
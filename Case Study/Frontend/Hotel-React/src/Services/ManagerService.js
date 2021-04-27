import axios from 'axios';
/* Axios calls */

/* staff */
const EMPLOYEE_API_FINDALLS_URL = "http://localhost:8082/api/findStaffs";
const EMPLOYEE_API_ADDEMPLOYEE_URL = "http://localhost:8082/api/addStaff";
const EMPLOYEE_API_VIEWEMPLOYEE_URL = "http://localhost:8082/api/findStaff";
const EMPLOYEE_API_EDITEMPLOYEE_URL = "http://localhost:8082/api/editStaff";
const EMPLOYEE_API_DELETEEMPLOYEE_URL = "http://localhost:8082/api/deleteStaff";

/* inventory */
const EMPLOYEE_API_FINDALLI_URL = "http://localhost:8082/api/findInventories";
const EMPLOYEE_API_ADDINVENTORY_URL = "http://localhost:8082/api/addInventory";
const EMPLOYEE_API_VIEWINVENTORY_URL = "http://localhost:8082/api/findInventory";
const EMPLOYEE_API_EDITINVENTORY_URL = "http://localhost:8082/api/editInventory";
const EMPLOYEE_API_DELETEINVENTORY_URL = "http://localhost:8082/api/deleteInventory";

/* rooms */
const EMPLOYEE_API_FINDALLR_URL = "http://localhost:8082/api/findRooms";
const EMPLOYEE_API_ADDROOM_URL = "http://localhost:8082/api/addRoom";
const EMPLOYEE_API_FINDAVAILROOMS_URL = "http://localhost:8082/api/availRooms";
const EMPLOYEE_API_VIEWROOM_URL = "http://localhost:8082/api/findRoom";
const EMPLOYEE_API_VIEWBYROOM_URL = "http://localhost:8082/api/findRoomByNumber";
const EMPLOYEE_API_EDITROOM_URL = "http://localhost:8082/api/editRoom";
const EMPLOYEE_API_DELETEROOM_URL = "http://localhost:8082/api/deleteRoom";

class ManagerService {
/* methods wrt axios calls(APIs) */    

    /* --staff-- */

    getEmployees(){
        return axios.get(EMPLOYEE_API_FINDALLS_URL);
    }    

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_ADDEMPLOYEE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_VIEWEMPLOYEE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_EDITEMPLOYEE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_DELETEEMPLOYEE_URL + '/' + employeeId);
    }

    /* --Inventory-- */

    getInventory(){
        return axios.get(EMPLOYEE_API_FINDALLI_URL);
    }    

    createInventory(inventory){
        return axios.post(EMPLOYEE_API_ADDINVENTORY_URL, inventory);
    }

    getInventoryById(inventoryId){
        return axios.get(EMPLOYEE_API_VIEWINVENTORY_URL + '/' + inventoryId);
    }

    updateInventory(inventory, inventoryId){
        return axios.put(EMPLOYEE_API_EDITINVENTORY_URL + '/' + inventoryId, inventory);
    }

    deleteInventory(inventoryId){
        return axios.delete(EMPLOYEE_API_DELETEINVENTORY_URL + '/' + inventoryId);
    }

    /* --room-- */
    getRooms(){
        return axios.get(EMPLOYEE_API_FINDALLR_URL);
    }    

    getAvailRooms(){
        return axios.get(EMPLOYEE_API_FINDAVAILROOMS_URL)
    }

    createRoom(room){
        return axios.post(EMPLOYEE_API_ADDROOM_URL, room);
    }

    getRoomById(roomId){
        return axios.get(EMPLOYEE_API_VIEWROOM_URL + '/' + roomId);
    }

    getRoomByNumber(roomId){
        return axios.get(EMPLOYEE_API_VIEWBYROOM_URL + '/' + roomId);
    }

    updateRoom(room, roomId){
        return axios.put(EMPLOYEE_API_EDITROOM_URL + '/' + roomId, room);
    }

    deleteRoom(roomId){
        return axios.delete(EMPLOYEE_API_DELETEROOM_URL + '/' + roomId);
    }

}

export default new ManagerService()
import axios from 'axios';

/* Axios calls */
const EMPLOYEE_API_FINDALL_URL = "http://localhost:8083/api/findGuests";
const EMPLOYEE_API_FINDCHECKOUTS_URL = "http://localhost:8083/api/Checkouts";
const EMPLOYEE_API_ADDGUEST_URL = "http://localhost:8083/api/addGuest";
const EMPLOYEE_API_ADDCHECKOUT_URL = "http://localhost:8083/api/checkOut";
const EMPLOYEE_API_VIEWGUEST_URL = "http://localhost:8083/api/findGuest";
const EMPLOYEE_API_EDITGUEST_URL = "http://localhost:8083/api/editGuest";
const EMPLOYEE_API_DELETEGUEST_URL = "http://localhost:8083/api/deleteGuest";


class GuestService {
/* methods wrt axios calls(APIs) */
    
    getGuests(){
        return axios.get(EMPLOYEE_API_FINDALL_URL);
    }    

    getCheckOuts(){
        return axios.get(EMPLOYEE_API_FINDCHECKOUTS_URL);
    }
    
    createGuest(guest){
        return axios.post(EMPLOYEE_API_ADDGUEST_URL, guest);
    }

    createCheckOut(guest){
        return axios.post(EMPLOYEE_API_ADDCHECKOUT_URL, guest);
    }

    getGuestById(guestId){
        return axios.get(EMPLOYEE_API_VIEWGUEST_URL + '/' + guestId);
    }

    updateGuest(guest, guestId){
        return axios.put(EMPLOYEE_API_EDITGUEST_URL + '/' + guestId, guest);
    }

    deleteGuest(guestId){
        return axios.delete(EMPLOYEE_API_DELETEGUEST_URL + '/' + guestId);
    }

}

export default new GuestService()
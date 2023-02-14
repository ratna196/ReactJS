import axios from 'axios';
const API="http://localhost:3001/emps/"
function getAllEmps(){
     return axios.get(API);
}
function getEmpById(id){
    return axios.get(`${API}${id}`);
}
function addEmp(data){
    return axios.post(API,data);
}
function deleteEmp(id){
    return axios.delete(`${API}${id}`);
}
function updateEmp(id,data){
    return axios.put(`${API}${id}`,data);
}
export {getAllEmps,getEmpById,addEmp,deleteEmp,updateEmp}
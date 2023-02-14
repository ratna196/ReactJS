import axios from 'axios';
const API="http://localhost:3001/products/"
function getAllProducts(){
     return axios.get(API);
}
function getProductById(id){
    return axios.get(`${API}${id}`);
}
function addProduct(data){
    return axios.post(API,data);
}
function deleteProduct(id){
    return axios.delete(`${API}${id}`);
}
function updateProduct(id,data){
    return axios.put(`${API}${id}`,data);
}
export {getAllProducts,getProductById,addProduct,deleteProduct,updateProduct}
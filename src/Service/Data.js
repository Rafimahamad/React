import axios from "axios";

const url = 'http://localhost:5000/user';



export const LocationsData = ['Hyderabad','Kurnool', 'Bangalore', 'Chennai', 'Vizag', 'Delhi', 'Mumbai', 'Kolkata', 'Gurugram']

export const getData = () => {
    return axios.get(url);
}

export const saveData = (data) => {
    return axios.post(url, data);
}

export const getProfileData = (email) => {
    return axios.get(`${url}?email=${email}`)
}
export const saveBill = (data) => {
    return axios.post('http://localhost:5000/bills', data);
}

export const getBills = () => {
    return axios.get('http://localhost:5000/bills');

}


export const updateProfileByUserId = (user,id) => {
return axios.put(`${url}/${id}`,user);
}


export const fetchBills = (email) => {
    return axios.get(`http://localhost:5000/bills?name=${email}`)
}

export const deleteBillById=(id)=>{
    return axios.delete(`http://localhost:5000/bills/${id}`)
}

export const deleteUserById=(id)=>{
    return axios.delete(`${url}/${id}`)
}

export const fetchBillById=(id)=>{
    return axios.get(`http://localhost:5000/bills/${id}`)
}


export const updateBillStatus=(id,bill)=>{
    return axios.put(`http://localhost:5000/bills/${id}`,bill)
}
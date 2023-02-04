import axios from 'axios';
const ENDPOINT_API = 'http://192.168.0.150:3030/products';

export const postProduct = async (data) => {
    try {
      const response = await axios.post(ENDPOINT_API, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const getProduct = async (id) => {
    try {
        const response = await axios.get(`${ENDPOINT_API}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export async function getAllProducts(){
    try {
        const response = await axios.get(`${ENDPOINT_API}/`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

export const deleteProduct = async (id) => {
    try{ 
        const response = await axios.delete(`${ENDPOINT_API}/${id}`);
        return response.data;
    }
    catch(error){
        console.error(error);
    }
};

export const editData = async (id, data) => {
    try{ 
        const response = await axios.put(`${ENDPOINT_API}/${id}`, data);
        return response.data;
    }
    catch(error){
        console.error(error);
    }
};

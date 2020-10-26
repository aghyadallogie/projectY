import Axios from "axios";

//Clients Helpers
export const helpFetchClients = async () =>
  await Axios.get("http://localhost:5000/api/clients");

export const helpAddClient = async (body, config) =>
  await Axios.post("http://localhost:5000/api/clients/add", body, config);

export const helpEditClient = async (client) =>
  await Axios.patch(`http://localhost:5000/api/clients/update/${client._id}`, client);

export const helpDeleteClient = async (_id) =>
  await Axios.delete(`http://localhost:5000/api/clients/delete/${_id}`);

// Cars Helpers
export const helpFetchCars = async () =>
  await Axios.get("http://localhost:5000/api/cars");

export const helpAddCar = async (body, config) =>
  await Axios.post("http://localhost:5000/api/cars/add", body, config);

export const helpDeleteCar = async (chassyNr) =>
  await Axios.post(`http://localhost:5000/api/cars/delete/${chassyNr}`);

// Operations Helpers
export const helpFetchOperations = async () =>
  await Axios.get("http://localhost:5000/api/operations");

export const helpAddOperation = async (body, config) =>
  await Axios.post("http://localhost:5000/api/operations/add", body, config);

export const helpDeleteOperation = async (name) =>
  await Axios.post(`http://localhost:5000/api/operations/delete/${name}`);

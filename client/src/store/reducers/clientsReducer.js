import { GET_CLIENTS, SET_CLIENT, DELETE_CLIENT, EDIT_CLIENT } from "../actions/types";
import { helpDeleteClient, helpEditClient } from "../helpers";

const initialState = { clientsArray: [], client: {} };

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      console.log("reducer: ", action.payload);
      return {
        ...state,
        clientsArray: action.payload,
      };
    case SET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case EDIT_CLIENT:
      helpEditClient(action.payload);
      return {
        ...state
      };
    case DELETE_CLIENT:
      helpDeleteClient(action.payload);
      return {
        ...state,
        clientsArray: state.clientsArray.filter(client => client._id !== action.payload)
      };
    default:
      return state;
  }
};

export default clientsReducer;

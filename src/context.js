import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

let url = 'https://api.spacexdata.com/v3/payloads';
let url1 = 'https://api.spacexdata.com/v3/history';

const initialState = {
    isLoading: true,
    payloads: [],
    history: [],
};

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = () => {
        dispatch({type: "SET_LOADING"});
      axios
          .get(url)
          .then((response)=> {
              const datadisplay = response.data;
            //   console.log(datadisplay);
              dispatch({
                type: "GET_PAYLOAD",
                payload: {
                    payloads : datadisplay
                }
              })
          })
          .catch(err => console.log(err));
    }

    const fetchHistoryApiData = () => {
        dispatch({type: "SET_LOADING"});
      axios
          .get(url1)
          .then((response)=> {
              const datadisplay = response.data;
              console.log(datadisplay);
              dispatch({
                type: "GET_HISTORY",
                payload: {
                    history : datadisplay
                }
              })
          })
          .catch(err => console.log(err));
    }
  
    useEffect(() =>{
      fetchApiData();
      fetchHistoryApiData();
    },[]);

    return (
    <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};
import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

const Data = () => {

  const {history, isLoading} = useGlobalContext();
  // console.log(history,"payload", isLoading);
  if(isLoading) {
    return <>
        <h2>Loading.... </h2>
    </>
  }
  return (
    <>
      {history.map((curPost) => {
        return <><h2>{curPost.customers}</h2></>
      })}
    </>
  )
}

export default Data;
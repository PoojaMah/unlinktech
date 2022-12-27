import React, { useEffect, useState } from 'react'

import { useGlobalContext } from './context';
const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const {history, isLoading} = useGlobalContext();
  const [historyData, setHistoryData] = useState([]);
  // console.log(history,"history", isLoading);
  

  useEffect(() => {
    const filteredData = history.filter(historyData => {
      if (searchVal) {
        return (
        historyData.title.toLowerCase().includes(searchVal.toLowerCase())
      )
      } else {
        return historyData
      }
      
    })
    setHistoryData(filteredData);
    console.log(filteredData, "filteredData")
  }, [searchVal, history])

  if(isLoading) {
    return <>
        <h2>Loading.... </h2>
    </>
  }

  return (
    <div>
      <input type="text" onChange={(e) => setSearchVal(e.target.value)} value={searchVal} />
      {historyData.map((curPost) =>  <><h2>{curPost.title}</h2></>
    )}</div>
  )
}

export default Search;
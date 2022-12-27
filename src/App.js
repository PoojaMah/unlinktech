import React from 'react';
import Data from './Data';
import Pagination from './Pagination';
import Search from './Search';
import { useGlobalContext } from './context';
import Payload from './Payload';

const App = () => {
  
  return (
    <>
      <Search/>
      <Data/>
      <Payload />
    </>
  )
}

export default App

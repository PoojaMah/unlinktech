import React, { useState, useMemo, useEffect, useRef, createRef } from 'react';
import { useGlobalContext } from './context';

import Pagination from './Pagination';


let PageSize = 10;

const Payload = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {payloads, isLoading} = useGlobalContext();
    // console.log(payloads)

  const currentTableData = useMemo(() => {

    const firstPageIndex = (currentPage - 1) * PageSize;

    const lastPageIndex = firstPageIndex + PageSize;
    // console.log(payloads.slice(firstPageIndex, lastPageIndex), firstPageIndex, lastPageIndex, ".slice(firstPageIndex, lastPageIndex)")
    return payloads.slice(firstPageIndex, lastPageIndex);

  }, [currentPage, payloads]);

  return (
    <>

      <table>

        <thead>

          <tr>

            <th>PAYLOAD ID</th>

            <th>PAYLOAD TYPE</th>

            <th>MANUFACTURER</th>

            <th>NATIONALITY</th>

            <th>REUSEABILITY</th>

          </tr>

        </thead>

        <tbody>

          {currentTableData.map((item, ind) => {

            return (

              <tr key={ind}>

                <td>{item.payload_id}</td>

                <td>{item.payload_type}</td>

                <td>{item.manufacturer}</td>

                <td>{item.nationality}</td>

                <td>{item.reused}</td>

              </tr>

            );

          })}

        </tbody>

      </table>

      <Pagination

        className="pagination-bar"

        currentPage={currentPage}

        totalCount={payloads.length}

        pageSize={PageSize}

        onPageChange={page => setCurrentPage(page)}

      />
      </>
  )
}

export default Payload;
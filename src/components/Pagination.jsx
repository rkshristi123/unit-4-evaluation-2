import React from "react";
import { Button,ButtonGroup,Select } from '@chakra-ui/react'
const Pagination = ({page,limit,totalcount,setPage,setLimit}) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button"  onClick={()=>setPage(1)}>first</Button>
      <Button data-cy="pagination-previous-button"  disabled={page<=1} onClick={()=>setPage(page-1)}>prev</Button>
      <Select data-cy="pagination-limit-select"  onChange={(e)=>setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled= {totalcount<=page*limit} onClick={()=>setPage(page+1)}>next</Button>
      <Button data-cy="pagination-last-button">last</Button>
    </ButtonGroup>
  );
};

export default Pagination;

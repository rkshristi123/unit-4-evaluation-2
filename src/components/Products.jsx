import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex,Grid } from '@chakra-ui/react';
import {useState} from "react"
import {useEffect} from "react"


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  
  const [todos,setTodos] = useState([]);
  const [page,setPage] = useState(1)
  const [totalcount,setTotalcount] =useState(0)
  const [limit,setLimit]=useState("3")


  useEffect(()=>{
    
   fetch(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
  .then((r)=>r.json())
   .then((d)=>{
       setTodos(d);
       console.log(d)
       setTotalcount(Number(d.headers["x-total-count"]))
   });
   },[page,limit]);

  return (
    <>
    <Flex>
      
      <AddProduct/>
      <Grid>
      <Product todos={todos}/>
      </Grid>
    
      <Pagination page={page} limit={limit} totalcount={totalcount} setPage={setPage} setLimit={setLimit}/>
    </Flex>
    </>
  );
};

export default Products;

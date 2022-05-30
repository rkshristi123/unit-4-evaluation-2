import React from "react";


import { Text,Image,Box,Stack,Tag,TagLabel,Heading } from '@chakra-ui/react'

const Product = ({todos}) => {
  // TODO: Remove below const and instead import them from chakra
 
  return (
    <>
    {todos.map((todo)=>(
      <Stack data-cy="product" key={todo.id}>
      <Image data-cy="product-image"
      src="https://picsum.photos/seed/picsum6/420/260"
       />
      <Text data-cy="product-category">{todo.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{todo.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{todo.title}</Heading>
      <Box data-cy="product-price">{todo.price}</Box>
    </Stack>
    ))}
    
    </>
  );
};

export default Product;

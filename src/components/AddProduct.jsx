import React from "react";
import { Button,Modal,ModalBody,Input,Select,RadioGroup,Radio } from '@chakra-ui/react'
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra


  return (
    <>
      <Button my={4} data-cy="add-product-button"  >add product</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">male</Radio>
            <Radio data-cy="add-product-gender-female">female</Radio>
            <Radio data-cy="add-product-gender-unisex">unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;

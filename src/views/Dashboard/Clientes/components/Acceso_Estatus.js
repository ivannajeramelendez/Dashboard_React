// Chakra imports
import { Table, Tbody, Text, Th, Thead, Tr, useColorModeValue, } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, NumberInput, Input } from "@chakra-ui/react"
import { Button, ButtonGroup, Stack, Flex } from "@chakra-ui/react"
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React, { useEffect, useState } from "react";

import axios from 'axios';

const Acceso_Estatus = ({ title, captions, props }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [disabled, setDisabled] = useState(true);

  // GUARDAR DATOS DEL JSON
  // const [Datos, setDatos_cliente] = useState(null);
  
  function handleGameClick() {
    setDisabled(!disabled);
  }

  // function Clientes() {
  //   const id_cliente = document.getElementById("id_cliente").value;
  //   console.log('ID: ',id_cliente);
  //   fetch('http://192.168.20.44/ServiciosClubAlpha/api/Miembro/'+id_cliente, {method: 'GET'})
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .then(setDatos_cliente(data))
  //   .catch(error => console.error(error))
  // }

  function Datos_Clientes(){
    const baseUrl = 'http://192.168.20.44/ServiciosClubAlpha/api/Miembro/';
    const id_cliente = document.getElementById("id_cliente").value;
    
    axios({
      method: 'get',
      url: `${baseUrl}${id_cliente}`,
    }).then((response) => {
      console.log(response.data);
    });
  }
  

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          <i>{title}</i>
        </Text>
      </CardHeader>
      <CardBody>
        <FormControl>
          <Input type="number" id="id_cliente" maxLength={5} placeholder='ID de Cliente' onChange={handleGameClick}/>
          <FormHelperText style={{ color: "gray" }}><b>* ID Cliente 50, tu debes colocar 00050</b></FormHelperText>
          <FormHelperText style={{ color: "black" }}><b>* Recuerda que la Longitud es de 5 Digitos</b></FormHelperText>
          <Button mt={4} colorScheme="teal" size="md" type="submit" disabled={disabled} onClick={Datos_Clientes}>Consultar</Button>
        </FormControl>
      </CardBody>
    </Card>
  );
};


export default Acceso_Estatus;

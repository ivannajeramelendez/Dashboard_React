// Chakra imports
import { Table, Tbody, Text, Th, Thead, Tr, useColorModeValue, } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, NumberInput, Input } from "@chakra-ui/react"
import { Button, ButtonGroup, Stack, Flex } from "@chakra-ui/react"
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React, { useEffect, useState } from "react";

const Datos_Clientes = ({ title, captions, props }) => {
  const textColor = useColorModeValue("gray.700", "white");

  // const [isLoading, setIsLoading] = useState(true);
  // const [Datos, setDatos_cliente] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (isLoading) {
  //     async function fetchData() {
  //       try {
  //         const URL_CLIENTE = "http://192.168.20.44/ServiciosClubAlpha/api/Miembro/65234";
  //         const settings = {
  //           method: 'GET',
  //           headers: {
  //               'Accept': 'application/json',
  //               'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             'Token':'77D5BDD4-1FEE-4A47-86A0-1E7D19EE1C74'
  //           })
  //         };

  //         const response = await fetch(URL_CLIENTE);
          
  //         if (response.ok) {
  //           const API_Datos_Cliente = await response.json();
  //           console.log('API_DATOS', API_Datos_Cliente);
  //           setDatos_cliente(API_Datos_Cliente);
  //           setError(null);
  //           setIsLoading(false);
  //         } else {
  //           setError("Hubo un error al obtener los datos");
  //         }
  //       } catch (error) {
  //         setError("No pudimos hacer la solicitud para obtener el cliente");
  //       }
  //     }
  //     fetchData();
  //   }
  // }, [isLoading]);

  // const randomDog = () => {
  //   setIsLoading(true);
  // };

  // if (isLoading) {
  //   return (
  //     <div className="Acceso_Estatus">
  //       <h1>Cargando...</h1>
  //     </div>
  //   );
  // }

  // if (error) { // ⬅️ mostramos el error (si es que existe)
  //   return (
  //     <div className="Acceso_Estatus">
  //       <h1>{error}</h1>
  //       <button onClick={randomDog}>Volver a intentarlo</button>
  //     </div>
  //   );
  // }
  
    
  return (
    <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          <i>{title}</i>
        </Text>
      </CardHeader>
      <CardBody>
        <Flex direction="column">
            <Flex alignItems="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                    NOMBRE: 
                </Text>
                <Text>
                    {/* {Datos.Nombre} {Datos.ApellidoPaterno} {Datos.ApellidoMaterno} */}
                </Text>
            </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Datos_Clientes;

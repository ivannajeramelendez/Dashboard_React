// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Acceso from "./components/Acceso_Estatus";
import Datos_Clientes from "./components/Datos_Clientes";
import { tablesTableData, dashboardTableData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Acceso title={"Información del Cliente"} />
      <Datos_Clientes title={"Datos del Cliente"} />
    </Flex>
  );
}

export default Tables;

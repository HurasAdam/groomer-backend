import { registerEmployee } from "./registerEmployee";
import { getReservations } from "./getReservations";
import { getEmployees } from "./getEmployees";
import { getCustomers } from "./getCustomers";
import {getServiceDetails} from "./getServiceDetails";
import { updateServiceDetails } from "./updateServiceDetails";
import { validateToken } from "../auth/validateToken";
import { getEmployeeDetails } from "./getEmployeeDetails";

const adminControllers = {
    registerEmployee,
    getReservations,
    getEmployees,
    getCustomers,
    getServiceDetails,
    updateServiceDetails,
    validateToken,
    getEmployeeDetails
}

export default adminControllers;
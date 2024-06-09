import { registerEmployee } from "./registerEmployee";
import { getReservations } from "./getReservations";
import { getEmployees } from "./getEmployees";
import { getCustomers } from "./getCustomers";
import {getServiceDetails} from "./getServiceDetails";
import { updateServiceDetails } from "./updateServiceDetails";

const adminControllers = {
    registerEmployee,
    getReservations,
    getEmployees,
    getCustomers,
    getServiceDetails,
    updateServiceDetails
}

export default adminControllers;
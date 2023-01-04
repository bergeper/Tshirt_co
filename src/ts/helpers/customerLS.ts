import { Customer } from "../models/customer";

let customersFromLS: Customer[] = [];

export function getCustomerFromLocalStorage(): Customer[] {
  customersFromLS = JSON.parse(localStorage.getItem("Customer") || "[]");
  let customers = customersFromLS.map((customer) => {
    return new Customer(customer.customerFirstname, customer.customerLastname);
  });
  return customers;
}

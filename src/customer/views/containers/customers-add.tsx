import * as React from "react";
import {Fragment} from "react";
import {CustomerForm} from "../components/customer-form";
import {Customer} from "../../entity";

export const CustomersAdd = () => {
  const data = {} as Customer;
  console.log('hi')
  return (
    <Fragment>
      <h1>Customer Form</h1>
      <CustomerForm data={data}/>
    </Fragment>
  )
}

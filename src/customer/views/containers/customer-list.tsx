import * as React from "react";
import {CustomerTable} from "../components/customer-table";
import {Fragment} from "react";
import {useFetchCustomersQuery} from "../../slice";
import {Link, Outlet} from "react-router-dom";

export const CustomerList = () => {
  const { data = [], isLoading } = useFetchCustomersQuery()
  return (
    <Fragment>
      <h1>Customers</h1>
      <Link to={'/customers/add'} >
       Add New Customer
      </Link>

      <CustomerTable data={data} isLoading={isLoading} />
    </Fragment>
  )
}

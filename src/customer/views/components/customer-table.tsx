import * as React from "react";
import {Customer} from "../../entity";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Fragment} from "react";

type CustomerTableProps = {
  data: Customer[],
  isLoading: boolean,
}

export const CustomerTable = ({data, isLoading}: CustomerTableProps) => {
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table title={'Customers'} aria-label={'Customers'} color={'primary'}>
          <TableHead>
            <TableRow>
              <TableCell variant={'head'} color={'primary'}>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading ? data.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.firstName}</TableCell>
                <TableCell>{customer.lastName}</TableCell>
                <TableCell>{customer.address}</TableCell>
              </TableRow>
            )) :
              <TableRow>
                <TableCell colSpan={3}>Loading</TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>

  )
}

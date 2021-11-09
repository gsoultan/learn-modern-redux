import * as React from "react";
import {Customer} from "../../entity";
import {Fragment} from "react";
import {Box, TextareaAutosize, TextField} from "@mui/material";

type CustomerFormProps = {
  data: Customer
}

export const CustomerForm = ({data}: CustomerFormProps) => {
  return (
    <Fragment>
      <Box component={'form'}>
        <TextField label={'First Name'} variant={'standard'} value={data.firstName}/>
        <TextField label={'Last Name'} variant={'standard'} value={data.lastName}/>
        <TextareaAutosize value={data.address} />
      </Box>
    </Fragment>
  )
}

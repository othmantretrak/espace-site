import * as React from "react";
import { FC } from "react";
import { Link, FieldProps } from "react-admin";

import { Customer } from "../types";

const CustomerLinkField: FC<FieldProps<Customer>> = (props) => {
  //console.log({ props });

  return props.record ? (
    <Link to={`/presentants/${props.record.id}`}>{props.record.fullname}</Link>
  ) : null;
};

export default CustomerLinkField;

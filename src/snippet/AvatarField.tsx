import * as React from "react";
import { FC } from "react";
import Avatar from "@material-ui/core/Avatar";
import { FieldProps } from "react-admin";
import { Customer } from "../types";

interface Props extends FieldProps<any> {
  className?: string;
  size?: string;
}

const AvatarField: FC<Props> = ({ record, size = "25", className }) =>
  record ? (
    <Avatar
      src={`${
        record.avatar
          ? record.avatar.url
          : "https://res.cloudinary.com/tretrak/image/upload/v1630822875/downloadd_s3wscd.png"
      }?size=${size}x${size}`}
      style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
      className={className}
    />
  ) : null;

export default AvatarField;

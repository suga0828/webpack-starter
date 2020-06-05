import * as React from "react";

export interface InputProps {
  placeholder: string;
}

export const Input = (props: InputProps) => <input className="input-component" placeholder={props.placeholder}/>;

import * as React from "react";

export interface ButtonProps {
  text: string;
}

export const Button = (props: ButtonProps) => <button className="button-component">{props.text}</button>;

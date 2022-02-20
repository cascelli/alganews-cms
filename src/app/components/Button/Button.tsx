import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import * as B from './Button.styles'

//export interface ButtonProps {
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

  variant: 'danger' | 'text' | 'primary'
  label: string
  //disabled?: boolean
}

//export default function Button({ label, variant, disabled }: ButtonProps) {
export default function Button({ label, variant, ref, ...props }: ButtonProps) {
  return <B.Wrapper
    {...props}
    variant={variant}
    //disabled={disabled}
  >
    { label }
  </B.Wrapper>
}
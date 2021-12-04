import { InputHTMLAttributes } from 'react'
import * as I from './Input.styles'

//export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}


//export default function Input({ label, ref, ...props }: InputProps) {
export default function Input({ label, ...props }: InputProps) {

  return <I.Wrapper>
    {
      label &&
        <span>
          { label }
        </span>
    }
    <input
    { ...props}
     type="text" 

    />
  </I.Wrapper>

}
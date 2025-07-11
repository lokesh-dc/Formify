import mongoose from 'mongoose'

export interface Validation {
  type?: string
  pattern?: string
  minLength?: number
  maxLength?: number
  customRule?: string
}

export interface Field {
  type: string
  label: string
  name: string
  required?: boolean
  options?: string[]
  isRequired?: boolean
  placeholder?: string
  validation?: Validation
}

export interface FormDoc extends mongoose.Document {
  title: string
  description: string
  fields: Field[]
}

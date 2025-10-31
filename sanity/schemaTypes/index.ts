import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../Scehmas/products'
import { category } from '../Scehmas/category'
import { user } from '../Scehmas/user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,user],
}

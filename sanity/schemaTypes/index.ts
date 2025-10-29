import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../Scehmas/products'
import { category } from '../Scehmas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category],
}

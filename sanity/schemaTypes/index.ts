import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../Scehmas/products'
import { category } from '../Scehmas/category'
import { navigation } from '../Scehmas/navigation'
import { user } from '../Scehmas/user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,user,navigation],
}

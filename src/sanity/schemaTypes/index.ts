import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { categorySchema } from './categories'
import { Review } from './review'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema,Review],
}

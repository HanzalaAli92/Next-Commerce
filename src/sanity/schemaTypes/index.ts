import { type SchemaTypeDefinition } from 'sanity'
import heroimages from './heroimages'
import product from './product'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ 
    product, category, heroimages, 
  ],
}

import { type SchemaTypeDefinition } from 'sanity'
import food from './foods'
import chef from './chefs'
import category from './category'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, category, order],
}

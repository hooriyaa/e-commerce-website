import { type SchemaTypeDefinition } from 'sanity'
import { AllProducts } from './allProducts'
import { TopCategory } from './topCategory'
import { FeaturedProducts } from './featuredProducts'
import { OurProduct } from './ourProducts'
import chairGallery from './chairGallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [AllProducts,TopCategory,FeaturedProducts,OurProduct,chairGallery],
}

export const allProductsQuery = `
  *[_type == "product"]{
    _id,
    title,
    slug,
    price,
    category,
    "imageUrl": images[0].asset->url,
    description
  }
`;

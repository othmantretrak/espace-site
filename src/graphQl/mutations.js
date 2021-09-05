import { gql } from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
  mutation createProduct(
    $name: String!
    $description: String!
    $price: Float!
    $image: ID
  ) {
    createProduct(
      input: {
        data: {
          name: $name
          description: $description
          price: $price
          image: $image
        }
      }
    ) {
      product {
        name
      }
    }
  }
`;
export const UPLOAD = gql`
  mutation ($file: Upload!) {
    upload(file: $file) {
      name
      id
      mime
      hash
      updated_at
      created_at
      size
      url
      provider
    }
  }
`;

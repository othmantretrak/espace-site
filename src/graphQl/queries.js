import { gql } from "@apollo/client";

export const PRESENTANS = gql`
  query GetPresentants {
    presentants: role(id: 4) {
      id
      users {
        id
        username
        avatar {
          url
        }
        fullname
        secteur
        tel
      }
    }
  }
`;
export const ORDERS = gql`
  query GetOrdes {
    commandes {
      id
      published_at
      address
      nb_articles
      articles
      client {
        fullname
        id
        avatar {
          url
        }
      }
      users_permissions_user {
        fullname
        avatar {
          url
        }
      }
    }
  }
`;
export const CLIENTS = gql`
  query GetClient {
    clients {
      id
      fullname
    }
  }
`;
export const PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      image {
        url
      }
      price
    }
  }
`;

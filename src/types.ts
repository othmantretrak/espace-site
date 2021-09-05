import { ReduxState, Record, Identifier } from "react-admin";
export type ThemeName = "light" | "dark";
export interface AppState extends ReduxState {
  theme: ThemeName;
}
export interface Product {
  id: number;
  description?: string;
  name: string;
  articles: string;
  image?: { url?: string };
  price: number;
  stock?: number;
}

export interface Customer extends Record {
  id: Identifier;
  fullname?: number;
  avatar?: { url?: string };
  stock?: number;
  adress?: string;
}
export interface Presentant {
  id: number;
  fullname: string;
  avatar?: { url?: string };
  commandes: Order[];
  clients: Client[];
  secteur?: string;
  tel?: number;
}
export interface Client {
  id: number;
  address: string;
  tel: string;
  fullname: string;
  avatar: { url?: string };
}
export interface Order {
  id: number;
  address?: string;
  articles: any;
  published_at?: string;
  nb_articles?: number;
  ref?: string;
  client?: Client;
  users_permissions_user?: Presentant;
}

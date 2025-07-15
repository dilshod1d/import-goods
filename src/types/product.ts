export interface AttributeValue {
  id: string;
  value: string;
  image?: string;
}

export interface Attribute {
  _id: string;
  name: string;
  values: AttributeValue[];
}

export interface Variant {
  sku: string;
  price: number;
  stock: number;
  images: string[];
  attributes: {
    attribute: string; // Attribute _id
    valueId: string; // AttributeValue id
  }[];
}

export interface Category {
  _id: string;
  name: string;
  parent: Category | null;
}

export interface Product {
  _id?: string;
  name: string;
  description?: string;
  baseSku: string;
  category?: string;
  moq: number;
  isActive: boolean;
  variants: Variant[];
}

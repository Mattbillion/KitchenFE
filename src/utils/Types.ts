import { ReactNode } from "react";

export interface ICard {
  img: string;
  foodname: string;
  price: number;
  desc: string;
  category: {
    name: string;
  };

}

export interface ICategory {
  name: string;
  img: string;

}

export interface myObj {
  name: string;
  setCurrentCategory?: (arg: string) => void
}

export interface Inputs {
  category: string;
  exampleRequired: string;
  foodname: string;
  price: string;
  desc: string;

}

export interface ILayout {

  children: ReactNode;
}



export interface ICard {
  img: string;
  foodname: string;
  price: number;
  desc: string;
  category: string;
}

export interface ICategory {
  name: string;
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
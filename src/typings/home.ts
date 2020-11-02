export enum CATEGORY_TYPES {
  ALL,
  REACT,
  VUE
}
export interface ILession {
  title: string,
  video: string,
  poster: string,
  price: string,
  category?:string
}

export interface ISlider {
  url: string
}

export interface ILessions {
  hasMore: boolean,  
  loading: boolean, 
  offset: number,
  limit: number,
  list: ILession[] 
}

export interface IHomeState {
  currentCategory: CATEGORY_TYPES,
  sliders: ISlider[],
  lessions: ILessions
}
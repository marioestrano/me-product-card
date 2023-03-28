import { Props as ProductCardProps } from '../components/ProductCard';
import {Props as ProductTitleProps} from '../components/PoductTitle';
import {Props as ProductImagesProps} from '../components/PoductImage';
import {Props as ProductButtonsProps} from '../components/ProductButtons';

export interface Product {
    id:string,
    title:string,
    img?:string;
  }

export interface ProductContextProps {
  counter: number,
  increaseBy: ( value:number ) => void,
  product: Product,
  maxCount?: number
}


// export interface ProductHOCProps {
//   ({ children, product }: ProductCardProps ): JSX.Element,
//   Title: ({title}: { title?:string | undefined;}) => JSX.Element,
//   Image: ({ img }: {img?: string | undefined; }) => JSX.Element,
//   Buttons: ({ className }: { className?: string}) => JSX.Element
  
// }

export interface ProductHOCProps {
  ({ children, product }: ProductCardProps ): JSX.Element,
  Title: ( Props: ProductTitleProps) => JSX.Element,
  Image: ( Props: ProductImagesProps) => JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element
  
}


export interface onChangeArgs { 
  product: Product,
  count: number,
}



export interface ProductInCart extends Product {
  count: number
}


export interface InitialValues {
  count?: number;
  maxCount?: number; 
}

export interface ProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount?: number,
  product: Product,

  increaseBy: ( value: number) => void,
  reset:() => void
}
import styles from '../styles/styles.module.css'

import { useProducts } from '../hooks/useProducts';
import React, { createContext,  } from 'react';
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interface';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



// interface ProductButtonnsProps {
//   increaseBy: ( value:number ) => void,
//   counter: number
// }


export interface Props {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children: ( args: ProductCardHandlers ) => JSX.Element,
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number,
  initialValues?: InitialValues
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }:Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached,reset} = useProducts( { onChange, product, value, initialValues} );


    return (
      <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}>

      <div className={ ` ${ styles.productCard } 
      ${className} ` }
      style={ style }>
      { children({
        count: counter,
        isMaxCountReached,
        maxCount: initialValues?.maxCount,
        product,
        increaseBy,
        reset
      }) }
      {/* <ProductImage img={ product.img}/>
      
      <ProductTitle title={product.title}/>
      
      <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
      </div>
    </Provider>
  )
}
 
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
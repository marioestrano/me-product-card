import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interface';

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number,
  initialValues?: InitialValues
}


export const useProducts = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
  const [counter, setCounter] = useState<number>( initialValues?.count || value );
  const isMounted = useRef(false);

  const isControled = useRef( !!onChange );

  const increaseBy = (value:number) => {
    
    if( isControled.current ) {
      return onChange!({ count: value, product })
    }
    let newValue = Math.max(value+counter,0)
    
        if ( initialValues?.maxCount ) {
          newValue = Math.min( newValue,initialValues.maxCount )
        }

     setCounter(newValue);
     onChange && onChange({ count: newValue, product }) //interesate forma de verificar si un eleento o variable existe ;
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if ( !isMounted.current ) return;

    setCounter( value );
  }, [value])

  useEffect(() => {
    isMounted.current = true;
  
  }, [])
  
  


  return {
    increaseBy,
    counter,
    setCounter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset
    
    
  }
}

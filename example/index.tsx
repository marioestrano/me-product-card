import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle} from '../.';

const product = {
  id:'1',
  title:'Coffee Mug - Card'
}


const App = () => {
  return (
    <>
       <ProductCard product={ product } 
      initialValues={{
        count: 4 ,
        // maxCount: 10
      }}>
        
        {
        ( {increaseBy, reset, isMaxCountReached, count} ) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons  />
        </>

        )}
    </ProductCard>


    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

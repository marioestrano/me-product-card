# ME-Product-Card

este es un paquete de pruebas de  

```
import from 
```

```
 <ProductCard product={ product }  key={product.id} 
          initialValues={{
            count: 4 ,
            maxCount: 10
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
       
```
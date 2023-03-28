import { ProductCard as ProductCardComponent } from './ProductCard';
import {  ProductHOCProps } from '../interfaces/interface';
import { ProductTitle } from './PoductTitle';
import { ProductImage } from './PoductImage';
import { ProductButtons } from './ProductButtons';
export {ProductImage} from './PoductImage';
export {ProductTitle} from './PoductTitle';
export {ProductButtons} from './ProductButtons';
// export * from './ProductCard';


export const ProductCard: ProductHOCProps = Object.assign( ProductCardComponent, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} );

export default ProductCard; 
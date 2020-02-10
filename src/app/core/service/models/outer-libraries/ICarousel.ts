import {IResponsive} from './IResponsive';

export interface ICarousel {
  slidesToShow?: number;
  slidesToScroll?: number;
  dots?: boolean;
  infinite?: boolean;
  arrows?: boolean;
  responsive?: Array<IResponsive>;
}

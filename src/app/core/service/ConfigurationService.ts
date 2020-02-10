import {ITextEditor} from './models/outer-libraries/ITextEditor';
import {ICarousel} from './models/outer-libraries/ICarousel';

export class ConfigurationService {
  editorConfiguration(): ITextEditor {
    return {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '10',
      width: 'auto',
      minWidth: '0',
      enableToolbar: true,
      showToolbar: true,
      toolbar: [
        ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript', 'orderedList', 'unorderedList', 'link', 'unlink']]
    };
  }

  bigCarouselConfiguration(): ICarousel {
    return {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      responsive:
        [
          {
            breakpoint: 1200,
            settings:
              {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
          },
          {
            breakpoint: 600,
            settings:
              {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                arrows: false
              }
          }]
    };
  }

  mediumCarouselConfiguration(): ICarousel {
    return {
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false,
      infinite: false,
      responsive:
        [
          {
            breakpoint: 700,
            settings:
              {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: false,
                arrows: false
              }
          }]
    };
  }

  challengeCarouselConfiguration(): ICarousel {
    return {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 600,
          settings:
            {
              dots: true,
              arrows: false,
              infinite: false,
            }
        }
      ]
    };
  }
}

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

  bigCarouselConfiguration() {
    return {
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 1800,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
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

  challengeCarouselConfiguration() {
    return {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 1800,
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

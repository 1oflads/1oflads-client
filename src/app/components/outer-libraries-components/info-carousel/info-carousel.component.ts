import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import {ICarousel} from '../../../core/service/models/outer-libraries/ICarousel';
import {SlickCarouselComponent, SlickItemDirective} from 'ngx-slick-carousel';
import {ConfigurationService} from '../../../core/service/ConfigurationService';

@Component({
  selector: 'lads-info-carousel',
  templateUrl: './info-carousel.component.html',
})
export class InfoCarouselComponent implements OnInit, AfterViewInit {

  @Input()
  public config: ICarousel = this.configurationService.bigCarouselConfiguration();

  @Input()
  public isStatic = false;

  @ContentChild('container', {static: false, read: false})
  public container: ElementRef;

  @ViewChild('slickModalSecond', {static: false, read: false})
  public carousel: SlickCarouselComponent;


  constructor(
    private configurationService: ConfigurationService,
    @Inject(PLATFORM_ID) private platformId: string,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const ngxSlickItem = new SlickItemDirective(
      this.container,
      this.platformId,
      this.carousel
    );

    ngxSlickItem.ngOnInit();

    if (this.isStatic) {
      this.changeDetector.detectChanges();
    }
  }

}

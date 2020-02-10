import {Component, DoCheck, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'lads-image-cropper',
  templateUrl: './image-cropper.component.html',
})
export class ImageCropperComponent implements OnInit {

  @Input()
  public maintainAspectRatio = true;

  @Input()
  public aspectRatio = 3.5 / 4;

  @Input()
  public resizeToWidth = 500;

  @Input()
  public imageChangedEvent: any = null;

  @Output()
  public onImageCropped = new EventEmitter<ImageCroppedEvent>();

  constructor() {
  }

  ngOnInit() {
  }



}

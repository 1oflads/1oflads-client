import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ConfigurationService} from '../../../core/service/ConfigurationService';

@Component({
  selector: 'lads-text-editor',
  templateUrl: './text-editor.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextEditorComponent),
    multi: true
  }]
})

export class TextEditorComponent implements OnInit, ControlValueAccessor {

  @Input()
  public configuration: object = this.configurationService.editorConfiguration();

  @Output()
  public changeEditorContent: EventEmitter<Event> = new EventEmitter<Event>();

  public value: any = null;
  public onChange: (_: any) => void = (_: any) => { };
  public onTouched: () => void = () => { };

  constructor(
    private configurationService: ConfigurationService
  ) {
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.updateChanges();
  }

  updateChanges(): void {
    this.onChange(this.value);
  }

}

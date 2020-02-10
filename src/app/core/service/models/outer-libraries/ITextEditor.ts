export interface ITextEditor {
  editable?: boolean;
  spellcheck?: boolean;
  height?: string;
  minHeight?: string;
  width?: string;
  minWidth?: string;
  enableToolbar?: boolean;
  showToolbar?: boolean;
  toolbar?: Array<Array<string>>;
}

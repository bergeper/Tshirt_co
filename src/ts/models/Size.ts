export class Size {
  constructor(
    public size: string // public medium: string, // public large: string
  ) {
    this.size = size;
  }
  sizeSmall() {
    this.size = "Small";
  }
  sizeMedium() {
    this.size = "Medium";
  }
  sizeLarge() {
    this.size = "Large";
  }
}

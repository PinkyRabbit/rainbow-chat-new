export class SettingsModel {
  windowHeight: number;
  windowWidth: number;
  navbarHeight: number;
  isOnTablet: boolean;

  constructor(input: any) {
    this.windowHeight = input.windowHeight;
    this.windowWidth = input.windowWidth;
    this.navbarHeight = input.navbarHeight;
    this.isOnTablet = input.isOnTablet;
  }
}

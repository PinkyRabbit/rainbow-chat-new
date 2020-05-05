export class MeModel {
  // tslint:disable-next-line:variable-name
  _id: string;
  username: string;
  nameColor: string;
  nameFont: string;
  textColor: string;
  textFont: string;
  soundNotification: string;
  soundVolume: number;
  selfTargetMessageTypes: string;
  statusText: string;
  minutesOnline: number;

  constructor(input: any) {
    this._id = input._id;
    this.username = input.username;
    this.nameColor = input.nameColor;
    this.nameFont = input.nameFont;
    this.textColor = input.textColor;
    this.textFont = input.textFont;
    this.soundNotification = input.soundNotification;
    this.soundVolume = input.soundVolume;
    this.selfTargetMessageTypes = input.selfTargetMessageTypes;
    this.statusText = input.statusText;
    this.minutesOnline = input.minutesOnline;
  }
}

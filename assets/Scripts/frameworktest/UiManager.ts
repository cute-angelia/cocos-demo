import { _decorator, Component, Node } from 'cc';
import ManagerBase from '../pkg/ManagerBase';
import { MessageType } from '../pkg/Message';
const { ccclass, property } = _decorator;

@ccclass('UiManager')
export class UiManager extends ManagerBase {

  static Instance: UiManager

  onLoad(): void {
    super.onLoad()
    UiManager.Instance = this;
  }

  SetMessageType(): number {
    return MessageType.Type_Ui
  }
}


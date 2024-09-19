import { _decorator, Component, Label, Node } from 'cc';
import { UiManager } from './UiManager';
import ComponentBase from '../pkg/ComponentBase';
import Message, { MessageType } from '../pkg/Message';
const { ccclass, property } = _decorator;

@ccclass('HpCtl')
export class HpCtl extends ComponentBase {

  hp: number = 100;

  start() {
    // 注册
    UiManager.Instance.RegisterReceiver(this)

  }

  ReceiveMessage(msg: Message): void {
    super.ReceiveMessage(msg)

    if (msg.Command == MessageType.Ui_RefreshHP) {
      this.ChangeHp(msg.Content)
    }
  }

  ChangeHp(hp: number) {
    this.hp += hp
    this.node.children[1].getComponent(Label).string = this.hp + ""
  }
}


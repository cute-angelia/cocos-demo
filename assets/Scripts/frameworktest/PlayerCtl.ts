import { _decorator, Component, Node, NodeEventType } from 'cc';
import MessageCenter from '../pkg/MessageCenter';
import { MessageType } from '../pkg/Message';
const { ccclass, property } = _decorator;

@ccclass('PlayerCtl')
export class PlayerCtl extends Component {
  start() {
    this.node.on(NodeEventType.MOUSE_DOWN, (event) => {
      // 血量-1
      MessageCenter.Instance().SendMessageCustom(MessageType.Type_Ui, MessageType.Ui_RefreshHP, -1)
    })
  }

  update(deltaTime: number) {

  }
}


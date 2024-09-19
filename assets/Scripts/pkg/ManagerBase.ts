import { _decorator, Component } from 'cc';
import Message, { MessageType } from './Message';
import ComponentBase from './ComponentBase';
import MessageCenter from './MessageCenter';
const { ccclass, property } = _decorator;

@ccclass('ManagerBase')
export default class ManagerBase extends ComponentBase {
  // 管理所有消息接收者（数组）
  ReceiveList: ComponentBase[] = [];

  // 当前管理类接收的具体类型
  messageType: number;

  // 接受消息
  ReceiveMessage(message: Message) {
    super.ReceiveMessage(message)

    // 转发消息
    if (message.Type != this.messageType) {
      return
    }

    // 向下层分发消息
    for (const element of this.ReceiveList) {
      element.ReceiveMessage(message)
    }

  }

  // 初始化
  onLoad() {
    // 消息类型
    this.messageType = this.SetMessageType()

    // 注册
    MessageCenter.Instance().Managers.push(this);
  }

  // 设置当前管理类接收的消息类型
  SetMessageType() {
    return MessageType.Type_Ui
  }

  // 注册
  RegisterReceiver(cb: ComponentBase) {
    this.ReceiveList.push(cb)
  }

}


// class EnemyManager extends ManagerBase {
//   SetMessageType() {
//     return MessageType.Type_Enemy
//   }
// }
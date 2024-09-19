import { _decorator, Component } from 'cc';
import Message, { MessageType } from './Message';
import ComponentBase from './ComponentBase';
import ManagerBase from './ManagerBase';
const { ccclass, property } = _decorator;

@ccclass('MessageCenter')
export default class MessageCenter {

  private static instanse: MessageCenter = null

  static Instance() {
    // 懒加载
    if (!MessageCenter.instanse) {
      MessageCenter.instanse = new MessageCenter()
      return MessageCenter.instanse
    }
    return MessageCenter.instanse
  }


  // 管理类列表
  Managers: ManagerBase[] = [];

  // 发送消息
  SendMessage(msg: Message) {
    for (const element of this.Managers) {
      element.ReceiveMessage(msg)
    }
  }

  // 发送消息
  SendMessageCustom(type: number, command: number, content: any) {
    let msg = new Message(type, command, content)
    for (const element of this.Managers) {
      element.ReceiveMessage(msg)
    }
  }

  RegeisterManager(mb: ManagerBase) {
    this.Managers.push(mb)
  }

}
import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Message')
export default class Message {
  // 类型
  Type: number
  // 命令
  Command: number
  // 参数
  Content: any

  constructor(type: number, command: number, content: any) {
    this.Type = type
    this.Command = command
    this.Content = content
  }
}

export class MessageType {
  static Type_Ui = 1;
  static Type_Npc = 2;
  static Type_Enemy = 3;
  static Type_Audio = 4;

  static Ui_RefreshHP = 101;
  static Ui_RefreshScore = 102;
  static Ui_RefreshInventory = 103; // 背包

  static Npc_np1 = 201
  static Npc_np2 = 202

  static Npc_Enemy1 = 301
  static Npc_Enemy2 = 302

  static Npc_Audio1 = 401
  static Npc_Audio2 = 402
}
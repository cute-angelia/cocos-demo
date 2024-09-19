import { _decorator, Component } from 'cc';
import Message from './Message';
const { ccclass, property } = _decorator;

@ccclass('ComponentBase')
export default class ComponentBase extends Component {

  // 接受消息
  ReceiveMessage(message: Message) { }
}
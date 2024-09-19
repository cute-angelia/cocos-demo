import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartGameCtl')
export class StartGameCtl extends Component {
  start() {

  }

  update(deltaTime: number) {

  }


  show() {
    this.node.active = true
  }

  hide() {
    this.node.active = false
  }
}


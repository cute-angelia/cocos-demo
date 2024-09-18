import { _decorator, Component, director, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('startGameCtl')
export class startGameCtl extends Component {


  playGameBird() {
    director.loadScene("bird");
  }

  start() {

  }

  update(deltaTime: number) {

  }
}


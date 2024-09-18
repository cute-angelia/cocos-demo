import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgCrl')
export class BgCrl extends Component {


  @property
  height: number = 852;

  start() {

  }

  update(deltaTime: number) {

    for (const element of this.node.children) {

      element.setPosition(element.getPosition().x / 2, element.getPosition().y - deltaTime * 50)



      if (element.getPosition().y <= -this.height) {
        element.setPosition(
          element.getPosition().x,
          element.getPosition().y + this.height * 2,
        )
      }

    }

  }
}


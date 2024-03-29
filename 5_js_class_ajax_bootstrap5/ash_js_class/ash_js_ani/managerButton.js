
import { NodeButton } from "./nodeButton.js";

export class ManagerButton {
    static instance = new ManagerButton()
    static getInstance(){
        return this.instance;
    }

    start(){    
        this.buttonList = {};     
        this.setButtonList();
    }
 
    setButtonList(){
        this.setButton("타이틀_버튼_게임시작_on" , "타이틀_버튼_게임시작_off");

        this.setButton("로비_버튼_start_on" , "로비_버튼_start_off");
        this.setButton("로비_버튼_공격증가_on" , "로비_버튼_공격증가_off");
        this.setButton("로비_버튼_체력증가_on" , "로비_버튼_체력증가_off");
        this.setButton("로비_버튼_이속증가_on" , "로비_버튼_이속증가_off");
        this.setButton("로비_버튼_뒤로가기_on" , "로비_버튼_뒤로가기_off");

        this.setButton("셀렉트_버튼_뒤로가기_on" , "셀렉트_버튼_뒤로가기_off");
        this.setButton("셀렉트_버튼_01_on" , "셀렉트_버튼_01_off");
        this.setButton("셀렉트_버튼_02_on" , "셀렉트_버튼_02_off");
        this.setButton("셀렉트_버튼_03_on" , "셀렉트_버튼_03_off");
        this.setButton("셀렉트_버튼_04_on" , "셀렉트_버튼_04_off");
        this.setButton("셀렉트_버튼_05_on" , "셀렉트_버튼_05_off");
        this.setButton("셀렉트_버튼_06_on" , "셀렉트_버튼_06_off");
        this.setButton("셀렉트_버튼_07_on" , "셀렉트_버튼_07_off");
        this.setButton("셀렉트_버튼_08_on" , "셀렉트_버튼_08_off");
        this.setButton("셀렉트_버튼_09_on" , "셀렉트_버튼_09_off");
        this.setButton("셀렉트_버튼_10_on" , "셀렉트_버튼_10_off");

    }

    setButton(buttonNameNormal , buttonNameOver){

        var nodeButton = new NodeButton(buttonNameNormal, buttonNameOver); 
        this.buttonList[buttonNameNormal] = nodeButton;
    }

    drawButton(buttonNameNormal , x , y){
        var nodeButton = this.buttonList[buttonNameNormal];
       // console.log(nodeButton);
        if(nodeButton == null){
            return;
        }
        nodeButton.draw(x , y);    
    }

    getButtonClick(buttonName , x , y){
        var nodeButton = this.buttonList[buttonName];
        if(nodeButton == null){
            return false;
        }
        var result = nodeButton.getMouseCollision(x , y);
        return result;
    }


}
import { LightningElement } from 'lwc';

export default class ButtonComponentStatefulButton extends LightningElement 
{
    isSelected1 = false;
    isSelected2 = false;
    isSelected3 = false;
    isSelected4 = false;
    isSelected5 = false;
    isSelected6 = false;
    isSelected7 = false;

    handleClick1() 
    {
        this.isSelected1 = !this.isSelected1;
    }
    handleClick2() 
    {
        this.isSelected2 = !this.isSelected2;
    }
    handleClick3() 
    {
        this.isSelected3 = !this.isSelected3;
    }
    handleClick4() 
    {
        this.isSelected4 = !this.isSelected4;
    }
    handleClick5() 
    {
        this.isSelected5 = !this.isSelected5;
    }
    handleClick6() 
    {
        this.isSelected6 = !this.isSelected6;
    }
    handleClick7() 
    {
        this.isSelected7 = !this.isSelected7;
    }


}
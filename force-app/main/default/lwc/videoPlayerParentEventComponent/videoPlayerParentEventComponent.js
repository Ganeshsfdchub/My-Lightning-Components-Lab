import { LightningElement } from 'lwc';

export default class VideoPlayerParentEventComponent extends LightningElement 
{
    vol = 0;

    method1()
    {
       this.vol = this.vol+1 ;

    }
    method2()
    {
       if(this.vol>0)
       {
        this.vol = this.vol-1 ;
       }
        
    }
}
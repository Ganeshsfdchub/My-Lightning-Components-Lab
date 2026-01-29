import { LightningElement } from 'lwc';

export default class VideoPlayerChildEventComponent extends LightningElement 
{
     incre(event)
    {
            this.dispatchEvent(new CustomEvent('increvnt'));
    }
    decre(event)
    {
           this.dispatchEvent(new CustomEvent('decrevnt'));
    }
}
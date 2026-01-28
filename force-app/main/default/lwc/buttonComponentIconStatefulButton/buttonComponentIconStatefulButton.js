import { LightningElement,track } from 'lwc';

export default class ButtonComponentIconStatefulButton extends LightningElement 
{

    @track likeState = false;
    @track answerState = false;
    @track likeStateDisabled = true;
    @track answerStateDisabled = false;

    handleLikeButtonClick() 
    {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() 
    {
        this.answerState = !this.answerState;
    }
    handleLikeButtonDisabledClick() 
    {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() 
    {
        this.answerStateDisabled = !this.answerStateDisabled;
    }

}
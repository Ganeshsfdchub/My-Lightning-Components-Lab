import { LightningElement } from 'lwc';

export default class AlertComponent extends LightningElement 
{
    async handleAlertClick() 
    {
        await LightningAlert.open
        ({
            message: 'this is the alert message',
            theme: 'error', // a red theme intended for error states
            label: 'Error!', // this is the header text
        });
        //Alert has been closed
    }
}


/*message: Message text that displays in the alert.
label: Header text, also used as the aria-label. Default string is Alert.
variant: Two values, header and headerless. Default value is header.
theme: Color theme for the header. The theme attribute supports the following options from SLDS:

default: white
shade: gray
inverse: dark blue
alt-inverse: darker blue
success: green
info: gray-ish blue
warning: yellow
error: red
offline: ​black*/
import { LightningElement } from 'lwc';

export default class InputControlsComponent extends LightningElement 
{
    countrynames = [
         
        {value:'Non' , label:'--None--'},
        {value:'IND' , label:'INDIA'},
        {value:'USA' , label:'UNITED STATES AMERICA'},
        {value:'AUS' , label:'AUSTRALIA'},
        {value:'CHN' , label:'CHINA'},
        {value:'GRM' , label:'GERMANY'},
        {value:'JPN' , label:'JAPAN'},
        {value:'UK' , label:'UNITED KINGDOM'},

        ];

     selectedcountrynames = 'Non'
}
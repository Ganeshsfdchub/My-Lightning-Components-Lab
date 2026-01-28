import { LightningElement } from 'lwc';

export default class CheckboxComboBoxComponent extends LightningElement 
{
    selectedcountrynames = 'IND';

    countrynames = [

                       {value:'IND' , label:'INDIA'},
                       {value:'USA' , label:'UNITED STATES AMERICA'},
                       {value:'AUS' , label:'AUSTRALIA'},
                       {value:'CHN' , label:'CHINA'},
                       {value:'GRM' , label:'GERMANY'},
                       {value:'JPN' , label:'JAPAN'},
                       {value:'UK' , label:'UNITED KINGDOM'},

        ];

        handlechange(event)
        {
            this.selectedcountrynames = event.target.value;
        }

}
import { LightningElement } from 'lwc';

export default class CheckboxGroupComponent extends LightningElement
 
{
 defaultselectedvalues = 'information';
  
   options =[{label:'New', value:'new'},
             {label:'in progress', value:'status'},
             {label:'Details', value:'information'},
             {label:'Finished', value:'completed'}      
    ];

    

    handleChange(event) 
    {
        this.defaultselectedvalues = event.detail.value;
    }
 
}
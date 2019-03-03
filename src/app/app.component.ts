import { Component } from '@angular/core';
import FORM1Definition from './FORM1.definition';
import countryData from './countryData';


@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
		public title = 'Base Project';
		public instance: any;
		public schema: any;
		public formData: any;
		public forms: any;
		public form: any;

		constructor() {
			this.initialize();
		}

		public initialize() {
			try {
				(<any>window).pageComponent = this;
				this.forms = {};
				this.form = {};
				this.instance = this;
				this.schema = { 
					FORM1: FORM1Definition

				};
				this.formData = {
					
				};

			} catch (error) {
				console.log(error);
			}
		}

	public onFirstNameChange(arg1, arg2, arg3, arg4, eventData) {
		console.log('onTaskTypeChange', arg1, arg2, arg3, arg4, eventData);
		return eventData.response;
	}

  public onDOBChange(eventData) {
    console.log('onDOBChange', eventData);
  }

	public postFetchACS(firstName, lastName, age, eventData) {
		console.log('postFetchACS', firstName, lastName, age, eventData);
		return eventData.response;
	}

	public fetchACSOptions(firstName, lastName, age, eventData) {
		console.log('fetchACSOptions', firstName, lastName, age, eventData);
		const searchTerm = eventData.searchTerm.toLowerCase();
		const data = { options: []} ;
	
		countryData.forEach(country => {
			const countryName = country.label;
			if (countryName.toLowerCase().search(searchTerm) >= 0) {
				data.options.push(country);
			}
		});
		return data;
	}

	public preFetchACS(firstName, lastName, age, eventData) {
		console.log('preFetchACS', firstName, lastName, age, eventData);
		return true;
	}

	protected _countryState = {
		IN:  [
				{
					label: 'Delhi',
					value: 'DL'
				},
				{
					label: 'Haryana',
					value: 'HR'
				},
				{
					label: 'Uttarakhand',
					value: 'UK'
				}

			],
		CH: [
			{
				label: 'Shanghai',
				value: 'SG'
			},
			{
				label: 'Hututu',
				value: 'HT'
			},
			{
				label: 'Xhalys',
				value: 'XH'
			}

		],
		USA: [
			{
				label: 'California',
				value: 'CAL'
			},
			{
				label: 'Satiago',
				value: 'ST'
			},
			{
				label: 'New York',
				value: 'NY'
			}

		]
		
		
	};

	public onParentFieldValueChange(formCode, parentFieldName, childFielsNameArr, change) {
		if (parentFieldName === 'country' &&  this._countryState[change]) {
			const stateField = this.forms[formCode].fieldsComponent.state;
			const options = this._countryState[change];
			stateField.options= options;

		}
	}

  
	public onSubmit() {
		console.log("On Submit");
	}

	public onCancel() {
		console.log("On Cancel");
	}
}

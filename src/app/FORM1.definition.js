let FormDef = {};
export default FormDef = {
  "code": "FORM1",
  "label": "About Person",
  "name": "about_person",
  "type": "simple",
  "hideLabel": false,
  "hidden": false,
  "helpText": [
    "Tell me about yourself."
  ],
  "collapse": true,
  "columns": 2,
  "order": 1,
  "fieldsDefaultProps": {
    "disabled": false,
    "labelPosition": "top",
    "labelAlignment": "left"
  },
  "onParentFieldValueChange": {
    "name": "onParentFieldValueChange",
    "arguments": "",
    "handlerFnOwner": "P"
  },
  "fields": [{
      "code": "FIELD01",
      "type": "TXT",
      "label": "First Name",
      "name": "first_name",
      "defaultValue": "",
      "placeholder": "Enter Your First Name",
      "helpText": "",
      "hidden": false,
      "disabled": false,
      "prefix": "T",
      "validations": [{
          "name": "maxlength",
          "value": 50
        },
        {
          "name": "minlength",
          "value": 5
        },
        {
          "name": "required",
          "value": ""
        }

      ],
      "events": [{
        "name": "change",
        "callbacks": [{
          "name": "onFirstNameChange",
          "arguments": ['arg1', 'arg2', 22, "arg4"],
          "handlerFnOwner": "P"
        }]
      }],
      "options": [],
      "isParent": false,
      "children": [],
      "order": 1
    },
    {
      "code": "FIELD02",
      "type": "TXT",
      "label": "Last Name",
      "name": "last_name",
      "defaultValue": "",
      "helpText": "Enter your last name.",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [{
          "name": "maxlength",
          "value": 30
        },
        {
          "name": "minlength",
          "value": 4
        },
        {
          "name": "required",
          "value": ""
        }
      ],
      "events": [],
      "isParent": false,
      "children": [],
      "options": [],
      "isChild": false,
      "parentName": "",
      "order": 2
    },
    {
      "code": "FIELD03",
      "type": "TXA",
      "label": "Write About Yourself",
      "name": "about_yourself",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "labelPosition": "left",
      "labelAlignment": "left",
      "validations": [{
        "name": "maxlength",
        "value": 255
      }],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 3
    },
    {
      "code": "FIELD04",
      "type": "CHK",
      "label": "Married",
      "name": "married",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 4
    },
    {
      "code": "FIELD05",
      "type": "MSL",
      "label": "Hobbies",
      "name": "hobbies",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "options": [{
          "label": "Reading",
          "value": "READ"
        },
        {
          "label": "Football",
          "value": "FB"
        },
        {
          "label": "Swimming",
          "value": "SWIM"
        },
        {
          "label": "Cricket",
          "value": "CRICKET"
        }, {
          "label": "Singing",
          "value": "Sing"
        }, {
          "label": "Dancing",
          "value": "Dance"
        }
      ],
      "events": [],
      "isParent": true,
      "children": ['default_title', 'default_notes'],
      "isChild": false,
      "parentName": "",
      "order": 5
    },
    {
      "code": "FIELD06",
      "type": "RAD",
      "label": "Gender",
      "name": "gender",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "Male",
          "value": "M"
        },
        {
          "label": "Female",
          "value": "F"
        }
      ],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 6
    },
    {
      "code": "FIELD07",
      "type": "SEL",
      "label": "Nationality",
      "name": "nationality",
      "defaultValue": "IN",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [{
        "name": "required",
        "value": ""
      }],
      "events": [],
      "options": [{
          "label": "Indian",
          "value": "IN"
        },
        {
          "label": "United States",
          "value": "USA"
        },
        {
          "label": "China",
          "value": "CH"
        }
      ],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 7
    },
    {
      "code": "FIELD08",
      "type": "TXT",
      "label": "Email Address",
      "name": "email_field",
      "defaultValue": "",
      "suffix": "@",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [{
        "name": "email",
        "value": ""
      }],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 8
    }, {
      "code": "FIELD09",
      "type": "DAT",
      "label": "Date Of Birth",
      "name": "dob",
      "defaultValue": '',
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [{
          "name": "minDate",
          "value": "02/28/2001"
        },
        {
          "name": "maxDate",
          "value": "03/28/2029"
        },
        {
          "name": "required",
          "value": ""
        }
      ],
      "events": [{
        "name": "bsValueChange",
        "callbacks": [{
          "name": "onDOBChange",
          "arguments": [],
          "handlerFnOwner": "P"
        }]
      }],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 9
    }, {
      "code": "FIELDSET1",
      "type": "FST",
      "label": "Address",
      "hideLabel": false,
      "collapse": true,
      "order": 10,
      "fields": [{
          "code": "FIELD10",
          "type": "TXT",
          "label": "Zip Code",
          "name": "zip_code",
          "defaultValue": "",
          "placeholder": "",
          "hidden": false,
          "disabled": false,
          "validations": [{
              "name": "digits",
              "value": ""
            },
            {
              "name": "min",
              "value": 100000
            },
            {
              "name": "maxlength",
              "value": 6
            }
          ],
          "events": [],
          "options": [],
          "isParent": false,
          "children": [],
          "isChild": false,
          "parentName": "",
          "order": 1
        }, {
          "code": "FIELD11",
          "type": "BLK",
          "label": "Blank Field",
          "name": "blank1",
          "defaultValue": "",
          "placeholder": "",
          "hidden": false,
          "disabled": false,
          "validations": [],
          "events": [],
          "options": [],
          "isParent": false,
          "children": [],
          "isChild": false,
          "parentName": "",
          "order": 2
        }, {
          "code": "FIELD12",
          "type": "SEL",
          "label": "Country",
          "name": "country",
          "defaultValue": '',
          "placeholder": "",
          "hidden": false,
          "disabled": false,
          "validations": [],
          "events": [],
          "options": [{
            "label": "Indian",
            "value": "IN"
          }, {
            "label": "United States",
            "value": "USA"
          }, {
            "label": "China",
            "value": "CH"
          }],
          "isParent": true,
          "children": ['state'],
          "parentName": "",
          "order": 3
        },
         {
          "code": "FIELD13",
          "type": "SEL",
          "label": "State",
          "name": "state",
          "defaultValue": '',
          "placeholder": "",
          "hidden": false,
          "disabled": false,
          "validations": [],
          "events": [],
          "options": [],
          "isParent": false,
          "children": [],
          "parentName": "",
          "order": 4
        },
        {
          "code": "FIELD14",
          "type": "TXT",
          "label": "City",
          "name": "city",
          "defaultValue": "",
          "placeholder": "",
          "hidden": false,
          "disabled": false,
          "validations": [],
          "events": [],
          "options": [],
          "isParent": false,
          "children": [],
          "isChild": false,
          "parentName": "",
          "order": 5
        }, {
          "code": "FIELD14",
          "type": "TXT",
          "label": "Street",
          "name": "street",
          "defaultValue": "",
          "placeholder": "",
          "hidden": false,
          "disabled": false,
          "validations": [],
          "events": [],
          "options": [],
          "isParent": false,
          "children": [],
          "isChild": false,
          "parentName": "",
          "order": 6
        }
      ] 
    },
    {
      "code": "FIELD10",
      "type": "HID",
      "label": "ID",
      "name": "id",
      "defaultValue": 123,
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 11
    },
    {
      "code": "FIELD11",
      "type": "TIME",
      "label": "Lucky Time for your",
      "name": "TIME",
      "defaultValue": '',
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [

      ],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 12
    },
    {
      "code": "FIELD12",
      "type": "MONTH",
      "label": "Lucky Month",
      "name": "month",
      "defaultValue": '',
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [

      ],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 13
    },
    {
      "code": "FIELD13",
      "type": "DATTIME",
      "label": "Best Date Time",
      "name": "date_time",
      "defaultValue": '',
      "placeholder": "TIME",
      "hidden": false,
      "disabled": false,
      "validations": [

      ],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 14
    }, 
    {
      "code": "FIELD14",
      "type": "ACS",
      "label": "Autocomplete Field Example (Enter country name)",
      "name": "acs_field3",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
        "value": 'default_option',
        "label": "Default Option"
      }],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 15,
      "searchData": {
        "url": window.location.href + "assets/data.json",
        "beforeFetchFn": {
          "name": "preFetchACS",
          "arguments": ['from', 'pre-acs', 'search'],
          "handlerFnOwner": "P"
        },
        "afterFetchFn": {
          "name": "postFetchACS",
          "arguments": ['from', 'post-acs', 'search'],
          "handlerFnOwner": "P"
        },
        "fetchFn": {
          "name": "fetchACSOptions",
          "arguments": ['from', 'fetch-acs', 'search'],
          "handlerFnOwner": "P"
        }
      },
      "multiple": true
    }, {
      "code": "FIELD15",
      "type": "BTN",
      "label": "Button Example",
      "name": "my_button1",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [{
        "name": "click",
        "callbacks": [{
          "name": "onButtonClick",
          "arguments": [],
          "handlerFnOwner": "P"
        }]
      }],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 16
    }, {
      "code": "FIELD16",
      "type": "BLK",
      "label": "Blank Field",
      "name": "blank1",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 17
    }, {
      "code": "FIELD17",
      "type": "ANC",
      "label": "Some Link Example",
      "hideLabel": true,
      "name": "link1",
      "defaultValue": "https://www.google.com",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 18
    }, {
      "code": "FIELD18",
      "type": "HTML",
      "label": "HTML Editor",
      "name": "html_editor",
      "defaultValue": "<p>My Default Value</p>",
      "suffix": "",
      "placeholder": "Placeholder",
      "hidden": false,
      "disabled": false,
      "validations": [{
        "name": "required",
        "value": ""
      }],
      "events": [{
        "name": "onContentChanged",
        "callbacks": [{
          "name": "onUserGroupChange",
          "arguments": ['quill', 'content', 'changed'],
          "handlerFnOwner": "P"
        }]
      }],
      "options": [],
      "isParent": false,
      "children": [],
      "isChild": false,
      "parentName": "",
      "order": 19,
      "quillConfig": null
    }
  ],
  "buttons": [{
      "code": "BUTTON1",
      "label": "Cancel",
      "name": "cancel_btn",
      "hidden": false,
      "disabled": false,
      "icon": "cancel",
      "events": [{
        "name": "click",
        "callbacks": [{
          "name": "onCancel",
          "arguments": [],
          "handlerFnOwner": "P"
        }]
      }],
      "order": 1
    },
    {
      "code": "BUTTON2",
      "label": "Save",
      "name": "save_btn",
      "hidden": false,
      "disabled": false,
      "icon": "save",
      "theme": "primary",
      "events": [{
        "name": "click",
        "callbacks": [{
          "name": "onSubmit",
          "arguments": [],
          "handlerFnOwner": "P"
        }]
      }],
      "order": 2
    }
  ]
};

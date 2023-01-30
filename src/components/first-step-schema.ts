import { RJSFSchema } from "@rjsf/utils";

var FirstStepSchema: RJSFSchema = {
  title: "Basic Details",
  type: "object",
  //required: ["tenure"],
  properties: {
    loanDetails: {
      type: "object",
      title: "Loan Details",
      required: ["tenure"],
      properties: {
        group: {
          type: "string",
          "anyOf": [
            {
              "type": "string",
              "enum": [
                "fortis"
              ],
              "title": "Fortis Hospital"
            },
            {
              "type": "string",
              "enum": [
                "sahyadriPune"
              ],
              "title": "Sahyadri Pune"
            },
            {
              "type": "string",
              "enum": [
                "apollo"
              ],
              "title": "Apollo Mumbai"
            }
          ],
          title: "Hospital Name"
        },
        amount: {
          type: "integer",
          minimum: 5000,
          maximum: 1000000,
          title: "Loan amount"
        },
        tenure: {
          type: "string",
          title: "Loan Tenure",
          "anyOf": [
            {
              "type": "string",
              "enum": [
                "6"
              ],
              "title": "Six Months"
            },
            {
              "type": "string",
              "enum": [
                "12"
              ],
              "title": "12 Months"
            },
            {
              "type": "string",
              "enum": [
                "24"
              ],
              "title": "24 Months"
            }
          ]
        },
        loanPurpose: {
          type: "string",
          title: "Loan Purpose",
          anyOf: [
            {
              "type": "string",
              "enum": [
                "Medical"
              ],
              "title": "Medical"
            },
            {
              "type": "string",
              "enum": [
                "Education"
              ],
              "title": "Education"
            }
          ]
        }
      }
    },
    applicantDetails: {
      type: "object",
      title: "Applicant Details",
      required: [],
      properties: {
        name: {
          title: "Applicant name",
          type: "string"
        },
        dob: {
          type: "string",
          format: "date",
          title: "Date of Birth"
        },
        "email": {
          type: "string",
          format: "email",
          title: "Email"

        }
      }
    }
  }
};

export default FirstStepSchema;
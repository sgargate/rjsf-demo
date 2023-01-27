import { RJSFSchema , UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import FirstStepSchema from "../first-step-schema";



const schema: RJSFSchema = FirstStepSchema;

  const uiSchema: UiSchema = {
   /*  "title": {
      "ui:classNames": "custom-title"
    } */
  };

  const formData = {
    loanDetails: {tenure: "6 months"}
  };

  const log = (type: any) => console.log.bind(console, type);
export default function DynamicForm() {
    return <Form schema={schema}
    validator={validator} uiSchema={uiSchema}  formData = {formData}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")} />
}
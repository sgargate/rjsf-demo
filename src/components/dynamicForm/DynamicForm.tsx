import { RJSFSchema , UiSchema, ObjectFieldTemplateProps} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import FirstStepSchema from "../first-step-schema";
import Box, {BoxProps} from "@mui/material/Box";


function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        width: '100%',
        maxWidth: '200px',
        ...sx,
      }}
      {...other}
    />
  );
}


const schema: RJSFSchema = FirstStepSchema;

  const uiSchema: UiSchema = {
    loanDetails: {
      "ui:ObjectFieldTemplate": ObjectFieldTemplate

    }
   /*  "title": {
      "ui:classNames": "custom-title"
    } */
  };

  function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
    return (
      <div>
        {props.title}
        {props.description}
        <Box sx={{ 
          display: 'flex',
    //      flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          borderRadius: 1, }}>
        {props.properties.map(element => 
          <Item>
            {element.content}
            </Item>
        )
        
        }
        </Box>
      </div>
    );
  }

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
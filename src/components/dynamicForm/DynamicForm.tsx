import { RJSFSchema , UiSchema, ObjectFieldTemplateProps, SubmitButtonProps, getSubmitButtonOptions} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import FirstStepSchema from "../first-step-schema";
import Box, {BoxProps} from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

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
function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  return (
    <div>
      <p style={{fontFamily: 'Inter', fontSize: '16px'}}>{props.title} </p>
      {props.description}
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: "1px solid #E1E5E8",
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

const schema: RJSFSchema = FirstStepSchema;

  const uiSchema: UiSchema = {
    loanDetails: {
      "ui:ObjectFieldTemplate": ObjectFieldTemplate,

    },
    applicantDetails: {
      "ui:ObjectFieldTemplate": ObjectFieldTemplate
    }

   /*  "title": {
      "ui:classNames": "custom-title"
    } */
  };

  const CustomButton = styled(Button)({
    width: "178px",
    height: "41px",
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "150%",
    color: "#FFFFFF",
    background: "#0D3AB3"
  })

  function SubmitButton(props: SubmitButtonProps) {
    const { uiSchema } = props;
    return (
      <Box sx = {{display: 'flex', justifyContent: "right"}}><CustomButton variant="contained">Next</CustomButton></Box>
    );
  };

  const formData = {
    loanDetails: {loanPurpose: "Medical"}
  };

  const log = (type: any) => console.log.bind(console, type);
export default function DynamicForm() {
    return <Form schema={schema}
    validator={validator} uiSchema={uiSchema}  formData = {formData}  templates = {{ButtonTemplates: { SubmitButton }}}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")} />
}
import React from 'react';
import SelectBoxInputs from "./content";
import JoditEditor from "jodit-react";
import {
    Form,
    Dropdown,
    Button
} from "semantic-ui-react";
import { DateInput } from 'semantic-ui-calendar-react';

const FormComponent = ({
    journalText,
    editor,
    content,
    setContent,
    dateValue,
    setDateValue,
    selectBoxValue,
    setSelectBoxValue,
    title,
    setTitle,
    config,
    handleSubmit
}) => {
    return (
        < Form onSubmit={() => handleSubmit} >
            <Form.Group widths="equal">
                < Form.Field >
                    <label > Title </ label>
                    <Form.Input value={title} onChange={
                        newValue => setTitle(newValue.target.value)
                    } />
                </ Form.Field>
                < Form.Field >
                < label > Ideas </ label>
                < Dropdown placeholder = {
                    selectBoxValue
                }
                fluid selection options = {
                    SelectBoxInputs.inputs
                }
                onChange={
                    (event, {name,value}) =>
                    {
                        setSelectBoxValue(value);
                        setTitle(value + title);
                    }
                }
                />
                </Form.Field>
            </ Form.Group>
            <Form.Field >
                < label > Date </ label>
                < DateInput
                    name = "date"
                    placeholder = "Date"
                    value = {
                        dateValue
                    }
                    iconPosition = "left"
                    onChange = {
                        (event, { name, value }) => {
                            setDateValue(value);
                        }
                    }
                />
            </Form.Field>
            <Form.Field>
                  < label > Diary </ label>
                  < JoditEditor ref={
                      editor
                  }
                      value={
                          content
                      }
                      config={
                          config
                      }
                      tabIndex={
                          1
                      }
                      onBlur={
                          newContent => setContent(newContent)
                      }
                      onChange={
                          newContent => {
                              journalText = newContent;
                          }
                      }
                  />
            </Form.Field>
            <Button type = 'submit' > Submit </ Button>
        </Form>
    )
}

export default FormComponent;
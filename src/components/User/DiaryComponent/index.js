import React, {useState, useRef} from 'react';
import "./styles.scss";
import JoditEditor from "jodit-react";
import {
    Button,
    Form,
    Dropdown
} from 'semantic-ui-react';

import {
    DateInput,
} from 'semantic-ui-calendar-react';
import journalService from '../../../services/journalService'
import SelectBoxInputs from "./content";

let journalText = '';

const DiaryComponent = () => {

  const editor = useRef(null)
  const [content, setContent] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [selectBoxValue, setSelectBoxValue] = useState('none');
  const [title, setTitle] = useState('')

  const config = {
    readonly: false
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    journalService.save();
  }

  return ( 
    < div className = "contentPadding" >
        < Form onSubmit={handleSubmit} >
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
    </ div>
  );
};

export default DiaryComponent;
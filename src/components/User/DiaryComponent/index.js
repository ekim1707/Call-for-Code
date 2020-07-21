import React, {useState, useRef} from 'react';
<<<<<<< HEAD
=======
import "./styles.scss";
>>>>>>> b0ed4741be0894d6781fa6a8079d92550586c644
import JoditEditor from "jodit-react";
import {
    Button,
    Form,
    Dropdown
} from 'semantic-ui-react';

import {
    DateInput,
} from 'semantic-ui-calendar-react';
<<<<<<< HEAD
=======
import journalService from '../../../services/journalService'
>>>>>>> b0ed4741be0894d6781fa6a8079d92550586c644
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
<<<<<<< HEAD
    console.log(event);
=======
    event.preventDefault();
    journalService.save();
>>>>>>> b0ed4741be0894d6781fa6a8079d92550586c644
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
<<<<<<< HEAD
                {/* <input placeholder = 'Title' value={title} / > */}
=======
>>>>>>> b0ed4741be0894d6781fa6a8079d92550586c644
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
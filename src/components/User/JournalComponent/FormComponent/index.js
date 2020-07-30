import React, { useRef, useState } from 'react';
import componentContent from "./content";
import JoditEditor from "jodit-react";
import {
    Form,
    Dropdown,
    Button
} from "semantic-ui-react";
import { DateInput } from 'semantic-ui-calendar-react';
import journalService from '../../../../services/journalService';

let journalText = '';

const FormComponent = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [selectBoxValue, setSelectBoxValue] = useState('none');
    const [title, setTitle] = useState('');

    const config = {
        readonly: false
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        journalService.save();
    }

    console.log(componentContent.inputs);

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>{componentContent.title}</label>
                    <Form.Input 
                        onChange={newValue => setTitle(newValue.target.value)} 
                        value={title} 
                    />
                </Form.Field>
                <Form.Field>
                    <label>{componentContent.ideas}</label>
                    <Dropdown 
                        onChange={(e, { value }) => {setSelectBoxValue(value); setTitle(value + title)}}
                        placeholder={selectBoxValue}
                        fluid 
                        selection 
                        options={componentContent.inputs}
                    />
                </Form.Field>
            </Form.Group>
            <Form.Field >
                <label>{componentContent.date}</label>
                <DateInput
                    onChange={(e, { value }) => setDateValue(value)}
                    name="date"
                    placeholder="Date"
                    value={dateValue}
                    iconPosition="left"
                />
            </Form.Field>
            <Form.Field>
                <label>{componentContent.diary}</label>
                <JoditEditor 
                    onChange={newContent => {journalText = newContent}}
                    onBlur={newContent => setContent(newContent)}
                    value={content}
                    config={config}
                    ref={editor}
                    tabIndex={1}
                />
            </Form.Field>
            <Button type='submit'>{componentContent.submit}</Button>
        </Form>
    )
}

export default FormComponent;
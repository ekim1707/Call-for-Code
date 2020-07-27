import React from 'react';
import componentContent from "./content";
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
                        placeholder={selectBoxValue}
                        fluid 
                        selection 
                        options={componentContent.inputs}
                        onChange={value => {setSelectBoxValue(value); setTitle(value + title)}}
                    />
                </Form.Field>
            </Form.Group>
            <Form.Field >
                <label>{componentContent.date}</label>
                <DateInput
                    onChange={value => setDateValue(value)}
                    name="date"
                    placeholder="Date"
                    value={dateValue}
                    iconPosition="left"
                />
            </Form.Field>
            <Form.Field>
                <label>{componentContent.diary}</label>
                <JoditEditor 
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => {journalText = newContent;}}
                />
            </Form.Field>
            <Button type='submit'>{componentContent.submit}</Button>
        </Form>
    )
}

export default FormComponent;
import React, {useState, useRef} from 'react';
import { 
    Grid,
    Button
} from 'semantic-ui-react';
import FormComponent from "./FormComponent";
import HistoryLogComponent from "./HistoryLogComponent";
import journalService from '../../../services/journalService';

let journalText = '';

const DiaryComponent = () => {

    const [isForm, setIsForm] = useState(true);
    
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
    <Grid.Column className = "contentPadding" width={14}>
        {isForm && (
            <FormComponent 
                journalText={journalText}
                editor={editor}
                content={content}
                setContent={setContent}
                dateValue={dateValue}
                setDateValue={setDateValue}
                selectBoxValue={selectBoxValue}
                setSelectBoxValue={setSelectBoxValue}
                title={title}
                setTitle={setTitle}
                config={config}
                handleSubmit={handleSubmit}
            />
        )}
        {!isForm && (
            <HistoryLogComponent />
        )}
    </Grid.Column>
  );
};

export default DiaryComponent;
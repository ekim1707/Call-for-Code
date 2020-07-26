import React, {useState, useRef} from 'react';
import componentContent from "./content";
import { 
    Grid,
    Header,
    Divider,
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
    const [title, setTitle] = useState('');

    const config = {
        readonly: false
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        journalService.save();
    }

  return ( 
    <Grid.Column style={{ padding: "0 30px" }} width={14}>
        <Header style={{
            width: "90%",
            margin: "2rem 0",
            color: "#93AFD6",
            fontSize: "6vh",
            textAlign: "left"
        }}>{componentContent.TITLE}</Header>
        <Divider style={{ borderTop: "3px solid rgba(34,36,38,.15)" }} />
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
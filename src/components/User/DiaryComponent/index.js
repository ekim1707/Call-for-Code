import React, {useState, useRef} from 'react';
import componentContent from "./content";
import { 
    Grid,
    Header,
    Divider,
    Container,
    Button,
    Icon
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
    <Grid.Column style={{ 
        padding: "0 30px" 
    }} width={14}>
        <Container style={{
            display: "flex",
            width: "100%",
            margin: "2em 0"
        }}>
            <Header style={{
                margin: "0",
                color: "#93AFD6",
                fontSize: "6vh",
                textAlign: "left"
            }}>{componentContent.TITLE}</Header>
            <Button 
                onClick={() => setIsForm(true)}
                style={
                    isForm ? { 
                        margin: "1em .5em 1em 1em",
                        background: "#F6C469" 
                    } : { 
                        margin: "1em .5em 1em 1em",
                        background: "rgb(147, 175, 214)" 
                    }
                } 
                size="big"
                icon
            >
                <Icon name="pencil" />
            </Button>
            <Button 
                onClick={() => setIsForm(false)}
                style={
                    isForm ? { 
                        margin: "1em 1em 1em .5em",
                        background: "rgb(147, 175, 214)" 
                    } : { 
                        margin: "1em 1em 1em .5em",
                        background: "#F6C469" 
                    }
                } 
                size="big"
                icon
            >
                <Icon name="file alternate outline" />
            </Button>
        </Container>
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
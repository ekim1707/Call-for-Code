import React, { useState } from 'react';
import "./styles.scss"
import componentContent from "./content";
import { 
    Grid,
    Header,
    Divider,
    Button,
    Icon
} from 'semantic-ui-react';
import FormComponent from "./FormComponent";
import EntryLogComponent from "./EntryLogComponent";
import { DateInput } from "semantic-ui-calendar-react";

const JournalComponent = () => {
    const [isForm, setIsForm] = useState(true);
    const [dateValue, setDateValue] = useState("");

    console.log(dateValue);

    return ( 
        <Grid.Column 
            style={{ 
                padding: "0 30px" 
            }} 
            width={14}
        >
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <Header style={{
                    margin: "2rem 0",
                    color: "#93AFD6",
                    fontSize: "6vh",
                    textAlign: "left"
                }}>
                    {componentContent.TITLE}
                </Header>
                <Button 
                    onClick={() => setIsForm(true)}
                    style={isForm ? { 
                        margin: "1em .5em 1em 1em",
                        background: "#F6C469" 
                    } : { 
                        margin: "1em .5em 1em 1em",
                        background: "rgb(147, 175, 214)" 
                    }} 
                    size="massive"
                    icon
                >
                    <Icon name="pencil" style={{ color: "#fff" }} size="large" />
                </Button>
                <Button 
                    onClick={() => setIsForm(false)}
                    style={isForm ? { 
                        margin: "1em 1em 1em .5em",
                        background: "rgb(147, 175, 214)" 
                    } : { 
                        margin: "1em 1em 1em .5em",
                        background: "#F6C469" 
                    }} 
                    size="massive"
                    icon
                >
                    <Icon name="file alternate outline" style={{ color: "#fff" }} size="large" />
                </Button>
                {!isForm && (
                    <DateInput
                        className="oldDateInputContainer"
                        name="old date"
                        placeholder="Date"
                        value={dateValue}
                        iconPosition = "left"
                        onChange = {(e, {value}) => setDateValue(value)}
                        style={{
                            border: "3px solid #F6C469",
                            borderRadius: ".28571429rem"
                        }}
                    />
                )}
            </div>
            <Divider style={{ 
                marginTop: 0,
                borderTop: "3px solid rgba(34,36,38,.15)" 
            }} />
            {isForm && (
                <FormComponent />
            )}
            {!isForm && (
                <EntryLogComponent
                    dateValue={dateValue}
                />
            )}
        </Grid.Column>
    );
};

export default JournalComponent;
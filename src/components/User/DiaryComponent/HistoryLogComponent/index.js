import React from 'react';
import content from "./content";
import {
    Grid, 
    List,
    Divider
} from "semantic-ui-react";

const HistoryLogComponent = ({
    oldDateValue
}) => {
    return (
        <Grid style={{ 
            margin: 0,
            padding: 0
        }}>
            <Grid.Row style={{
                height: "10vh",
                padding: 0,
                overflowY: "scroll"
            }}>
                <List ordered>
                    <List.Item as='a'>Getting Started</List.Item>
                    <List.Item as='a'>Introduction</List.Item>
                    <List.Item as='a'>Review</List.Item>
                    <List.Item as='a'>Getting Started</List.Item>
                    <List.Item as='a'>Introduction</List.Item>
                    <List.Item as='a'>Review</List.Item>
                    <List.Item as='a'>Getting Started</List.Item>
                    <List.Item as='a'>Introduction</List.Item>
                    <List.Item as='a'>Review</List.Item>
                </List>
            </Grid.Row>
            <Divider style={{ margin: "1rem 0" }} />
            <Grid.Row style={{ 
                height: "55vh",
                padding: "0 0 1rem 0",
                overflowY: "scroll"
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent. Mi quis hendrerit dolor magna. Semper eget duis at tellus. Justo eget magna fermentum iaculis eu. At in tellus integer feugiat. Ut sem viverra aliquet eget sit amet. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Sed adipiscing diam donec adipiscing tristique risus nec. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Pharetra diam sit amet nisl. Nec ultrices dui sapien eget mi proin sed. Bibendum neque egestas congue quisque. Non tellus orci ac auctor augue mauris augue neque. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Sagittis eu volutpat odio facilisis mauris sit. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Sit amet dictum sit amet justo donec enim diam vulputate. Feugiat in ante metus dictum at tempor commodo ullamcorper.

Risus at ultrices mi tempus imperdiet nulla. Ipsum dolor sit amet consectetur adipiscing elit. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Tellus cras adipiscing enim eu. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Proin fermentum leo vel orci porta non pulvinar. Dui id ornare arcu odio. Vitae proin sagittis nisl rhoncus mattis. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Sit amet consectetur adipiscing elit. Enim blandit volutpat maecenas volutpat blandit. Purus ut faucibus pulvinar elementum integer. Convallis convallis tellus id interdum. Consectetur adipiscing elit duis tristique.

Purus semper eget duis at tellus at. A arcu cursus vitae congue mauris rhoncus. Sagittis orci a scelerisque purus semper eget duis at tellus. Ut pharetra sit amet aliquam id. Blandit aliquam etiam erat velit scelerisque. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Sollicitudin ac orci phasellus egestas. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Ultrices vitae auctor eu augue ut lectus. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Sodales neque sodales ut etiam. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. In vitae turpis massa sed elementum tempus egestas sed. Habitasse platea dictumst vestibulum rhoncus.
            </Grid.Row>
        </Grid>
    )
}

export default HistoryLogComponent;
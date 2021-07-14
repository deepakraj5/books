import React from 'react'
import { Grid, Divider, Icon, Segment, List } from 'semantic-ui-react'


const Profile = () => {
    return (
        <div className="profile">

          <Grid stackable>

              <Grid.Row>

                <Grid.Column width={5}>

                  <Segment>
                    <img src='https://bsmedia.business-standard.com/_media/bs/img/article/2018-03/22/full/1521664011-0145.jpg' alt="profile" />
                  </Segment>

                  <Divider />

                  <Segment>
                    
                    <h4>Works <Icon name='bolt' /></h4>

                    <List divided relaxed>
                      <List.Item>
                        <List.Icon name='book' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='book' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='book' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                        </List.Content>
                      </List.Item>
                    </List>

                  </Segment>


                </Grid.Column>

                <Grid.Column width={8}>

                    <div className="profile-right">
                      
                        <Segment>
                          <h4>Mark Zuckerberg</h4>
                          <p>Business man</p>
                          <Icon name='location arrow' /> Menlo Park, California, United States
                        </Segment>

                        <Divider />

                        <Segment>
                          <h4>About <Icon name='user' /></h4>

                          <Grid container>
                          <Grid.Row>
                              <Grid.Column width={8}>
                                <h4>Email</h4>
                              </Grid.Column>
                              <Grid.Column width={8}>
                                <p>deepak@gmail.com</p>
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column width={8}>
                                <h4>Site</h4>
                              </Grid.Column>
                              <Grid.Column width={8}>
                                <p>deepak.com</p>
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column width={8}>
                                <h4>Gender</h4>
                              </Grid.Column>
                              <Grid.Column width={8}>
                                <p>Male</p>
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column width={8}>
                                <h4>Address</h4>
                              </Grid.Column>
                              <Grid.Column width={8}>
                                <p>1 328 kerala thottam thulukkanur </p>
                                <p>mullaivadi po attur tk salem</p>
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column width={8}>
                                <h4>Phone</h4>
                              </Grid.Column>
                              <Grid.Column width={8}>
                                <p>9489766206</p>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>

                        </Segment>

                    </div>

                </Grid.Column>

              </Grid.Row>

          </Grid>

        </div>
    );
}


export default Profile
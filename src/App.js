import React from 'react';
import { Font, AppLoading } from 'expo';
import {
  Container, Header, Title,
  Content, Footer, FooterTab,
  Button, Left, Right,
  Body, Icon, Text,
} from 'native-base';

import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf'; // eslint-disable-line camelcase
import Feather from '@expo/vector-icons/fonts/Feather.ttf';
import Ionicons from '@expo/vector-icons/fonts/Ionicons.ttf';

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium,
      Feather,
      Ionicons,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" type="Feather" />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontFamily: 'Ionicons' }}>Expo NativeBase</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text style={{ fontFamily: 'Feather' }}>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

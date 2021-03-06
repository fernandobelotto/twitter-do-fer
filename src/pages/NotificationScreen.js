import React from 'react'
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon, Header, Avatar, Button } from 'react-native-elements'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view'
import Tweet from '../components/Tweet'
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)
const initialLayout = { width: Dimensions.get('window').width }

const NotificationScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Mentions' },
  ])

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        containerStyle={{
          height: 60,
          padding: 20,
          backgroundColor: 'transparent',
        }}
      >
        <Avatar rounded />
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#13171A' }}>
          Notifications
        </Text>
        <Icon name='settings' type='feather' color='#1DA1F3' />
      </Header>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor='#1DA1F3'
            indicatorStyle={{ backgroundColor: '#1DA1F3' }}
            inactiveColor='#657686'
            style={{ backgroundColor: 'white' }}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  )
}

export default NotificationScreen
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
})

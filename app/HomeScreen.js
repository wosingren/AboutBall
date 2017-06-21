import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.contain}>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Detail', {user: 'ty'})}
                    title="TO Detail"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { AppConsumer } from '../app_context_provider';
export const NewsCard = ({ item, navigation }) => {

    return (
        <AppConsumer>
            {appConsumer =>

            (<TouchableHighlight activeOpacity={10} underlayColor="#DDDDDD"

                onPress={() => onCardPressed(item, navigation)}>
                <View style={[styles.container, { backgroundColor: appConsumer.theme.colors.secondry }]}>
                    <View style={styles.textBox}>
                        <Text style={styles.author}>
                            {item.author}
                        </Text>
                        <Text style={[styles.title, { color: appConsumer.theme.colors.text }]}>
                            {item.title}
                        </Text>
                    </View>

                    <Image
                        style={styles.imgaeThumbnail}
                        source={{
                            uri: item.urlToImage,
                        }}
                    />
                </View ></TouchableHighlight>)
            }

        </AppConsumer >


    );

};
export const onCardPressed = (item, navigation) => {
    navigation.navigate('Detailed News', { item: item });
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderRadius: 6,
        margin: 12,
        borderColor: '#d7d7d7',
        padding: 8,
    },
    imgaeThumbnail: {
        alignSelf: 'center',
        width: 80,
        resizeMode: 'center',
        height: 80,
    },
    title: {
        flexWrap: 'wrap',
        fontSize: 16,
    },
    author: {
        flexWrap: 'wrap',
        color: 'grey',
        fontWeight: '300',
        fontSize: 8,
    },
    textBox: {
        flexDirection: 'column',
        width: 250,
    },
});

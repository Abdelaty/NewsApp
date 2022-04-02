/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
export function SearchCard(item) {
    console.log('item');
    console.log(item);
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 0.5,
            borderRadius: 6,
            margin: 12,
            borderColor:'#DCDCDC',
            padding: 8,
        },
        imgaeThumbnail: {
            alignSelf: 'flex-end',
            width: 80,
            resizeMode: 'center',
            height: 80,
        },
        title: {
            flexWrap: 'wrap',
            color: '#000000',
            fontSize: 18,
        },
        author: {
            flexWrap: 'wrap',
            color: 'grey',
            fontWeight:'300',
            fontSize: 8,
        },
        textBox: {
            flexDirection: 'column',
            width: 250,
        }
    });
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.author}>
                    {item.author}
                </Text>
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>

            <Image
                style={styles.imgaeThumbnail}
                source={{
                    uri: item.urlToImage,
                }}
            />
        </View >


    );
}

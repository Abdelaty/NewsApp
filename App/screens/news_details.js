/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StatusBar, ImageBackground, ScrollView, Linking, StyleSheet } from 'react-native';
import { AppConsumer } from '../app_context_provider';

export function DetailedNews({ route, navigation }) {
    // const item = useNavigation().getParam('item');
    const { item } = route.params;

    console.log(item);

    return (
        <AppConsumer>
            {appConsumer =>

            (<SafeAreaView style={{ flex: 1, backgroundColor: appConsumer.theme.colors.primary }}>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />

                <ImageBackground
                    source={{ uri: item.urlToImage }}
                    imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                    style={{
                        flex: 1,
                        resizeMode: 'cover',
                    }}
                >
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ flex: 1 }} />
                        <ScrollView style={[{ backgroundColor: appConsumer.theme.colors.primary }, styles.newsContent]}>
                            <View style={styles.newsInfoBar}>
                                <View style={[styles.newsInfo, { color: appConsumer.theme.colors.text }]}>
                                    <Text>Source: {item.source.name}</Text>
                                </View>
                            </View>

                            <View>
                                <Text style={[{ fontWeight: 'bold', fontSize: 20, marginTop: 30 }, { color: appConsumer.theme.colors.text }]}>{item.title}</Text>
                                <Text style={{ fontSize: 16, paddingTop: 30, paddingBottom: 10  ,color:appConsumer.theme.colors.secondry,}}>{item.description}</Text>
                                <Text style={{
                                    fontSize: 15, flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    color:appConsumer.theme.colors.text,
                                }}>{item.content}</Text>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </ImageBackground>
            </SafeAreaView>
            )
            }

        </AppConsumer >
    );
}

const styles = StyleSheet.create({
    backIconStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 60,
        left: 20,
        borderRadius: 10,
        padding: 5,
    },
    newsContent: {
        flex: 5,
        // backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    newsInfoBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    newsInfo: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#A9D4FD',
        borderRadius: 10,
    },
});
export default DetailedNews;

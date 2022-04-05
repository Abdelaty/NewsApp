/* eslint-disable prettier/prettier */
// List.js
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NewsCard } from '../components/search_card';
import { useTheme } from '@react-navigation/native';

// the filter
export const List = ({ searchPhrase, setClicked, data, onRefresh, refreshing }) => {
    const { colors } = useTheme();

    const renderItem = ({ item }) => {
        if (searchPhrase === '') {
            return NewsCard({ item, colors });
        }
        if (
            item.title
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
        ) {
            return NewsCard({ item, colors });
        }
    };

    return (

        <View
            onStartShouldSetResponder={() => {
                setClicked(false);
            }}
        >
            <FlatList style={styles.list__container}
                data={data}
                onRefresh={onRefresh()}
                refreshing={refreshing}
                scrollEnabled={true}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list__container: {
        height: '95%',
        width: '100%',
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        fontStyle: 'italic',
    },
});

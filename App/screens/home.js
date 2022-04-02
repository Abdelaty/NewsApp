/* eslint-disable prettier/prettier */

import * as React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { fetchNews } from '../services/news/news_api';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { SearchCard } from '../components/search_card';

export class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }
    componentDidMount() {
        fetchNews().then(response => this.setState({ data: response, isLoading: false }));
    }

    render() {
        const { data, isLoading } = this.state;
        if (isLoading) {
            return (
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={'large'} />
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, padding: 12, backgroundColor: '#FFFFFF' }}>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            onRefresh={() => this.onRefresh()}
                            refreshing={this.state.isLoading}
                            scrollEnabled={true}
                            data={data.data}
                            renderItem={({ item }) => (
                                SearchCard(item)
                            )}
                        />
                    )
                    }
                </View>
            );
        }

    }
    onRefresh() {
        this.setState({ isLoading: true }, () => { fetchNews().then(response => this.setState({ data: response, isLoading: false })); });
    }
}
// function mapStateToProps(state) {
//     return {
//         news: state.news,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         ...bindActionCreators({ fetchNews }, dispatch),
//     };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);

/* eslint-disable prettier/prettier */

import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { fetchNews } from '../services/news/news_api';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { SearchBar } from '../components/search_bar';
import { List } from '../components/news_list';


export class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            searchPhrase: '',
            clicked: false,
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
                        <>
                            <SearchBar
                                searchPhrase={this.searchPhrase}
                                setSearchPhrase={this.setSearchPhrase}
                                clicked={this.state.clicked}
                                setClicked={() => this.setClicked}
                            />
                            <List
                                onRefresh={() => this.onRefresh}
                                refreshing={this.state.isLoading}
                                scrollEnabled={true}
                                data={data.data}
                                setClicked={() => this.setClicked}
                                searchPhrase={this.state.searchPhrase}
                            />
                        </>
                    )
                    }
                </View>
            );
        }

    }
    onRefresh = () => {
        this.setState({ isLoading: true }, () => { fetchNews().then(response => this.setState({ data: response, isLoading: false })); });
    }
    setSearchPhrase = (searchPharse) => {
        this.setState({ searchPhrase: searchPharse });
    }
    setClicked = () => {
        this.setState({ clicked: false });
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

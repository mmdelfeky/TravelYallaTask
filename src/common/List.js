import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FlatList, View as NativeView} from 'react-native';

import View from './View';
import Text from './Text';
import Indicator from './Indicator';
import {getTheme} from './Theme';
import {
  BasePropTypes,
  dimensionsStyles,
  borderStyles,
  backgroundColorStyles,
} from './Base';
import Network from './Base/Network';

class List extends Network {
  static propTypes = {
    ...BasePropTypes,
    ...Network.propTypes,
    columns: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object),
    noResultsLabel: PropTypes.string,
    rowRenderer: PropTypes.func,
    rowHeight: PropTypes.number,
    indicatorColor: PropTypes.string,
    errorLabelColor: PropTypes.string,
    noResultsLabelColor: PropTypes.string,
    retryButtoncolor: PropTypes.string,
    retryButtonBackgroundColor: PropTypes.string,
    flatlist: PropTypes.bool,
  };

  static defaultProps = {
    ...Network.defaultProps,
    ...getTheme().list,
    columns: 1,
    data: [],
    rowHeight: 20,
    flatlist: true,
  };

  constructor(props) {
    super(props);

    this.mainIndicator = 'loading';

    this.state = {
      ...super.state,
      firstFetchDone: !props.apiRequest && !props.firebaseRequest,
      refreshing: false,
      loading: false,
      dataProvider: props.flatlist
        ? {_data: props.data}
        : this.dataProvider.cloneWithRows(props.data),
      errorLabel: '',
    };
  }

  componentDidMount() {
    super.componentDidMount();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    super.UNSAFE_componentWillReceiveProps(nextProps);

    if (nextProps.refreshControl !== this.props.refreshControl) {
      if (this.state.loading) {
        return;
      }
      this.reload();
    }
  }

  componentWillUnmount() {
    super.componentWillUnmount();
  }

  setStartFetching() {
    this.setState({
      errorLabel: '',
    });
  }

  setData = (data, cb) => {
    this.setState(
      {
        firstFetchDone: true,
        dataProvider: this.props.flatlist
          ? {_data: data}
          : this.dataProvider.cloneWithRows(data),
      },
      cb,
    );
  };

  setError = (errorLabel) => {
    this.setState({
      firstFetchDone: true,
      errorLabel,
    });
  };

  setEndFetching = () => {
    this.setState({
      refreshing: false,
      loading: false,
    });
  };

  addItemToList = (item) => {
    const {_data} = this.state.dataProvider;

    const newData = [..._data, item];

    this.setData(newData);
  };

  removeItemFromList = (id) => {
    const {_data} = this.state.dataProvider;

    const index = _data.findIndex(
      (item) => Object.getDeepProp(item, this.props.idPathInData) === id,
    );

    const newData = [..._data.slice(0, index), ..._data.slice(index + 1)];

    this.setData(newData);
  };

  updateItemInList = (id, changedData, changedDataCB = () => ({})) => {
    const {_data} = this.state.dataProvider;

    const index = _data.findIndex(
      (item) =>
        Object.getDeepProp(item, this.props.idPathInData || 'id') === id,
    );

    _data[index] = {
      ..._data[index],
      ...changedData,
      ...changedDataCB(_data[index]),
    };
    this.setData(_data);
  };

  renderFooter = () => {
    if (this.state.refreshing) {
      return null;
    }

    if (this.state.loading || !this.state.firstFetchDone) {
      return (
        <View centerX padding={5}>
          <Indicator color={this.props.indicatorColor} size={12} />
        </View>
      );
    }

    if (this.state.errorLabel) {
      return (
        <View centerX padding={10}>
          <Text bold color={this.props.errorLabelColor}>
            {this.state.errorLabel}
          </Text>
        </View>
      );
    }

    if (this.state.dataProvider._data.length === 0) {
      if (this.props.noResultsComponent) {
        return React.cloneElement(this.props.noResultsComponent);
      }
      return (
        <View centerX padding={15}>
          <Text bold color={this.props.noResultsLabelColor}>
            {this.props.noResultsLabel || 'No Results Found'}
          </Text>
        </View>
      );
    }

    return null;
  };

  renderFlatList = () => (
    <FlatList
      numColumns={this.props.columns}
      horizontal={false}
      contentContainerStyle={
        this.props.columns > 1
          ? {
              flex: 1,
              flexDirection: this.props.rtl ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
              justifyContent: this.state.loading ? 'center' : 'space-between',
            }
          : {}
      }
      data={this.state.dataProvider._data}
      keyExtractor={(item, index) => String(index)}
      renderItem={({item}) =>
        React.cloneElement(this.props.rowRenderer(item), {
          addItemToList: this.addItemToList,
          updateItemInList: this.updateItemInList,
          removeItemFromList: this.removeItemFromList,
        })
      }
      onScroll={this.props.onScroll}
      onEndReachedThreshold={0.2}
      onEndReached={() => {
        if (this.page < this.pageCount && !this.state.loading) {
          console.log(this.pageCount, 'pageCount');
          this.page++;
          this.fetch('loading');
        }
      }}
      ListFooterComponent={this.renderFooter}
    />
  );

  render() {
    return (
      <NativeView
        style={[
          dimensionsStyles(this.props),
          backgroundColorStyles(this.props),
          {
            alignSelf: 'stretch',
            flex: this.props.height ? undefined : 1,
          },
          borderStyles(this.props),
        ]}
        onLayout={this.handleParentViewLayout}>
        {this.renderFlatList()}
      </NativeView>
    );
  }
}

const mapStateToProps = (state) => ({
  rtl: state.lang.rtl,
});

export default connect(mapStateToProps)(List);

import React from 'react';
import { cloneDeep } from 'lodash'
import { connect } from 'react-redux';

import ShoppingCard from './ShoppingCard';
import LoadMore from './LoadMore';
import SignUpNewsLetter from '../SignUpNewsLetter';
import { getShoppingItems } from '../../actions/actions';

import '../../css/shopping-card.scss';

class ItemsDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalItemsToShow: this.props.totalItemsToShow
    }
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    this.props.getShoppingItems();
  }

  updateTotalItemsToShow = (updateBy) => {
    const totalItemsToShow = this.state.totalItemsToShow + updateBy;
    this.setState({
      totalItemsToShow
    });
  }

  getCategorySpecificItems(shoppingItems, currentCategory) {
    return shoppingItems.filter(item => item.categories.includes(currentCategory) ? true : false)
  }

  displayItems() {
    const { shoppingItems, currentCategory } = this.props;
    const { totalItemsToShow } = this.state;

    let updatedItems = this.getCategorySpecificItems(cloneDeep(shoppingItems), currentCategory);


    if (updatedItems.length > totalItemsToShow) {
      updatedItems = updatedItems.slice(0, totalItemsToShow);
    }

    return (
      <div className="container card-wrapper">
        {
          updatedItems.map(item => {
            return (
              <React.Fragment key={item.id}>
                <ShoppingCard item={item} />
              </React.Fragment>
            );
          })
        }
        <LoadMore updateTotalItemsToShow={this.updateTotalItemsToShow} updateBy={4} />

      </div>
    );
  }

  render() {
    return (
      <div className="shopping-main">
        {
          !this.props.shoppingItems || this.props.shoppingItems.length === 0
            ? <div className="text-center font-weight-bold">'Loading...'</div>
            : this.displayItems()
        }
        <SignUpNewsLetter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingItems: state.shoppingItems
  }
}

const mapDispatchToProps = {
  getShoppingItems
}

ItemsDisplay.defaultProps = {
  totalItemsToShow: 12
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsDisplay);
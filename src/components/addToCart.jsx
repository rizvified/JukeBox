import React, { Component } from 'react';

class AddToCart extends Component {
  render() {
    <div ng-hide="attrs.id">
        <a className="btn btn-lg btn-primary" ng-disabled="true" ng-transclude></a>

    </div>
    <div ng-show="attrs.id">
        <div>
            <span ng-show="quantityMax">
                <select name="quantity" id="quantity" ng-model="q"
                        ng-options=" v for v in qtyOpt"></select>
            </span>
            <a className="btn btn-sm btn-primary"
               ng-click="ngCart.addItem(id, name, price, q, data)"
               ng-transclude></a>
        </div>
        <mark  ng-show="inCart()">
            This item is in your cart. <a ng-click="ngCart.removeItemById(id)" style="cursor: pointer;">Remove</a>
        </mark>
    </div>
  }
}

export default AddToCart;

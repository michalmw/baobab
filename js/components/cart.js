'use strict';

angular
    .module('baobabShop')
    .factory("cart", function() {

        var cartData = [];

        return {

                addProduct: function(id, name, price, photo) {

                        var addedToExistingItem = false;
                        for(var i=0; i< cartData.length; i++) {
                            if(cartData[i].id == id){
                                cartData[i].count++;
                                addedToExistingItem = true;
                                break;
                            }
                        }
                        if(!addedToExistingItem) {
                            cartData.push({
                                count: 1, id: id, price: price, name: name, photo: photo
                            });
                        }
                },

                removeProduct: function(id) {

                    for(var i = 0; i < cartData.length; i++) {
                        if(cartData[i].id == id) {
                            cartData.splice(i,1);
                            break;
                        }
                    }
                },
                getProducts: function() {

                    return cartData;
                }

        }
    });



const configure_mist_list = require('./configure_msite_list.json')
const artist_list = require('./artist_list.json')
const concert_list = require('./concert_list.json')
const product_listhead_list = require("./product/productsheader.json")
const product_list_lunbo = require("./product/productlist-lunbo.json")
const product_list_main = require("./product/product_main.json")
module.exports = () => { //没有require 自己找见
    return {
        configure_mist_list:configure_mist_list,
        artist_list:artist_list,
        concert_list:concert_list,
        product_list : product_listhead_list,
        product_lunbo : product_list_lunbo,
        product_main :product_list_main
    } 
} 
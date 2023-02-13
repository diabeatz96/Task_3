import apple from '../assets/apple.png'
import airpods from '../assets/airpods.png'
import google from '../assets/google.png'
import one_plus from '../assets/one_plus.png'
import samsung from '../assets/samsung.png'

const products = [
    { id: 1, name: 'Apple iPhone', price: 999, onSale: false, img: apple},
    { id: 2, name: 'Samsung Galaxy S21', price: 799, onSale: true, img: samsung},
    { id: 3, name: 'Google Pixel 5', price: 699, onSale: false, img: google},
    { id: 4, name: 'OnePlus 9 Pro', price: 899, onSale: true, img: one_plus},
    { id: 5, name: 'AirPods Pro', price: 249, onSale: false, img: airpods},
    ];

export default products;

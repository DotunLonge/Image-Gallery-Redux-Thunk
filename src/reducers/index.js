import {combineReducers } from 'redux';
import  images from './images';

const combinedReducers =  combineReducers({
    imageManager: images
})

export default combinedReducers;

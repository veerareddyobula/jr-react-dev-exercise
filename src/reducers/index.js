import { combineReducers } from "redux";
import allItems from './allItemsReducer';
import breadcrumbItems from './../components/Breadcrums/reducer';

export default combineReducers({
    allItems, breadcrumbItems
});
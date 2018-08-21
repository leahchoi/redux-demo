import { combineReducers} from 'redux';
import themeReducer from './theme_reducer';

const rootReducer = combineReducers({
    theme: themeReducer
})

export default rootReducer;

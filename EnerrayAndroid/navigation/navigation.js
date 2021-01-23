import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from "../screens/LogIn";
import Registration from "../screens/Registration";
import Verification from "../screens/Verification";
import Category from "../screens/Category";
import Products from "../screens/Products";
import Description from "../screens/Description";
import PlayerScreen from "../components/AudioPlayer";
import ImageZoomScreen from  '../screens/ImageZoomScreen';


const AppNavigator = createStackNavigator({
    Login  : {
        screen : Login,
        navigationOptions :{ headerShown : false}
    },
    Registration :{
        screen : Registration,
        navigationOptions :{ headerShown : false}
    },
    Verification : {
        screen :Verification,
        navigationOptions :{ headerShown : false}
    },
    Category : {
        screen : Category,
        navigationOptions :{ headerShown : false}
    },
    Products : {
        screen : Products,
    },
    Description : {
        screen : Description,
       

    },
    ImageZoomScreen : {
        screen : ImageZoomScreen,
        navigationOptions :{ headerShown : false}
    },


});

export default createAppContainer(AppNavigator) 
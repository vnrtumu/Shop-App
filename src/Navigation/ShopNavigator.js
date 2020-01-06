import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ProductOverviewScreen from '../Screens/Shop/ProductsOverviewScreen';
import OrderScreen from '../Screens/Shop/OrderScreen';
import CartScreen from '../Screens/Shop/CartScreen';
import ProductDetailScreen from '../Screens/Shop/ProductDetailScreen';

import UserProductScreen from '../Screens/User/UserProductScreen';
import EditProductScreen from '../Screens/User/EditProductScreen';
import Colors from '../constants/Colors';

const ShopNavigator = createStackNavigator(
  {
    ProductOverview: {
      screen: ProductOverviewScreen,
    },
    ProductDetail: {
      screen: ProductDetailScreen,
    },
    Order: {
      screen: OrderScreen,
    },
    Cart: {
      screen: CartScreen,
    },
    UserProduct: {
      screen: UserProductScreen,
    },
    EditProduct: {
      screen: EditProductScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: 'white',
    },
  },
);

export default createAppContainer(ShopNavigator);

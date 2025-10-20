import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// Helper function to open product detail screen
export function openProductDetail(navigation, product) {
  // Always target the nested Search stack via MainTabs -> 'Søg' -> 'ProductDetail'
  const nestedParams = {
    screen: 'Søg',
    params: { screen: 'ProductDetail', params: { product } },
  };

  if (navigation && typeof navigation.navigate === 'function') {
    try {
      navigation.navigate('MainTabs', nestedParams);
      return;
    } catch (_) {
      // fall through to global ref
    }
  }

  if (navigationRef.isReady()) {
    navigationRef.navigate('MainTabs', nestedParams);
  }
}

export default navigationRef;

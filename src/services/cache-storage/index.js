import AsyncStorage from '@react-native-async-storage/async-storage';

export async function cacheItem(key, data) {
  if (typeof data === 'string') {
    await AsyncStorage.setItem(key, data);
  } else {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }
}

export async function getCachedItem(key) {
  return AsyncStorage.getItem(key);
}

export async function clearStorage() {
  return AsyncStorage.clear();
}

import { configureStore } from '@reduxjs/toolkit';
// reducers
import phones from './slices/phones';
import spiner from './slices/spiner';

// Store
export default configureStore({
  reducer: {
    phones,
    spiner

  }
});


import { Product } from '../product';

/* NgRx */
import { ProductActions, ProductActionTypes } from './product.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// State for this feature (Product)
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

// Selector functions
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

// For demonstration of parameterized selector functions
// Not used.
export const getProductById = id => createSelector(
  getProductFeatureState,
  state => state.products.find(p => p.id === id)
);

export function reducer(state = initialState, action: ProductActions): ProductState {

  switch (action.type) {
    case ProductActionTypes.ToggleProductCode: {
      return { ...state, showProductCode: action.payload };
    }

    // Homework
    case ProductActionTypes.ClearCurrentProduct: {
      return {...state, currentProduct: null};
    }

    // Homework
    case ProductActionTypes.SetCurrentProduct: {
      return {...state, currentProduct: {...action.payload}};
    }

    default: {
      return state;
    }
  }
}

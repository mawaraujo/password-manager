/*
  eslint-disable no-unused-vars
*/

export declare type Action<T> = {
  payload: T;
  type: string;
};

export const CREATE_PASSWORD: string = 'CREATE_PASSWORD';
export const EDIT_PASSWORD: string = 'EDIT_PASSWORD';
export const SELECT_PASSWORD: string = 'SELECT_PASSWORD';
export const DELETE_PASSWORD: string = 'DELETE_PASSWORD';

export const CREATE_TAG: string = 'ADD_TAG';
export const EDIT_TAG: string = 'EDIT_TAG';
export const SELECT_TAG: string = 'SELECT_TAG';
export const DELETE_TAG: string = 'DELETE_TAG';
export const RESET_SELECTED_TAG: string = 'RESET_SELECTED_TAG';

export const CREATE_NOTIFICATION: string = 'CREATE_NOTIFICATION';
export const DELETE_NOTIFICATION: string = 'DELETE_NOTIFICATION';

export const UPDATE_SEARCH: string = 'UPDATE_SEARCH';

export const TOGGLE_SIDEBAR: string = 'TOGGLE_SIDEBAR';

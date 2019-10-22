import { Module } from 'vuex';
import { TeamsState, RootState } from '@/store/types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state: TeamsState = {
  teams: [],
};

export const todos: Module<TeamsState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
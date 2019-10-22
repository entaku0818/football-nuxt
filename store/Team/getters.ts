import { GetterTree } from 'vuex';
import { TeamsState, RootState, Team } from '@/store/types';

const getters: GetterTree<TeamsState, RootState> = {
  teams: (state: TeamsState) => {
    return state
  },
}

export default getters;
import { MutationTree } from 'vuex';
import { TeamsState, Team }  from '@/store/types';

export const mutations: MutationTree<TeamsState> = {
    teamsLoaded(state, teams: Team[]) {
        state.teams = teams
    },
    teamsError(state) {
        state.teams = []
    }
};

export default mutations;
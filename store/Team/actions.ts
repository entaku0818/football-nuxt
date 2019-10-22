import { ActionTree } from 'vuex';
import { TeamsState, RootState, Team } from '@/store/types';
import axios from '~/plugins/axios'

const actions: ActionTree<TeamsState, RootState>= {
  fetch: async ({ commit }) => {
    try {
      const res = await axios.get('https://api.football-data.org/v2/competitions/PL/teams/', {
        headers: {
          'X-Auth-Token': '9703d46d0a6c4e3f8f76ca1d17dcc150'
        }
      })
      console.log(res)
      const teams: Team[] = res.data.teams
      commit('teamsLoaded', teams)
      

    } catch (error) {
     // commit('teamsError')
    }  
  },

};

export default actions;

export async function fetchTeams(this: any) {
  try {
    const res = await this.$axios.get('https://api.football-data.org/v2/competitions/PL/teams/')
    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

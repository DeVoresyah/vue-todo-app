// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// default headers request
const headers = {
  'Content-Type': 'application/json',
}

const create = (baseURL = process.env.baseUrl) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    headers,
    // 10 second timeout...
    timeout: 15000,
  })

  // Activity
  const getActivity = () =>
    api.get(`activity-groups?email=${process.env.emailApp}`)
  const getDetailActivity = (id: number) => api.get(`activity-groups/${id}`)
  const createActivity = () => api.post('activity-groups')
  const deleteActivity = (id: number) => api.delete(`activity-groups/${id}`)
  const updateActivity = (id: number) => api.patch(`activity-groups/${id}`)

  return {
    // a list of the API functions from step 2
    getActivity,
    getDetailActivity,
    createActivity,
    deleteActivity,
    updateActivity,

    api,
  }
}

// let's return back our create method as the default.
export default {
  create,
}

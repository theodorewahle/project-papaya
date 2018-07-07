import api from '../../utils/api'

export const GET_ALL_JOBS_SUCCESS = 'GET_ALL_JOBS_SUCCESS';

export const getAllJobsSuccess = data => ({
  type: GET_ALL_JOBS_SUCCESS,
  payload: data,
});

export const getAllJobs = () => async dispatch => {
  console.log('getting jobs')
  try {
    let response = await api.getAllJobs();
    console.log(response.status)
    if (response.status === 200) {
      dispatch(getAllJobsSuccess(response.data));
    }
  } catch (error) {}
};

const initialState = {
  allJobs: [ {},]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_JOBS_SUCCESS:
      return {...state, allJobs: action.payload};
    default:
      return state;
  }
}
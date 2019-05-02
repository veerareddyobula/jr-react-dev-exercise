export const LOGIN_PRESENTER_AUTH_SUCCESS = 'LOGIN_PRESENTER_AUTH_SUCCESS'
export const LOGIN_PRESENTER_AUTH_FAILURE = 'LOGIN_PRESENTER_AUTH_FAILURE'

export const validateUserAuthDetails = authDetails => async dispatch => {
    if(authDetails && authDetails.email === 'react123@gmail.com' && authDetails.password === 'react123'){
        dispatch({
            type: LOGIN_PRESENTER_AUTH_SUCCESS,
            payload: {status: 200, message:'Success', data:{token:'asdfljkown231lnklsz2se23r'}}
        })
    }else {
        console.log('---- I am validateUserAuthDetails action ---- ')
        dispatch({
            type: LOGIN_PRESENTER_AUTH_FAILURE,
            payload: {status: 200, message:'Failure', data:{errorCode:403, message:'Invalied Email & Password'}}
        })
    }
  };
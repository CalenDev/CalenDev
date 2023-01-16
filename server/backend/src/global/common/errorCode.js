/**
 * @ 코드값 : [코드][httpCode][순서]
 */

// A > AA
const ErrorCode = {
  // 400 Error
  E400AA: 'Bad Request: nothing is in header',
  E400AB: 'Bad Request: AccessToken and RefreshToken does not exist in header',

  E400AC: 'Bad Request: Please provide valid Email',
  E400AD: 'Bad Request: JsonWebToken is invaid',
  E400AE: 'Bad Request: ResetToken is invalid',
  E400AF: 'Bad Request: Duplicate User Exists',
  E400AG: 'Bad Request: Input data is invalid',

  // 401
  E401AA: 'Not Authorized: ResetToken is expired',
  E401AB: 'Not Authorized: AccessToken is expired',
  E401AC: 'Not Authorized: RefreshToken is expired',
  E401AD: 'Not Authorized: New Password is equal to previous one',
  E401AE: 'Not Authorized : Email or Password is wrong',
  // 403
  E403AA: 'Not Authorized : User does not have authority to access data',
  // 404
  E404AA: 'Not Found: Invalid API EndPoint',
  E404AB: 'Not Found: Alive Token is provided for Token Refresh Process',
  E404AC: 'Not Found: RefreshToken is invalid or does not exist',
  E404AD: 'Not Found: User is not found',
  // type 잘못된것을 에러로 알려주면 어떻게 알려줘야하는지.. 그냥 잘못되었다고만하나?
  E404AE: 'Not Found: Year-Month is invalid',
  // 408
  E408AA: 'Request Timeout: Request Time out',
  // 500
  E500AA: 'Internal Server Error : Uncaught exception',
  E500AB: 'Internal Server Error : Email Service is inavailable',
  E500AC: 'Internal Server Error : Database Connection lost',
  E500AD: 'Internal Server Error : There was a Duplicate key Error',
};
Object.freeze(ErrorCode);

export default ErrorCode;
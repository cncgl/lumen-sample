<?php
/**
 * Created by PhpStorm.
 * User: shigeru
 * Date: 16/06/06
 * Time: 23:25
 */
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
  /**
   * @var \Tymon\JWTAuth\JWTAuth
   */
  protected $jwt;

  // コンストラクタ
  //-----------
  public function __construct(JWTAuth $jwt)
  {
    $this->jwt = $jwt;
  }

  public function postLogin(Request $request)
  {
    $this->validate($request, [
      'email'    => 'required|email|max:255',
      'password' => 'required',
    ]);
    try {
      if (! $token = $this->jwt->attempt($request->only('email', 'password'))) {
        return response()->json(['user_not_found'], 404);
      }
    } catch (TokenExpiredException $e) {
      return response()->json(['token_expired'], 500);
    } catch (TokenInvalidException $e) {
      return response()->json(['token_invalid'], 500);
    } catch (JWTException $e) {
      return response()->json(['token_absent' => $e->getMessage()], 500);
    }
    return response()->json(compact('token'));
  }
}

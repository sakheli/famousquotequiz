<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('leaderboards', [
    App\Http\Controllers\V1\UserQuestionHistoryController::class, 'leaderboards'
]);
Route::get('indexwithoutquestions', [
    App\Http\Controllers\V1\QuestionSessionController::class, 'indexWithoutQuestions'
]);

Route::post('register', [\App\Http\Controllers\V1\AuthController::class, 'register']);
Route::post('login', [\App\Http\Controllers\V1\AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [\App\Http\Controllers\V1\AuthController::class, 'user']);
    Route::post('logout', [\App\Http\Controllers\V1\AuthController::class, 'logout']);





    Route::get('showwithoutanswers/{id}', [
        App\Http\Controllers\V1\QuestionSessionController::class, 'showWithoutAnswers'
    ]);

    Route::post('submitanswers', [
        App\Http\Controllers\V1\QuestionSessionController::class, 'submitAnswers'
    ]);

    Route::resource('question', App\Http\Controllers\V1\QuestionController::class)->only(['index', 'show']);



    Route::get('history', [App\Http\Controllers\V1\UserQuestionHistoryController::class, 'history']);


    Route::middleware('isadmin')->group(function () {
        Route::resource('questionsession', App\Http\Controllers\V1\QuestionSessionController::class);
        Route::resource('question', App\Http\Controllers\V1\QuestionController::class)->only(['store', 'update', 'destroy']);
    });
});

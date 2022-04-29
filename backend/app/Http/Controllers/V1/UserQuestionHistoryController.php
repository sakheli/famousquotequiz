<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\UserQuestionHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserQuestionHistoryController extends Controller
{
    public function leaderboards()
    {
        return UserQuestionHistory::select('time', 'user_id', DB::raw('max(score) as score'))->groupBy('user_id')->groupBy('time')->with(['user' => function ($query) {
            $query->select('id', 'email', 'name');
        }])->orderBy('score', 'DESC')
            ->orderBy('time', 'ASC')->get();
    }

    public function history()
    {
        return UserQuestionHistory::with('user')->get();
    }
}

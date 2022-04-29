<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuestionRequest;
use App\Models\QuestionSession;
use App\Models\Question;

class QuestionController extends Controller
{
    public function index()
    {
        return Question::all();
    }

    public function show($id)
    {
        return Question::where('id', $id)->first();
    }


    public function store(StoreQuestionRequest $request)
    {
        $questionSession = QuestionSession::findOrFail($request->get('question_session_id'));
        $questionSession->storeQuestions([$request]);


        return response([
            'status' => 'success',
            'message' => ''
        ], 200);
    }

    public function update($id, $request)
    {
        Question::where('id', $id)->update($request);

        return response([
            'status' => 'success',
            'message' => ''
        ], 200);
    }

    public function destroy($id)
    {
        Question::where('id', $id)->delete();

        return response([
            'status' => 'success',
            'message' => ''
        ], 200);
    }
}

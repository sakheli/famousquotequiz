<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuestionSessionRequest;
use App\Http\Requests\UpdateQuestionSessionRequest;
use App\Http\Requests\QuestionAnswerRequest;
use App\Models\QuestionSession;
use App\Models\Question;
use App\Models\UserQuestionHistory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;

class QuestionSessionController extends Controller
{
    public function index()
    {
        return QuestionSession::with('questions')->get();
    }

    public function show($id)
    {
        return QuestionSession::where('id', $id)->with('questions')->first();
    }

    public function indexWithoutQuestions()
    {

        return QuestionSession::all();
    }

    public function showWithoutAnswers($id)
    {
        return Question::select(
            'id',
            'question',
            'answer1',
            'answer2',
            'answer3',
            'type_id'
        )->where('question_session_id', $id)->get();
    }

    public function store(StoreQuestionSessionRequest $request)
    {
        $title = $request->get('title');
        $questions = $request->get('questions');

        $questionSession = new QuestionSession;
        $questionSession->title = $title;
        $questionSession->save();
        $questionSession->storeQuestions($questions);

        return response([
            'status' => 'success',
            'message' => ''
        ], 200);
    }

    public function update($id, UpdateQuestionSessionRequest $request)
    {
        $questionSession = QuestionSession::findorfail($id);
        $questionSession->title = $request->get('title');
        $questionSession->save();

        return response([
            'status' => 'success',
            'message' => ''
        ], 200);
    }

    public function destroy($id)
    {
        QuestionSession::where('id', $id)->delete();

        return response([
            'status' => 'success',
            'message' => ''
        ], 200);
    }

    public function submitAnswers(QuestionAnswerRequest $request)
    {
        $answers = $request->get('answers');
        $sessionId = $request->get(
            'sessionId'
        );
        $time = $request->get('time');

        $questionSession =  QuestionSession::where('id', $sessionId)->with('questions')->first();
        $questions = $questionSession['questions']->toarray();
        $score = 0;
        $notAnswered = count($questions) - count($answers);
        foreach ($answers as $answer) {
            $question = Arr::where($questions, function ($value) use ($answer) {
                return $value['id'] == $answer['id'] && $value['correct_answer'] == $answer['answer'];
            });

            if (count($question) > 0)
                $score++;
        }
        $score = round(($score / count($questions)) * 100);
        UserQuestionHistory::create(
            [
                'score' => $score,
                'not_answered' => $notAnswered,
                'time' => $time,
                'submitted_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'user_id' => Auth::user()->id,
                'question_session_id' => $sessionId
            ]
        );

        return response([
            'score' => $score,
            'not_answered' => $notAnswered
        ], 200);
    }
}

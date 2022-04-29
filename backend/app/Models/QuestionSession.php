<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'title'
    ];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function storeQuestions($questions) {
        foreach ($questions as $question) {
            $questionData = new Question;
            $questionData->question = $question["question"];
            $questionData->answer1 = $question["answer1"];
            $questionData->answer2 = $question["answer2"];
            $questionData->answer3 = $question["answer3"];
            $questionData->correct_answer = $question["correct_answer"];
            $questionData->type_id = $question["type_id"];
            $questionData->question_session_id = $this->id;
            $questionData->save();
        }
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserQuestionHistory extends Model
{
    use HasFactory;
    protected $fillable = [
        'score',
        'not_answered',
        'time',
        'submitted_at',
        'question_session_id',
        'user_id'
    ];


    protected $casts = [
        'submitted_at' => 'datetime',
    ];


    public function questionSession()
    {
        return $this->belongsTo(QuestionSession::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\QuestionSession;

class QuestionSessionsTableSeeder extends Seeder {
    public function run()
    {
        DB::table('question_sessions')->delete();

        QuestionSession::create([
            'id' => 1,
            'title' => 'trivia'
        ]);
        QuestionSession::create([
            'id' => 2,
            'title' => 'math'
        ]);
    } 
}
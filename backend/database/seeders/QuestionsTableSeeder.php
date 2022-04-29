<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Question;

class QuestionsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('questions')->delete();

        for ($i = 0; $i < 10; $i++) {
            Question::create([
                'question' => 'test',
                'answer1' => 'test',
                'answer2' => 'test',
                'answer3' => '',
                'correct_answer' => 1,
                'type_id' => 1,
                'question_session_id' => 1
            ]);
        }

        for ($i = 0; $i < 10; $i++) {
            Question::create([
                'question' => 'test',
                'answer1' => 'test',
                'answer2' => 'test',
                'answer3' => 'test',
                'correct_answer' => 2,
                'type_id' => 2,
                'question_session_id' => 2
            ]);
        }
    }
}

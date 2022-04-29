<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\QuestionType;

class QuestionTypesTableSeeder extends Seeder {
    public function run()
    {
        DB::table('question_types')->delete();
 
        QuestionType::create(['id' => '1', 'name' => 'Binary']);
        QuestionType::create(['id' => '2', 'name' => 'Multi']);
    } 
}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_question_histories', function (Blueprint $table) {
            $table->id();
            $table->string('score');
            $table->string('not_answered');
            $table->unsignedInteger('time');
            $table->dateTime('submitted_at');
            $table->timestamps();
            $table->unsignedBigInteger('question_session_id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('question_session_id')->references('id')->on('question_sessions');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_question_history');
    }
};

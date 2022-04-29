<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'question' => 'string',
            'answer1' => 'string',
            'answer2' => 'string',
            'answer3' => 'string',
            'correct_answer' => 'string',
            'type_id' => 'integer'
        ];
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->delete();

        User::insert([
            'name' => 'admin',
            'lastname' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'role_id' => 1
        ]);

        User::insert([
            'name' => 'user',
            'lastname' => 'user',
            'email' => 'user@gmail.com',
            'password' => Hash::make('password'),
            'role_id' => 2
        ]);
    }
}

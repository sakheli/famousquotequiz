<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;

class RolesTableSeeder extends Seeder {
    public function run()
    {
        DB::table('roles')->delete();
 
        Role::create(['id' => '1', 'name' => 'Admin']);
        Role::create(['id' => '2', 'name' => 'User']);
    } 
}
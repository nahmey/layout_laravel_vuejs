<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnColorToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('sidebar_color')->nullable();
            $table->string('sidebar_text_color')->nullable();
            $table->string('sidebar_hover_text_color')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('sidebar_color');
            $table->dropColumn('sidebar_text_color');
            $table->dropColumn('sidebar_hover_text_color');
        });
    }
}

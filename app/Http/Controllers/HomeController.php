<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = json_encode(\Auth::user());
        return view('home', compact('user'));
    }


    public function userSidebarColor(Request $request)
    {
        $user = User::find(\Auth::id());
        $user->update([
            'sidebar_color' => $request->color,
            'sidebar_text_color' => $request->text,
            'sidebar_hover_text_color' => $request->textHover
        ]);

        return response()->json([
            // 'hello' => 'okok'
        ], 200);
    }

}

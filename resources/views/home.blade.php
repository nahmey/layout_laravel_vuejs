@extends('layouts.app')

@section('content')

{{-- <notifications group="notifications" position="bottom left" width="500"></notifications> --}}

<div class="mb-2">
    <transition name="component-fade" mode="out-in">
            <router-view name="default"></router-view>
            {{-- <router-view name="default" :key="$route.path"></router-view> --}}
    </transition>
</div>

@endsection

<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->
    <script type="application/javascript" src="{{ asset('js/app-v'.config('app.version').'.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app-v'.config('app.version').'.css') }}" rel="stylesheet">
    <link href="{{asset('css/all.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('css/sidebar-v'.config('app.version').'.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('css/styles-v'.config('app.version').'.css')}}" rel="stylesheet" type="text/css" />

    <link href="https://unpkg.com/vue-multiselect@2.0.2/dist/vue-multiselect.min.css" rel="stylesheet"/>
    <script src="https://unpkg.com/vue-multiselect@2.0.3/dist/vue-multiselect.min.js"></script>

    <script type="text/javascript">
        var base_url = "{!! url('/') !!}";
    </script>
    <script src="{{ asset('js/moment.js') }}"></script>
</head>
<body>
    <div id="app" data-user="{{isset($user) ? $user : ''}}">
        <div class="container-fluid h-100 my-vh100">
            <div class="row h-100 my-vh100">
                <!-- Sidebar -->
                @include('sidebar')

                <section id="page-content-wrapper" class="p-0 col bg-faded">
                    <header class="border-bottom p-2" id="header">
                        <div class="d-flex justify-content-between">
                            <div class="col-2">
                                <a class="btn btn-dark text-light" id="toggleMenuIcon">
                                    <i class="fas fa-bars" title="Afficher / masquer le menu"></i>
                                </a>
                            </div>
                            <div class="d-flex">
                                <span id="horloge" class="ml-4 mr-4" style="align-self: center;"></span>
                                <div class="dropdown">
                                    <a class="btn btn-link dropdown-toggle" href="#" role="button" id="profileMenu" 
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-user" title="Mon compte"></i> 
                                        <span id="utilisateurCourant">{{Auth::user()->prenom}} {{Auth::user()->nom}}</span>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileMenu">
                                        <!-- <a class="dropdown-item" href="{{URL::to('/')}}">Accueil</a> -->
                                        <a class="dropdown-item" href="{{URL::to('profil')}}">Modifier mes informations</a>
                                        <a class="dropdown-item" href="{{URL::to('password')}}">Modifier mon mot de passe</a>

                                        <div class="dropdown-divider"></div>

                                        <div class="dropdown-item pb-0 pt-0">
                                            <label for="head">Couleur Menu</label>
                                            <input type="color" id="sidebar_color" class="float-right" onchange="changeSidebarColor(this.value)">
                                        </div>

                                        <div class="dropdown-item pb-0 pt-0">
                                            <label for="head">Couleur Texte</label>
                                            <input type="color" id="sidebar_text_color" class="float-right" onchange="changeSidebarTextColor(this.value)">
                                        </div>

                                        <div class="dropdown-item pb-0 pt-0">
                                            <label for="head">Couleur Survol</label>
                                            <input type="color" id="sidebar_text_hover_color"  class="float-right" onchange="changeSidebarHoverTextColor(this.value)">
                                        </div>

                                        <div class="dropdown-item pb-0 pt-0 text-right">
                                            <button class="btn btn-sm" onclick="resetDefautColor()">Défaut</button>
                                        </div>

                                        <div class="dropdown-divider"></div>

                                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="deconnexionButton()">
                                            {{ __('Déconnexion') }}
                                        </a>
                                    </div>
                                </div>
                                <a class="dropdown-item btn btn-link text-danger" href="{{ route('logout') }}" onclick="deconnexionButton()">
                                    <i class="fas fa-power-off" title="Déconnexion"></i>
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                            <h2 id="maintitle2" class="mb-0 ml-5" style="display:none"><i class="fa fa-tools fa-lg mr-2" style="width:auto;"></i>{{ config('app.name', 'Laravel') }}</h2>
                        </div>
                    </header>

                    <main role="main" class="mb-5 p-4" id="main">
                        @yield('content')
                    </main>

                    <footer id="footer" class="page-footer bg-light border-top d-none d-md-block">
                        <div class="footer-copyright float-left text-secondary py-2 pr-3">(version {{config('app.version')}})</div>
                        <div class="footer-copyright text-right text-secondary py-2 pr-3">© {{date('Y')}} Nom de la société. Tous droits réservés. </div>    
                     </footer>
               </section>
            </div>
        </div>
    </div>    
    <script type="text/javascript">
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, on modifie le margin right
        {
            window.location.replace(base_url + "/internet_explorer");
        } 
    </script>
    <script type="application/javascript" src="{{ asset('js/global-v'.config('app.version').'.js') }}"></script> 
    <script type="application/javascript" src="{{ asset('js/sidebar-v'.config('app.version').'.js') }}"></script>
</body>
</html>

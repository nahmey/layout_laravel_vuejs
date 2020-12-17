<aside class="p-0 my-vh100 shadow-sm" id="sidebar" style="width: 250px;">
    <nav class="navbar navbar-expand navbar-dark bg-white flex-column align-items-start w-100 p-0">
        <div id="sidebarMenu" class="flex-column navbar-nav w-100 justify-content-between">
            <div class="clearfix flex-row w-100 mb-3">
                <h2 id="maintitle" class="p-4 mt-1 mb-1">
                    {{config('app.name')}}
                </h2>
            </div>
            <div class="collapse navbar-collapse w-100">
                <ul id="sidebar_ul">
                    <li>
                        <router-link to="/" onclick="changeMenu()">
                            <i class="fas fa-tachometer-alt "></i> Tableau de bord
                        </router-link>
                    </li>

                    <li>
                        <a href="#:javascript" title="Leads" class="menu-deroulant">
                            <i class="fas fa-chart-area"></i> <span class="d-inline-block">Element 1</span>
                            <i class="fas fa-caret-down float-right d-none d-sm-none"></i>
                            <i class="fas fa-caret-right float-right d-none d-sm-none"></i>
                        </a>

                        <ul class="nav-item-slidedown">
                            <li>
                                <router-link to="/url_1" onclick="changeMenu()">
                                    <i class="fas fa-angle-right"></i> Sous element 1
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/url_2" onclick="changeMenu()">
                                    <i class="fas fa-angle-right"></i> Sous element 2
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/url_3" onclick="changeMenu()">
                                    <i class="fas fa-angle-right"></i> Sous element 3
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#:javascript" title="Statistiques" class="menu-deroulant">
                            <i class="fas fa-chart-bar"></i> <span class="d-inline-block">Element 2</span>
                            <i class="fas fa-caret-down float-right d-none d-sm-none"></i>
                            <i class="fas fa-caret-right float-right d-none d-sm-none"></i>
                        </a>
                        <ul class="nav-item-slidedown">
                            <li>
                                <router-link to="/url_4" onclick="changeMenu()">
                                    <i class="fas fa-angle-right"></i> Sous element 1
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/url_5" onclick="changeMenu()">
                                    <i class="fas fa-angle-right"></i> Sous element 2
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/url_6" onclick="changeMenu()">
                                    <i class="fas fa-angle-right"></i> Sous element 1 3
                                </router-link>
                            </li>
                            <li class='nav-item' style="height: 0">
                                <a href="">&nbsp;</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <router-link to="/parametres" onclick="changeMenu()">
                            <i class="fas fa-cog"></i> Paramètres
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/bugs" onclick="changeMenu()">
                            <i class="fas fa-exclamation"></i> Autres
                        </router-link>
                    </li>
                    <li>
                        <a href="{{ route('logout') }}" class="menu-fixe" onclick="deconnexionButton()">
                            <i class="fas fa-door-open"></i> <span class="d-inline-block">Deconnexion</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</aside>
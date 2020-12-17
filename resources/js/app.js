/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// EXEMPLE IMPORT ET ROUTES
// import LeadCreateComponent from './components/leads/leads/LeadCreateComponent.vue';
// import LeadIndexComponent from './components/leads/leads/LeadIndexComponent.vue';
// import LeadEditComponent from './components/leads/leads/LeadEditComponent.vue';

// {path: '/leads/sales_pilot', component: LeadSalesPilotComponent, name:'leads_sales_pilot.index', meta: {roles:['admin', 'leads']}},
// {path: '/leads/sales_pilot/edit/:id', component: LeadSalesPilotEditComponent, name:'leads_sales_pilot.edit', meta: {roles:['admin', 'leads']}},
// {path: '/leads/create/client/:contact?', component: LeadCreateComponent, name:'leads.create.client', meta: {roles:['admin', 'leads']}},
// {path: '/leads/create', component: LeadCreateComponent, name:'leads.create', meta: {roles:['admin', 'leads']}},
// {path: '/leads/suivi/client/:id', component: LeadIndexComponent, meta: {roles:['admin', 'leads']}},
// {path: '/leads/suivi', component: LeadIndexComponent, meta: {roles:['admin', 'leads']},
// 	children: [{
// 		path: ':id',
// 		components: {second: LeadEditComponent},
// 	}]
// },



/*
 * Vue Router
 */
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ExampleComponent from './components/ExampleComponent.vue';

const routes = [,
	{path: '/', component: ExampleComponent, name:'/' },
]



// Vue.prototype.$user = JSON.parse(document.querySelector("#app").dataset.user);
// let user = JSON.parse(document.querySelector("#app").dataset.user);

const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.roles)){
	if(to.matched[0].meta.roles.indexOf(user.role) != -1) next();
		else next('/errors/404');
	}else next();
})


const MyPlugin = {
	install(Vue, options){
    	Vue.prototype.inArray = (array, element, search) => {
    		let exist = array.map(function(x){
    			return x[element]
    		}).indexOf(search);
    		return exist;
    	}
    	Vue.prototype.ucFirst = (string) =>{
    		return string.charAt(0).toUpperCase() + string.slice(1);
    	}
		Vue.prototype.convertDate = (date) => {
			return moment(date).format('DD.MM.YYYY');
		}
		Vue.prototype.convertDateHeure = (date) => {
			return moment(date).format('DD.MM.YYYY HH:mm') + 'h';
		}
		Vue.prototype.convertHeure = (date) => {
			return moment(date).format('HH:mm') + 'h';
		}

		/*
		 * Ouvre le calendrier si click avec vuejs datepicker
		/*
		Vue.prototype.datePickerOpened = (reference, $refs) => {
			$refs[reference].showCalendar();
            $refs[reference].$el.querySelector('input').focus();
		}
		*

		/*
		 * Redirect si detection d'une erreur (exemple session plus active)
		/*
		Vue.prototype.checkError = (error) => {
			if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if(error.response.status == 401){
                	alert("Votre session n'est plus active");
                	return window.location = intranet_path;
                }
                if(error.response.status == 403){
                	console.clear();
                	return router.push({path: '/errors/404'});
                }
            }
		}
		*/

		/*
		 * Fonction log erreur JS (TODO : créer back-end)
		/*
		Vue.config.warnHandler = function(msg, vm, trace) {
		    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
		    var req = new XMLHttpRequest();
		    let line = null;
		    let url = null;
		    var params = "msg=" + `Warn: ${msg}\nTrace: ${trace}` + '&amp;url=' + encodeURIComponent(url) + "&amp;line=" + line;
		    req.open("POST", base_url + "/admin/write_javacript_log", true);
		    req.setRequestHeader('X-CSRF-Token', token);
		    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
		    req.send(params);
		}
		/*

		/*
		 * Fonction si erreur, affiche avec vue notify
		/*
		Vue.prototype.showErrors = (errors) => {
			let string = '<ul>';
            errors.forEach(function(item){
                string += '<li>'+item+'</li>';
            })
            string += '</ul>';

            Vue.notify({
                group: 'notifications',
                title: 'Erreur',
                type: 'error',
                duration: 5000,
                text: string
            });
		}
		*/

		Vue.prototype.convertDateWithDayName = (date) => {
			if(date == moment().format('YYYY-MM-DD')){
    			return "Aujourd'hui";
    		}
    		switch (moment(date).format('dddd')) {
			 	case 'Monday':
			    	return 'Lundi ' + moment(date).format('DD.MM.YYYY');
			    break;
			  	case 'Tuesday':
			    	return 'Mardi ' + moment(date).format('DD.MM.YYYY');
			    break;
			    case 'Wednesday':
			    	return 'Mercredi ' + moment(date).format('DD.MM.YYYY');
			    break;
			    case 'Thursday':
			    	return 'Jeudi ' + moment(date).format('DD.MM.YYYY');
			    break;
			    case 'Friday':
			    	return 'Vendredi ' + moment(date).format('DD.MM.YYYY');
			    break;
			    case 'Saturday':
			    	 return'Samedi ' + moment(date).format('DD.MM.YYYY');
			    break;
			    case 'Tunday':
			    	return 'Dimanche ' + moment(date).format('DD.MM.YYYY');
			    break;
			  	default:
			    	'';
			}
		}
	}
}

Vue.use(MyPlugin)

const app = new Vue({router}).$mount('#app')

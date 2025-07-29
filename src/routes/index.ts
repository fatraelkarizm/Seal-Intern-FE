import {
     Landing,
     GayaHidup,
     Hiburan,
     Internasional,
     Nasional,
     Olahraga,
     Terbaru
} from '@/pages/index';

const routes = [
    {path: '/', name:'Landing' ,component: Landing},
    {path: '/gayahidup', name:'Gaya Hidup', component: GayaHidup},
    {path: '/hiburan', name:'Hiburan', component: Hiburan},
    {path: '/internasional', name:'Internasional', component: Internasional},
    {path: '/nasional', name:'Nasional', component: Nasional},
    {path: '/olahraga', name:'Olahraga', component: Olahraga},
    {path: '/terbaru', name:'Terbaru', component: Terbaru}

];

export default routes;


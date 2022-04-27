import Dashboard from "../pages/dashboard.js";
import Overview from "../pages/overview.js";
import Views from "../pages/views.js";
import Traffic from "../pages/traffic.js";
import Geo from "../pages/geo.js";
import Orders from "../pages/orders.js";
import Products from "../pages/products.js";
import News from "../pages/news.js";
import General from "../pages/general.js";
import History from "../pages/history.js";
import Settings from "../pages/settings.js";

export const routes = [
    { name: 'Dashboard', id: 'dashboard', view: Dashboard, icon: 'fa-dashboard' },
    { name: 'Overview', id: 'overview', view: Overview, icon: 'fa-users' },
    { name: 'Views', id: 'views', view: Views, icon: 'fa-eye' },
    { name: 'Traffic', id: 'traffic', view: Traffic, icon: 'fa-users' },
    { name: 'Geo', id: 'geo', view: Geo, icon: 'fa-bullseye' },
    { name: 'Orders', id: 'orders', view: Orders, icon: 'fa-diamond' },
    { name: 'Products', id: 'products', view: Products, icon: 'fa-shopping-bag' },
    { name: 'News', id: 'news', view: News, icon: 'fa-bell' },
    { name: 'General', id: 'general', view: General, icon: 'fa-bank' },
    { name: 'History', id: 'history', view: History, icon: 'fa-history' },
    { name: 'Settings', id: 'settings', view: Settings, icon: 'fa-cog' }
]
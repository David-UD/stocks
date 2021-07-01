// Importa las dependencias de los módulos vinculadas a las rutas
import { ManageComponent } from './components/manage/manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Importa las dependencias del router
import { Routes, RouterModule } from '@angular/router';

// Define un arreglo de configuración de rutas
const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'manage',
        component: ManageComponent
    }
];

// Exporta las rutas para su uso
export const AppRoutes = RouterModule.forRoot(routes);
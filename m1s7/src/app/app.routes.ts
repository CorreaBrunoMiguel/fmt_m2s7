import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'alunos',
        component: AlunosComponent
    },
    {
        path: 'cadstro-alunos',
        component: CadastroAlunosComponent
    },
    {
        path: 'disciplinas',
        component: DisciplinasComponent
    }
];

import { Routes } from '@angular/router';
import { StructuralDirComponent } from './Components/Directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './Components/Directive/attribute-dir/attribute-dir.component';
import { TemplateComponent } from './Components/Forms/template/template.component';
import { ReactiveComponent } from './Components/Forms/reactive/reactive.component';
import { IfelseComponent } from './Components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './Components/controlFlow/for/for.component';
import { PipeComponent } from './Components/pipe/pipe.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { GetApiComponent } from './Components/Api-Integration/get-api/get-api.component';
import { PostApiComponent } from './Components/Api-Integration/post-api/post-api.component';

export const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path: 'data-binding',
                component: DataBindingComponent
            },
            {
                path:'structural-dir',
                component: StructuralDirComponent
            },
            {
                path:'attribute-dir',
                component: AttributeDirComponent
            },
            {
                path: 'template-form',
                component: TemplateComponent
            },
            {
                path: 'reactive-form',
                component: ReactiveComponent
            },
            {
                path: 'ifelse',
                component: IfelseComponent
            },
            {
                path: 'for',
                component: ForComponent
            },
            {
                path: 'pipe',
                component: PipeComponent
            },
            {
                path: 'get-api',
                component: GetApiComponent
            },
            {
                path: 'post-api',
                component: PostApiComponent
            }
        ]
    }
];

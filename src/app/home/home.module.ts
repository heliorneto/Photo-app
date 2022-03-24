import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations: [ SigninComponent, SignupComponent ],
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, VmessageModule, RouterModule ]
})
export class HomeModule {}
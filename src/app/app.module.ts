import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBoutonComponent } from './composants/action-bouton/action-bouton.component';
import { DetailAppComponent } from './composants/detail-app/detail-app.component';
import { DetailApprenantComponent } from './composants/detail-apprenant/detail-apprenant.component';
import { DetailCourComponent } from './composants/detail-cour/detail-cour.component';
import { DetailEdtComponent } from './composants/detail-edt/detail-edt.component';
import { DetailEngComponent } from './composants/detail-eng/detail-eng.component';
import { DetailEngseignantComponent } from './composants/detail-engseignant/detail-engseignant.component';
import { DetailPayementAppComponent } from './composants/detail-payement-app/detail-payement-app.component';
import { DetailPayementEngComponent } from './composants/detail-payement-eng/detail-payement-eng.component';
import { DetailPayementAbscenceComponent } from './composants/detail-payement-abscence/detail-payement-abscence.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { HeaderRepetitionComponent } from './composants/header-repetition/header-repetition.component';
import { InformationAbscenceComponent } from './composants/information-abscence/information-abscence.component';
import { InformationAbscenceEngComponent } from './composants/information-abscence-eng/information-abscence-eng.component';
import { InformationEdtComponent } from './composants/information-edt/information-edt.component';
import { MenuRepetitionComponent } from './composants/menu-repetition/menu-repetition.component';
import { NouveauAbscenceApprenantComponent } from './composants/nouveau-abscence-apprenant/nouveau-abscence-apprenant.component';
import { NouveauAbscenceEnseignantComponent } from './composants/nouveau-abscence-enseignant/nouveau-abscence-enseignant.component';
import { NouveauApprenantComponent } from './composants/nouveau-apprenant/nouveau-apprenant.component';
import { NouveauCourComponent } from './composants/nouveau-cour/nouveau-cour.component';
import { NouveauEdtComponent } from './composants/nouveau-edt/nouveau-edt.component';
import { NouveauEnseignantComponent } from './composants/nouveau-enseignant/nouveau-enseignant.component';
import { NouveauPayementApprenantComponent } from './composants/nouveau-payement-apprenant/nouveau-payement-apprenant.component';
import { NouveauPayementEnseignantComponent } from './composants/nouveau-payement-enseignant/nouveau-payement-enseignant.component';
import { NouveauUtilisateurComponent } from './composants/nouveau-utilisateur/nouveau-utilisateur.component';
import { PaginationRepetitionComponent } from './composants/pagination-repetition/pagination-repetition.component';
import { AbscenceComponent } from './pages/abscence/abscence.component';
import { AbscenceEnseignantComponent } from './pages/abscence-enseignant/abscence-enseignant.component';
import { ApprenantComponent } from './pages/apprenant/apprenant.component';
import { CourComponent } from './pages/cour/cour.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { EdtComponent } from './pages/edt/edt.component';
import { EnseignantComponent } from './pages/enseignant/enseignant.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginUtilisateurComponent } from './pages/login-utilisateur/login-utilisateur.component';
import { PayementComponent } from './pages/payement/payement.component';
import { PayementEngComponent } from './pages/payement-eng/payement-eng.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { ChangerMotPasseComponent } from './pages/changer-mot-passe/changer-mot-passe.component';
import { DetailsAbscenceEngComponent } from './composants/details-abscence-eng/details-abscence-eng.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BienvenueComponent } from './pages/bienvenue/bienvenue.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionBoutonComponent,
    DetailAppComponent,
    DetailApprenantComponent,
    DetailCourComponent,
    DetailEdtComponent,
    DetailEngComponent,
    DetailEngseignantComponent,
    DetailPayementAppComponent,
    DetailPayementEngComponent,
    DetailPayementAbscenceComponent,
    DetailUtilisateurComponent,
    HeaderRepetitionComponent,
    InformationAbscenceComponent,
    InformationAbscenceEngComponent,
    InformationEdtComponent,
    MenuRepetitionComponent,
    NouveauAbscenceApprenantComponent,
    NouveauAbscenceEnseignantComponent,
    NouveauApprenantComponent,
    NouveauCourComponent,
    NouveauEdtComponent,
    NouveauEnseignantComponent,
    NouveauPayementApprenantComponent,
    NouveauPayementEnseignantComponent,
    NouveauUtilisateurComponent,
    PaginationRepetitionComponent,
    AbscenceComponent,
    AbscenceEnseignantComponent,
    ApprenantComponent,
    CourComponent,
    DashbordComponent,
    EdtComponent,
    EnseignantComponent,
    InscriptionComponent,
    LoginComponent,
    LoginUtilisateurComponent,
    PayementComponent,
    PayementEngComponent,
    ProfilComponent,
    StatistiqueComponent,
    UtilisateurComponent,
    ChangerMotPasseComponent,
    DetailsAbscenceEngComponent,
    AccueilComponent,
    BienvenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

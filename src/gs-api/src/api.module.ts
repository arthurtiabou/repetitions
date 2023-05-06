/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { UtilisateurControllerService } from './services/utilisateur-controller.service';
import { PaiementEngControllerService } from './services/paiement-eng-controller.service';
import { PaiementAppControllerService } from './services/paiement-app-controller.service';
import { EntrepriseControllerService } from './services/entreprise-controller.service';
import { EnseignantControllerService } from './services/enseignant-controller.service';
import { EmploiTempControllerService } from './services/emploi-temp-controller.service';
import { CourControllerService } from './services/cour-controller.service';
import { ApprenantControllerService } from './services/apprenant-controller.service';
import { LigneAbscenceEngControllerService } from './services/ligne-abscence-eng-controller.service';
import { LigneAbscenceAppControllerService } from './services/ligne-abscence-app-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    UtilisateurControllerService,
    PaiementEngControllerService,
    PaiementAppControllerService,
    EntrepriseControllerService,
    EnseignantControllerService,
    EmploiTempControllerService,
    CourControllerService,
    ApprenantControllerService,
    LigneAbscenceEngControllerService,
    LigneAbscenceAppControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}

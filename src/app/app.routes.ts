import { Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { EventoComponent } from './LANDING/evento/evento.component';
import { IncripcionMeInscribireComponent } from './FLUJO-INSCRIPCIÓN-CORREDOR/incripcion-me-inscribire/incripcion-me-inscribire.component';
import { InscripcionEquipoComponent } from './FLUJO-INSCRIPCION-EQUIPO/inscripcion-equipo/inscripcion-equipo.component';
import { InscriptionInscribeCeComponent } from './inscription-inscribe-ce/inscription-inscribe-ce.component';
import { FeedbackFromParticipanteComponent } from './feedback-from-participante/feedback-from-participante.component';
import { FormDeInsParticipanteComponent } from './form-de-ins-participante/form-de-ins-participante.component';
import { FormInsNoSoyCorredorTresComponent } from './form-ins-no-soy-corredor-tres/form-ins-no-soy-corredor-tres.component';
import { FormInsNoSoyCorredorDosComponent } from './form-ins-no-soy-corredor-dos/form-ins-no-soy-corredor-dos.component';
import { FormInsNoSoyCorredorComponent } from './form-ins-no-soy-corredor/form-ins-no-soy-corredor.component';
import { InscripcionParticipanteEComponent } from './FLUJO-INSCRIPCION-EQUIPO/inscripcion-participante-e/inscripcion-participante-e.component';
import { FormDeInscripGrupalDComponent } from './form-de-inscrip-grupal-d/form-de-inscrip-grupal-d.component';
import { FormDeInscripcionGrupalComponent } from './form-de-inscripcion-grupal/form-de-inscripcion-grupal.component';
import { MisComprasComponent } from './MENU-DESPLEGABLE-FLUJO/mis-compras/mis-compras.component';
import { PatrocinioComponent } from './MENU-PRINCIPAL/patrocinio/patrocinio.component';
import { SiembraComponent } from './siembra/siembra.component';
import { RecorridoComponent } from './MENU-PRINCIPAL/recorrido/recorrido.component';
import { FormDeInscripCorredorComponent } from './FLUJO-INSCRIPCIÓN-CORREDOR/form-de-inscrip-corredor/form-de-inscrip-corredor.component';
import { DatosDelParticipanteComponent } from './FLUJO-INSCRIPCIÓN-CORREDOR/datos-del-participante/datos-del-participante.component';
import { AddCarritoComponent } from './add-carrito/add-carrito.component';
import { KitDeportivoComponent } from './Rutas-Reutilizables/kit-deportivo/kit-deportivo.component';
import { CarritoComponent } from './carrito/carrito.component';
import { GuiaDeTallasComponent } from './Rutas-Reutilizables/guia-de-tallas/guia-de-tallas.component';
import { AlojamientoHoteleriaComponent } from './MENU-DESPLEGABLE-FLUJO/alojamiento-hoteleria/alojamiento-hoteleria.component';
import { DetalleAlojamientoComponent } from './detalle-alojamiento/detalle-alojamiento.component';
import { EntrenamientoCaloriasComponent } from './entrenamiento-calorias/entrenamiento-calorias.component';
import { EntrenamientoObjetivoComponent } from './entrenamiento-objetivo/entrenamiento-objetivo.component';
import { FormInsParticipanteDComponent } from './form-ins-participante-d/form-ins-participante-d.component';
import { TerminosYCondicionesComponent } from './Rutas-Reutilizables/terminos-y-condiciones/terminos-y-condiciones.component';
import { TiendaVaciaIndComponent } from './Rutas-Reutilizables/tienda-vacia-ind/tienda-vacia-ind.component';
import { ProductosComponent } from './Rutas-Reutilizables/productos/productos.component';
import { PreguntasPatrocinadoresComponent } from './Rutas-Reutilizables/preguntas-patrocinadores/preguntas-patrocinadores.component';
import { LoginComponent } from './Rutas-Reutilizables/inicio-de-sesion/inicio-de-sesion.component';
import { RegisterComponent } from './Rutas-Reutilizables/registro/registro.component';
import { FeedbackInicioComponent } from './Rutas-Reutilizables/feedback-inicio/feedback-inicio.component';
import { FinalizePurchaseComponent } from './Rutas-Reutilizables/finalize-purchase/finalize-purchase.component';
import { PaymentDetailsComponent } from './Rutas-Reutilizables/payment-details/payment-details.component';
import { PaymentProcessingComponent } from './Rutas-Reutilizables/payment-processing/payment-processing.component';
import { PurchaseCompleteComponent } from './Rutas-Reutilizables/purchase-complete/purchase-complete.component';
import { FormDeInscEquipoComponent } from './FLUJO-INSCRIPCION-EQUIPO/form-de-insc-equipo/form-de-insc-equipo.component';
import { FormDeInscEquipoDComponent } from './FLUJO-INSCRIPCION-EQUIPO/form-de-insc-equipo-d/form-de-insc-equipo-d.component'; 
import { FormMiInscripcionComponent } from './FLUJO-INSCRIPCION-EQUIPO/form-mi-inscripcion/form-mi-inscripcion.component';
import { MiCuentaComponent } from './MENU-DESPLEGABLE-FLUJO/mi-cuenta/mi-cuenta.component';
import { AlojamientoHoteleriaDetalleComponent } from './MENU-DESPLEGABLE-FLUJO/alojamiento-hoteleria-detalle/alojamiento-hoteleria-detalle.component';
import { ActividadDetalleComponent } from './MENU-DESPLEGABLE-FLUJO/actividad-detalle/actividad-detalle.component';

export const routes: Routes = [

    //Flujo corredor-solo
    {path: 'subscribe-me', component: IncripcionMeInscribireComponent },
    {path: "inscripcion-corredor", component: FormDeInscripCorredorComponent},
    {path: "datosdelparticipante", component: DatosDelParticipanteComponent},
  

     ////////////////////////////////////////////////////////////////////////////////
     ////////////////////////////////////////////////////////////////////////////////

        // flujo inscripcion equipo
        { path: 'subscribe-team', component: InscripcionEquipoComponent },
        { path: 'inscribir-equipo', component: FormDeInscEquipoComponent },
        { path: "formulario-de-inscripción-de-equipo", component: FormDeInscEquipoDComponent},
            {path: "mi-inscripcion", component:FormMiInscripcionComponent},
              { path: 'datosdelparticipante/:index', component: InscripcionParticipanteEComponent },


//////////////////////COMPONENTES REUTILIZABLES///////////////////////////////////////////////////
{ path: 'terminos-condiciones', component: TerminosYCondicionesComponent },
{path:"tienda-vi", component:TiendaVaciaIndComponent},    
{path:"productos", component:ProductosComponent},
{ path: 'guiadetallas', component: GuiaDeTallasComponent },// Guia de tallas -
{path: 'kitdeportivo', component: KitDeportivoComponent },
{path:"Preguntas-Patrocinadores", component:PreguntasPatrocinadoresComponent},
{path: 'login', component: LoginComponent },
{path: 'register', component: RegisterComponent },
 {path:"feedback-inicio", component:FeedbackInicioComponent},
{ path: 'finalize-purchase', component: FinalizePurchaseComponent },
{ path: 'payment-details', component: PaymentDetailsComponent },
{ path: 'payment-processing', component: PaymentProcessingComponent },
{ path: 'purchase-complete', component: PurchaseCompleteComponent },

//////////////////////////MENU DESPLEGABLE //////////////////////////////////
    {path: "mi-cuenta",component: MiCuentaComponent},
    { path: 'mis-compras', component: MisComprasComponent },
    { path: 'alojamiento-hoteleria-detalle/:hotelName', component: AlojamientoHoteleriaDetalleComponent },
    { path: 'actividad-detalle/:activityName', component: ActividadDetalleComponent },
    { path: 'entrenamiento-calorias', component: EntrenamientoCaloriasComponent },
    { path: 'entrenamiento-objetivos', component: EntrenamientoObjetivoComponent },








    { path: 'store', component: TiendaComponent },
    { path: '', component: EventoComponent },
    { path: 'subscribe-ce', component: InscriptionInscribeCeComponent },
    {path:"Recorrido", component:RecorridoComponent},
    { path: 'addcarrito', component: AddCarritoComponent },
    { path: 'alojamiento-hoteleria', component: AlojamientoHoteleriaComponent},
    { path: 'detallle-alojamieto', component: DetalleAlojamientoComponent},
   
    { path: 'siembra', component: SiembraComponent },
    { path: 'patrocinio', component: PatrocinioComponent },
    {path: "carrito", component: CarritoComponent},
    {path: "form-inscr-participante-d", component:  FormInsParticipanteDComponent},
 

    { path: 'forminscripciongrupal', component: FormDeInscripcionGrupalComponent },
    { path: 'forminscripciongrupald', component: FormDeInscripGrupalDComponent },
    { path: 'formparticipante1', component: InscripcionParticipanteEComponent },
    { path: 'formnosoycorredor', component: FormInsNoSoyCorredorComponent },
    { path: 'formnosoycorredor2', component: FormInsNoSoyCorredorDosComponent },
    { path: 'formnosoycorredor3', component: FormInsNoSoyCorredorTresComponent },
    { path: 'forminsparticipant', component: FormDeInsParticipanteComponent },
    { path: 'feedback', component: FeedbackFromParticipanteComponent },



];

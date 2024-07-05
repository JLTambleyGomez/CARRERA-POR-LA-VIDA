import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Participant {
  name: string;
  status: string;
}

@Component({
  selector: 'app-form-de-insc-equipo-d',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-de-insc-equipo-d.component.html',
  styleUrls: ['./form-de-insc-equipo-d.component.css']
})
export class FormDeInscEquipoDComponent implements OnInit {
  currentUrl: any;
  datosDelParticipante: string = 'incompleto';
  teamName: string = '';
  teamNameStatus: string = 'incompleto';
  participants: Participant[] = [
    { name: 'Participante 1', status: 'incompleto' },
    { name: 'Participante 2', status: 'incompleto' },
    { name: 'Participante 3', status: 'incompleto' },
    { name: 'Participante 4', status: 'incompleto' }
  ];
  isFormComplete: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeLocalStorage();
    this.loadFormData();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  initializeLocalStorage() {
    const storedData = localStorage.getItem('datosDePaticipantesEquipo');
    if (!storedData) {
      const initialData = {
        datosDelParticipante: 'incompleto',
        teamName: '',
        teamNameStatus: 'incompleto',
        participants: this.participants
      };
      localStorage.setItem('datosDePaticipantesEquipo', JSON.stringify(initialData));
    }
  }

  loadFormData() {
    const ls = JSON.parse(localStorage.getItem('datosDePaticipantesEquipo') || '{}');
    this.datosDelParticipante = ls.datosDelParticipante || 'incompleto';
    this.teamName = ls.teamName || '';
    this.teamNameStatus = ls.teamNameStatus || 'incompleto';
    this.participants = ls.participants || this.participants;
    this.checkFormCompletion();
  }

  checkFormCompletion() {
    this.teamNameStatus = this.teamName.length >= 4 ? 'completo' : 'incompleto';
    this.isFormComplete = this.teamNameStatus === 'completo' && this.datosDelParticipante === 'completo' && this.participants.every(p => p.status === 'completo');
  }

  handleDatosDePaticipantes() {
    this.router.navigateByUrl("/mi-inscripcion");
  }

  handleParticipant(index: number) {
    this.router.navigateByUrl(`/datosdelparticipante/${index}`);
  }

  saveToLocalStorage() {
    const inscripcionEquipo = {
      datosDelParticipante: this.datosDelParticipante,
      teamName: this.teamName,
      teamNameStatus: this.teamNameStatus,
      participants: this.participants
    };
    localStorage.setItem('datosDePaticipantesEquipo', JSON.stringify(inscripcionEquipo));

      const inscripcion = JSON.parse(localStorage.getItem('inscripcionEquipo') || '{}');
      inscripcion.datosDeParticipantes = 'completo';
      localStorage.setItem('inscripcionEquipo', JSON.stringify(inscripcion));


  }

  updateParticipantStatus(index: number, status: string) {
    this.participants[index].status = status;
    this.saveToLocalStorage();
    this.checkFormCompletion();
  }

  handleTeamNameChange() {
    this.teamNameStatus = this.teamName.length >= 4 ? 'completo' : 'incompleto';
    this.saveToLocalStorage();
    this.checkFormCompletion();
  }

  continueWithPayment() {
    if (this.isFormComplete) {
      this.saveToLocalStorage();
      this.router.navigateByUrl("/inscribir-equipo");
    }
  }

  handleBack() {
    this.router.navigateByUrl("/subscribe-team");
  }
}

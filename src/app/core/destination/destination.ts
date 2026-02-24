import { Component, inject, input, resource } from '@angular/core';
import { DestinationEntry, DestinationParkEntry, EntityChildrenResponse } from '../../../theme-park-api-client';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Park } from '../park/park';

@Component({
  selector: 'app-destination',
  imports: [Park],
  templateUrl: './destination.html',
  styleUrl: './destination.css',
})
export class Destination {
  destination = input<DestinationEntry>();
}

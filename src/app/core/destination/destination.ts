import { Component, computed, inject, input, resource } from '@angular/core';
import { DestinationEntry, DestinationParkEntry, EntityChildrenResponse, EntityData } from '../../../theme-park-api-client';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Park } from '../park/park';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-destination',
  imports: [Park, TabsModule],
  templateUrl: './destination.html',
  styleUrl: './destination.css',
})
export class Destination {
  destination = input<DestinationEntry>();
  parks = computed(() => this.destination()?.parks);
}

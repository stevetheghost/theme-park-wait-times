import { Component, computed, inject, input, resource } from '@angular/core';
import { DestinationParkEntry, EntityChild, EntityChildrenResponse, EntityLiveData, EntityLiveDataResponse, EntityType } from '../../../theme-park-api-client';
import { first, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Attraction } from "../attraction/attraction";

@Component({
  selector: 'app-park',
  imports: [Attraction],
  templateUrl: './park.html',
  styleUrl: './park.css',
})
export class Park {
  http = inject(HttpClient);
  park = input<DestinationParkEntry>();

  parkChildren = resource<EntityLiveData[], DestinationParkEntry>({
    params: () => this.park()!,
    loader: async ({ params }) => {
      let park = params;
      let children: EntityLiveData[] = [];
      await firstValueFrom(
        this.http.get<EntityLiveDataResponse>(`${environment.apiUrl}/entity/${park.id}/live`)
      ).then(response => {
        children = response.liveData ?? []
      })
        .catch(error => console.log(error));
      return children;
    },
    defaultValue: [] as EntityLiveData[]
  })
  attractions = computed(() => this.parkChildren.value().filter(child => child.entityType == 'ATTRACTION'));
  shows = computed(() => this.parkChildren.value().filter(child => child.entityType == 'SHOW'));

}

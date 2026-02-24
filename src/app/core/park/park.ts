import { Component, computed, inject, input, resource } from '@angular/core';
import { DestinationParkEntry, EntityChild, EntityChildrenResponse, EntityLiveData, EntityLiveDataResponse, EntityType } from '../../../theme-park-api-client';
import { first, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-park',
  imports: [],
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
      )
        .then(response => {
          children = response.liveData ?? []
        })
        .catch(error => console.log(error));
      return children;
    },
    defaultValue: [] as EntityLiveData[]
  })
  attractions = computed(() => this.parkChildren.value().filter(child => child.entityType == 'ATTRACTION'));

  // attractions = resource<EntityLiveData[],EntityChild[]>({
  //    params: () => this.parkChildren,
  //    loader: async ({params}) => {
  //     let children = params;
  //     let attractions: EntityLiveData[] = [];
  //     let count = 0;
  //     for(let c of children.filter(c=> c.entityType == 'ATTRACTION')){
  //       if(count > 5){ break; }
  //       let response = await firstValueFrom(this.http.get<EntityLiveDataResponse>(`${environment.apiUrl}/entity/${c.id}/live`));
  //       if(response.liveData)
  //         attractions.push(response.liveData!);
  //     }
  //    },
  // })

}

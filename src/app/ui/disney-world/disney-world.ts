import { Component, inject, resource } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DestinationsResponse } from '../../../theme-park-api-client';
import { Destination } from "../../core/destination/destination";

@Component({
  selector: 'app-disney-world',
  imports: [Destination],
  templateUrl: './disney-world.html',
  styleUrl: './disney-world.css',
})
export class DisneyWorld {
  http = inject(HttpClient);

  disneyWorld = resource({
    loader: async () => {
      let destinations = (await firstValueFrom(this.http.get<DestinationsResponse>(`${environment.apiUrl}/destinations`))).destinations;
      let wdw = destinations?.find(d => d.slug == 'waltdisneyworldresort')
      return wdw;
    }
  })

}

import { Component, computed, input } from '@angular/core';
import { EntityLiveData, LiveStatusType } from '../../../theme-park-api-client';
import { TagModule, Tag } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

type TagSeverity = "success" | "secondary" | "info" | "warn" | "danger" | "contrast" | null | undefined;


@Component({
  selector: 'app-attraction',
  imports: [TagModule, TooltipModule],
  templateUrl: './attraction.html',
  styleUrl: './attraction.css',
})
export class Attraction {
  attraction = input<EntityLiveData>();
  lastUpdated = computed(() => this.attraction()?.lastUpdated);
  name = computed(() => this.attraction()?.name);
  id = computed(() => this.attraction()?.id);
  status = computed(() => this.attraction()?.status);
  standbyWaitTime = computed(() => this.attraction()?.queue?.STANDBY?.waitTime);
  lightningLaneStatus = computed(() => this.attraction()?.queue?.RETURN_TIME?.state);
  nextLightningLaneTime = computed(() => {
    let dateString = this.attraction()?.queue?.RETURN_TIME?.returnStart;
    let timeString;
    if(dateString){
      let date = new Date(dateString);
      // timeString = `${date.getHours()}:${date.getMinutes()} ${date.get}`
     timeString = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
});

    }
    return timeString
  });

  hello(){
  }

  getSeverityForAttractionStatus(status: LiveStatusType | undefined): TagSeverity {
    let severity: TagSeverity;
    switch (status) {
      case 'CLOSED':
        severity = 'danger'; break;
      case 'DOWN':
        severity = 'warn'; break;
      case 'OPERATING':
        severity = 'success'; break;
      case 'REFURBISHMENT':
        severity = 'contrast'; break;
      default:
        severity = 'secondary'

    }
    return severity;

    // "success" | "info" | "warn" | "danger" | "secondary" | "contrast"
  }

}

import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { Observable } from 'rxjs';
import { NotificationModel } from './notification.queries';

@Component({
  selector: 'app-notifications',
  template: `
    <div>
        Our main focus is to make this notifications look nice
        <p>
            We want to show the number of unread notifications
        </p>
        <p>
            We want to show each loaded unread notification as a separate box with title and description.
            We want it to show in the right upper corned and disapear after few seconds.
        </p>
        <p>
            We also want to show new notifications when they appear.
            Try to simulate how the new notifications will appear in the database.
        </p>
        <p>
            As an additional question you can quickly describe how you would handle retival of new notifications.
            What in case if you would use graphql? What if your endpoint would be normal REST endpoint?
        </p>
        <div *ngFor="let notification of this.notifications | async">
            {{notification.title}}
            {{notification.description}}
        </div>
    </div>
  `,
  styles: [
      `p {
          color: red;
      }`,
  ]
})
export class NotificationsComponent implements OnInit {

  public notifications: Observable<NotificationModel[]> = new Observable<NotificationModel[]>();

  constructor(private notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
      this.notifications = this.notificationsService.getUnreadNotifications();
  }

}

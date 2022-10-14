import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NotificationModel, numberOfUnreadNotifications, UnreadNotificationsCountResponse, unreadNotificationsQuery, UnreadNotificationsResponse } from './notification.queries';
import { Observable, shareReplay, map, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private static SERVER_URL = environment.graphql_server;
  private notifications_mock = [{
          id: 1,
          title: 'Streaming ended',
          description: 'Streaming ended',
          nodeId: 'qgsad17236'
      }, {
          id: 2,
          title: 'Title',
          description:'description',
          nodeId: '1ujh123'
      }]

  constructor(private http: HttpClient) { }

  getUnreadNotifications(): Observable<NotificationModel[]>{
      //    return this.http.post<UnreadNotificationsResponse>(`${NotificationsService.SERVER_URL}`, {query: unreadNotificationsQuery(userId)})
      //        .pipe(map(value => value.data.unreadNotificationsForUser.nodes), shareReplay(1));
      return of(this.notifications_mock);
  }
  
  getUnreadNotificationsCount(): Observable<number>{
      // return this.http.post<UnreadNotificationsCountResponse>(`${NotificationsService.SERVER_URL}`, {query: numberOfUnreadNotifications(userId)})
      //                                                         .pipe(map(value => {return value.data.unreadNotificationsForUser.totalCount}), shareReplay(1));
          return of(this.notifications_mock.length).pipe(shareReplay(1));
  }
}

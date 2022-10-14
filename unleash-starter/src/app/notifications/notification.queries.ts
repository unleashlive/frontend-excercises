export const unreadNotificationsQuery = (userId: string) => {
    return `
    {
      unreadNotificationsForUser(userid: ${userId}) {
        nodes {
            id,
            title,
            description,
            nodeId
      }
    }`
}
export const numberOfUnreadNotifications = (userId: string) => {
    return `
    {
      unreadNotificationsForUser(userid: ${userId}) {
        totalCount
      }
    }`
}

export interface NotificationModel {
    id: number;
    title: string;
    description: string;
    nodeId?: string;
}

export interface UnreadNotificationsResponse {
    "data": {
        "unreadNotificationsForUser": {
            "nodes": NotificationModel[]
        };
    };
}

export interface UnreadNotificationsCountResponse {
    "data": {
        "unreadNotificationsForUser": {
            "totalCount": number;
        };
    };
}


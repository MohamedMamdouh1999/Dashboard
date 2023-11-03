import { INotification } from "../../interfaces/inotification"
import { IUserItem } from "../../interfaces/iuser-item"

export const notifications: INotification[] = [
  { icon: 'fa-solid fa-cloud-arrow-down', subject: 'Download complete', description: 'Lorem ipsum dolor sit amet consectetur. ' },
  { icon: 'fa-solid fa-cloud-arrow-up', subject: 'Upload complete', description: 'Lorem ipsum dolor sit amet consectetur. ' },
  { icon: 'fa-regular fa-trash-can', subject: '300 MB trash files', description: 'Lorem ipsum dolor sit amet consectetur. ' }
]

export const userItems: IUserItem[] = [
  { icon: 'fa-regular fa-user', label: 'header.user.profile' },
  { icon: 'fa-solid fa-power-off', label: 'header.user.logout' }
]

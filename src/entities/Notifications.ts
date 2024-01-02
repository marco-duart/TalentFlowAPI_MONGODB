import { Schema, model } from "mongoose";

export interface INotifications extends Document {
  notificationType: string; //(scheduled interview, status update, etc.)
  recipient: string;
  message: string;
  dateTime: Date;
  active: boolean;
}

const NotificationsSchema = new Schema(
  {
    notificationType: { type: String, required: true },
    recipient: { type: Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    dateTime: { type: Date, required: true },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const Notifications = model("Notifications", NotificationsSchema);

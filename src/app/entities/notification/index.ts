import { randomUUID } from "node:crypto";

import { Replace } from "@helpers/replace";
import { Content } from "../content";

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
};

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(prs: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...prs,
      createdAt: prs.createdAt ?? new Date()
    };
  };

  public get id() {
    return this._id;
  };

  // content
  public set content(ctx: Content) {
    this.props.content = ctx;
  };

  public get content(): Content {
    return this.props.content;
  };

  // category
  public set category(ctx: string) {
    this.props.category = ctx;
  };

  public get category(): string {
    return this.props.category;
  };

  // recipientId
  public set recipientId(ctx: string) {
    this.props.recipientId = ctx;
  };

  public get recipientId(): string {
    return this.props.recipientId;
  };

  // readAt
  public set readAt(ctx: Date | null | undefined) {
    this.props.readAt = ctx;
  };

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  };

  //canceledAt
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  };

  public cancel() {
    return this.props.canceledAt = new Date();
  }

  //createdAt
  public get createdAt(): Date {
    return this.props.createdAt;
  };
};
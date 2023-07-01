import { CommentInterface } from 'interfaces/comment';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  title: string;
  content: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    comment?: number;
  };
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  organization_id?: string;
  user_id?: string;
}

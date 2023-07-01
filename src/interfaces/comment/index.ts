import { PostInterface } from 'interfaces/post';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  post_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  post?: PostInterface;
  user?: UserInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  post_id?: string;
  user_id?: string;
}

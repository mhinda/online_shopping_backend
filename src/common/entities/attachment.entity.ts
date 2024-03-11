import { CoreEntity } from './core.entity';

export class Attachment extends CoreEntity {
  thumbnail?: string;
  original?: string;
}

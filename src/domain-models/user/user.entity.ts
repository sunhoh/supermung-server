import * as bcrypt from 'bcrypt';

export interface UserProps {
    id: string;
    email: string;
    name: string;
    phoneNumber: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  }

export class User {
    id: string;
    email: string;
    name: string;
    phoneNumber: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

  constructor(props: UserProps) {
    this.id = props.id;
    this.email = props.email;
    this.name = props.name;
    this.phoneNumber = props.phoneNumber;
    this.password = props.password;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
  }

  public async validatePasswordAsync(password: string): Promise<boolean> {
    if (!this.password) {
      return false; 
    }

    return bcrypt.compare(password, this.password);
  }

  // @ 앞에 있는 id에서 앞 3글자만 보이고 나머지는 *로 변환
  public getMaskedEmail(): string {
    if (!this.email) {
      return '';
    }

    const [id, domain] = this.email.split('@');

    const maskedId = id.slice(0, 3) + '*'.repeat(id.length - 3);

    return `${maskedId}@${domain}`;
  }
}

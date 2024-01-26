import { Component } from '@angular/core';

export interface User {
  id: number;
  username: string;
  roles: Role[]
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

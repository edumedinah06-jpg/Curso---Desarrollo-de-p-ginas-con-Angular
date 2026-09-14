import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // El Guard consulta al servicio para verificar si existe sesión.
  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
import { InjectionToken } from '@angular/core';

import { IEnvironment } from '../models/environment.interface';

/**
 * Provides the environment object
 */
export const ENVIRONMENT = new InjectionToken<IEnvironment>('@rsds/shared/angular-environment.environment');

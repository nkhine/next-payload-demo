import React from 'react';
import { Page } from '../../../src/payload-types';
import { HighImpactHero } from './HighImpact';
import { MediumImpactHero } from './MediumImpact';
import { LowImpactHero } from './LowImpact';

const heroes = {
  highImpact: HighImpactHero,
  mediumImpact: MediumImpactHero,
  lowImpact: LowImpactHero,
}

export const Hero: React.FC<Page['hero']> = (props) => {
  const { type } = props;
  const HeroToRender = heroes[type];
  return <HeroToRender {...props} />
}
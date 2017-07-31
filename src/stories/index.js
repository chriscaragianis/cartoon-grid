import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Grid from '../Grid.js';
import Cell from '../Cell.js';
import '../Grid.css';

storiesOf('Grid', module)
  .add('12 cell grid', () => (
    <Grid cells="12" />
  ));

storiesOf('Cell', module)
  .add('by color', () => (
    <Cell color="red" />
  ));

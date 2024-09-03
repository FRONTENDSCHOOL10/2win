import { ReactElement } from 'react';
import S from './style.module.scss';

interface descriptionProps {
  title: string;
  description: string;
}

function Description({ title, description }: descriptionProps): ReactElement {
  return (
    <div className={S.descriptions}>
      <div className={S.header}>
        <h1 className={S.title}>{title}</h1>
      </div>
      <p className={S.description}>{description}</p>
    </div>
  );
}

export default Description;
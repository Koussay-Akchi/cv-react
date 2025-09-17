import Image from 'next/image';
import {FC, memo, PropsWithChildren, useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const {t} = useTranslation();

  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{t(name)}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {t} = useTranslation();
  const {name, level, max = 10, image, image2} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      <span className="mb-2 ml-2 flex gap-1 text-sm font-medium">
        {t(name)}
        {image && <Image alt={name} className="h-5" height={20} sizes="20px" src={image} width={20} />}
        {image2 && <Image alt={name} className="h-5" height={20} sizes="20px" src={image2} width={20} />}
      </span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div className="h-full rounded-full bg-orange-400" style={{width: `${percentage}%`}} />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';

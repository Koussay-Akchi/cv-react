import Image from 'next/image';
import {FC, memo, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Skill as SkillType} from '../../../data/dataDef';

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Cloud/DevOps', 'AI', 'Other Tools'];

export const SkillsGrid: FC<{skills: SkillType[]}> = memo(({skills}) => {
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesSearch = t(skill.name).toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' ||
        (skill.categories && skill.categories.includes(selectedCategory.toLowerCase()));
      return matchesSearch && matchesCategory;
    });
  }, [skills, search, selectedCategory, t]);

  return (
    <div className="flex w-full flex-col">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          className="w-full rounded-md border border-neutral-300 p-2 text-sm shadow-sm focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 md:w-1/3"
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('Search skills...')}
          type="text"
          value={search}
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              className={`rounded-full px-4 py-1 text-sm font-medium transition-colors duration-300 ${
                selectedCategory === cat
                  ? 'bg-orange-400 text-white'
                  : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
              }`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {t(cat)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
      {filteredSkills.length === 0 && (
        <div className="py-8 text-center text-neutral-500">
          {t('No skills found.')}
        </div>
      )}
    </div>
  );
});

SkillsGrid.displayName = 'SkillsGrid';

const SkillCard: FC<{skill: SkillType}> = memo(({skill}) => {
  const {t} = useTranslation();
  const {name, image, image2} = skill;

  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-12 items-center justify-center gap-2">
        {image && (
          <Image alt={name} className="h-10 w-10 object-contain" src={image} />
        )}
        {image2 && (
          <Image alt={name} className="h-10 w-10 object-contain" src={image2} />
        )}
      </div>
      <span className="text-center text-sm font-medium text-neutral-700">{t(name)}</span>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

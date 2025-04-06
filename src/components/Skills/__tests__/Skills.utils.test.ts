import { skillsData, Skill, SkillCategory } from '../Skills.utils';

describe('Skills Utils', () => {
  it('skillsData should have 4 categories', () => {
    expect(skillsData.length).toBe(4);
  });

  it('should have frontend, backend, tools, and management categories', () => {
    const categories = skillsData.map(category => category.id);
    expect(categories).toContain('frontend');
    expect(categories).toContain('backend');
    expect(categories).toContain('tools');
    expect(categories).toContain('management');
  });

  it('skills should have valid structure', () => {
    skillsData.forEach(category => {
      // Check category structure
      expect(category).toHaveProperty('id');
      expect(category).toHaveProperty('titleKey');
      expect(category).toHaveProperty('icon');
      expect(category).toHaveProperty('skills');
      expect(Array.isArray(category.skills)).toBe(true);

      // Check each skill in the category
      category.skills.forEach(skill => {
        expect(skill).toHaveProperty('id');
        expect(skill).toHaveProperty('name');
        expect(skill).toHaveProperty('level');

        // Level should be between 0 and 100
        expect(typeof skill.level).toBe('number');
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
      });
    });
  });

  it('frontend category should have React skill with high proficiency', () => {
    const frontendCategory = skillsData.find(category => category.id === 'frontend');
    expect(frontendCategory).toBeDefined();

    if (frontendCategory) {
      const reactSkill = frontendCategory.skills.find(skill => skill.id === 'react');
      expect(reactSkill).toBeDefined();

      if (reactSkill) {
        expect(reactSkill.name).toBe('React');
        expect(reactSkill.level).toBeGreaterThanOrEqual(80); // Assuming high proficiency is >= 80
      }
    }
  });
});

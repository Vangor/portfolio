import { skillsData } from '../Skills.utils';

describe('Skills Utils', () => {
  it('exposes three skill groups', () => {
    expect(skillsData).toHaveLength(3);
    expect(skillsData.map(category => category.id)).toEqual([
      'leadership',
      'ai',
      'engineering',
    ]);
  });

  it('keeps the expected skill chips in each group', () => {
    expect(skillsData[0].skills).toContain('Fractional CTO');
    expect(skillsData[1].skills).toContain('LLM systems');
    expect(skillsData[2].skills).toContain('Observability');
  });
});

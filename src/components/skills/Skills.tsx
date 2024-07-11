import { SkillsProps } from "./skills.types";

export default function Skills({ skills }: SkillsProps) {
  return (
    <>
      <ul>
        {skills.map((skill, key) => (
          <li key={key}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

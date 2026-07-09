export function validateDynamicSql(input: string): boolean {
  const cleanInput = input.replace(/\s+/g, " ").trim().toLowerCase();
  
  // High-risk lexical denylist
  const denyList = [
    "drop table", 
    "delete from", 
    "alter table", 
    "inject_sql", 
    "admin_override"
  ];
  
  return !denyList.some(adversarialTerm => cleanInput.includes(adversarialTerm));
}